import "./Product.css";

function Product({Title = "Dunno", Price = 1, Features}){ //Destructuring the props object to directly get the Title prop which is a key in the props object.
    let styles = {backgroundColor: Price > 40000 ?  "black": "grey" };
    return(
    <div className="Product" style={styles}>
        <h3>{Title}</h3>
        <h4>Price: {Price}</h4>
        <ul>Features: {Features.map((Feature)=>{
            return <li>{Feature}</li>;
            })}
        </ul>
        {Price > 40000 ? (<h4>Discounted Price: {Price*0.5}</h4>): <h4>No Discount Available</h4>}
        {Price > 50000 && <h4>Special Offer Available</h4>}
    </div>
    );
}

export default Product;