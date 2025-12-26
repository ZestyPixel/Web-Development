const mongoose = require('mongoose');
const Schema = mongoose.Schema;

main().then(() => console.log("connection successful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema = new Schema({
    item: String,
    price: Number,
});

const customerSchema = new Schema({ 
    name: String, 
    orders: [{
        type: Schema.Types.ObjectId, 
        ref: "Order",
    }]
});

//Middleware does not have findbyIdAndDelete but has findOneAndDelete which is called by findByIdAndDelete internally.
//This means that we can use findOneAndDelete middleware to handle findByIdAndDelete calls.
//We call middleware on schema because schema defines behaviour and middlewares are part of the behaviour.
customerSchema.pre("findOneAndDelete", async()=>{ //Here we write what command the middleware will run on.
    console.log("Pre Middleware");
});

customerSchema.post("findOneAndDelete", async(data)=>{
    if(data.orders.length){
        await Order.deleteMany({_id: {$in: data.orders}});
    }
});

const Order = mongoose.Schema("Order", orderSchema);
const Customer = mongoose.Schema("Customer", customerSchema);

const addOrders = async ()=> {
    let res = await Order.insertMany([
        {item: "Samosa", price: 10},
        {item: "Pakoda", price: 20},
        {item: "Chai", price: 10},
    ]);

    console.log(res);
};

const addCustomers = async() =>{
    let cust1 = new Customer({
        name: "Rahul",
    });

    let order1 = await Order.findOne({item: "Chai"}); 
    let order2 = await Order.findOne({item: "Samosa"});

    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let result = await cust1.save();
    console.log(result);
};

addOrders();
addCustomers();

//Deletion. Functions to add and delete customers.

const addCust = async() =>{
    let cust1 = new Customer({
        name: "Rakesh",
    });

    let newOrder = new Order({
        item: "Pizza",
        price: 250
    });

    newCust.orders.push(newOrder);

    await newOrder.save();
    await newCust.save();
};

addCust();

const delCust = async ()=> {
    let data = await Customer.findByIdAndDelete("6487f0e2f0d5c4b1a5e8c123");
    console.log(data);
};

//We can use two middlewares:
//Pre and Post run.
//Format: 
// const schema = new Schema({ /* ... */ });
//      schema.pre('save', function() { This 
//      do stuff
// });