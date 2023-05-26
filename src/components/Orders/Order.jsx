import React, { useState } from 'react';
import Cart from '../Cart/cart';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import ReveiwItem from '../ReviewItem/ReveiwItem';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

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
    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
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
                <Cart 
                cart={cart}
                handleClearCart={handleClearCart}
                >
                     <div>
                     <Link  to="/checkout">
                <button className='reviewOrder'>Check Out</button>
                </Link>
                </div>
                </Cart>
                
            </div>
        </div>
    );
};

export default Order;