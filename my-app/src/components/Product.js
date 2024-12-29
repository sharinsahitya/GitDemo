import React from 'react';

export default function Product(props){
    console.log(props);

    function myfunc(){
        props.price=9000;
    }

    return (
        <div className='text-center'>
            <h2>{props.price}</h2>
            <p>{props.name}</p>
            <p>
                <button onClick={myfunc} >Add To Cart</button>
            </p>
        </div>
    )
}


// function Product(){
//     return <h1>Product</h1>
// }
//export default Product;