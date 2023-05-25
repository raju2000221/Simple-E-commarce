import React from 'react';
import Cart from '../Cart/cart';
import { useLoaderData } from 'react-router-dom';

const Order = () => {
    const products = useLoaderData()
    console.log(products)
    return (
        <div className='shop-container'>
            <div className='products-container'>
            <h2>Order Page: {products.length} </h2>
            </div>
            <div className='cart-container'>
                <Cart cart={products}></Cart>
            </div>
        </div>
    );
};

export default Order;