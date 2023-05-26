import React from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';

const Cart = ({cart,handleClearCart,children}) => {
    // const cart = props.cart;
    let total =0;
    let shipping =0;
    let GrandTotal = 0
    let quantity =0;
    for(const product of cart){
        product.quantity =product.quantity || 1;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity
        

         
    }
    const tax = total* 0.05
    GrandTotal = GrandTotal + total + shipping + tax;

    return (
        <div className='cart'>
             <h2>Order Summery</h2>
                <p>Selected Items : {quantity}</p>
                <p> Total Price : $ {total}</p>
                <p>  Shipping Cost : $ {shipping}</p>
                <p> Tax : $ {tax}</p>
                <h4> Grand Total :$ {GrandTotal}</h4>
               {children}
                <div>
                <button className='clearCart' onClick={handleClearCart}>Clear Cart</button>
                </div>
        </div>
    );
};

export default Cart;