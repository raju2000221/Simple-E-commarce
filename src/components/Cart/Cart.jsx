import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    let total =0;
    let shipping =0;
    let GrandTotal = 0
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
        

         
    }
    const tax = total* 0.05
    GrandTotal = GrandTotal + total + shipping + tax;

    return (
        <div className='cart'>
             <h4>order summery</h4>
                <p>Selected Items : {cart.length}</p>
                <p> Total Price : $ {total}</p>
                <p>  Shipping Cost : $ {shipping}</p>
                <p> Tax : $ {tax}</p>
                <h3> Grand Total :$ {GrandTotal}</h3>
        </div>
    );
};

export default Cart;