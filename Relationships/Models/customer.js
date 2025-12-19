//One to many
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

const customerSchema = new Schema({ //Here we are referring orders inside customer document
    name: String, 
    orders: [{
        type: Schema.Types.ObjectId, //To tell mongoose that we are storing object ids
        ref: "Order", //Reference to which model
    }]
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

    let order1 = await Order.findOne({item: "Chai"}); //Even though we are pushing entire order, only id will be stored in customer document.
    let order2 = await Order.findOne({item: "Samosa"});

    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let result = await cust1.save();
    console.log(result);
};

addOrders();
addCustomers();

//You can use populate to get complete order details while querying customer
//Customer.findOne({name: "Rahul"}).populate("orders").then(data => console.log(data));
//Here, mongoose will fetch complete order details from Order collection whose ids are stored in orders array of customer document
