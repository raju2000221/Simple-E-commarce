import React from 'react';
import './product.css'

const Product = (props) => {
   const {name,price,img,seller,quantity,ratings} = props.product
   const hendleAddToCart = props.hendleAddToCart;

 
    return (
        <div className='product'>
            <img src={img}></img>
            <div className="product-info">
            <h6 className='product-name'>{name}</h6>
            <p>Price : ${price}</p>
            <p> Manufacturer : {seller}</p>
            <p>Rating: {ratings}</p>
            </div>
            <button onClick={()=>hendleAddToCart(props.product)}
            className='btn-cart' >Add to Cart</button>
        </div>
    );
};

export default Product;