import React, { useState } from 'react';
import Cart from '../Cart/cart';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import ReveiwItem from '../ReviewItem/ReveiwItem';
import './Order.css'
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const saveCart = useLoaderData();
    // console.log(saveCart)
    const [cart, setCart] = useState(saveCart)

    const handleRemovefromCart = (id) =>{
        console.log(id)
           const remaining =cart.filter(product => product.id !== id)
           console.log(remaining)
           setCart(remaining)
           removeFromDb(id)
           
    }
    
    return (
        <div className='shop-container'>
            <div className='review-container'>
            {
                cart.map(product => <ReveiwItem
                key={product.id}
                product={product}
                handleRemovefromCart ={handleRemovefromCart}
                ></ReveiwItem>)
            }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;