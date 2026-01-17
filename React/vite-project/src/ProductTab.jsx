import Product from "./Product";
function ProductTab(){
    let Features = ["Hi-tech", "Durable", "Fast"];
    let Feas = {a: "hi-tech"};
    return(
        <>
            {/* <Product Title="Phone" Price={20000} Features={Features[0]} />  */}
            <Product Title="Laptop" Price="60000" Features={Features} />
            <Product Title="Phone" Price="40000" Features={Features} />
            <Product Title="Headphones" Price="10000" Features={Features} />
            <Product Title="TV" Price="100000" Features={Features} />
            {/* <Product Title="Monitor" Price="30000" Features={Feas.a} /> */}
        </>
    );
}

export default ProductTab;

// Number prop has to be passed in curly braces {} to be treated as a number otherwise it will be treated as a string.