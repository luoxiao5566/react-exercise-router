import React from 'react';
const ProductObject = ({name,id,price,quantity,desc}) => (
    <div className='pro'>
        <h2>Product Details</h2>
            <p>Name: {name}</p>
            <p>Id: {id}</p>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Desc: {desc}</p>
            <p>URL: {`/products/${id}`}</p>

    </div>
);

export default ProductObject;