import {useState} from 'react';


const Imagecard = (props) => {

    const elements = props.cardElements;

    const [elements, setelements] = useState([
        {title: "A package", body: "A - z features", price: 9.99, id: 1, featured: "no"},
        {title: "B package", body: "B - y features", price: 5.99, id: 2, featured: "yes"},
        {title: "C package", body: "C - x features", price: 2.99, id: 3, featured: "no"}
    ]);


    return ( 

        <div className="container">
            {elements.map((product) => (
                // run through list using product id
                <div className="product-preview" key={ product.id }>
                    {/* create elements using information accessed */}
                    <h2>{ product.title }</h2>
                    <p> { product.body }</p>
                    <p> { product.price } </p>
                </div>
            ))}
        </div>
     );
}
 
export default Imagecard;