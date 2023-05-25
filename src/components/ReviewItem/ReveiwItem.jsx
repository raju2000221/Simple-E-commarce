import React from 'react';
import './Revireite,.css'

const ReveiwItem = ({product, handleRemovefromCart}) => {
    const {id, img,price,quantity,name} = product;
    // console.log(product)
    return (
        <div className='revire-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                    <p className='Product-title'>{name}</p>
                    <p>Price: <span className='orange-text'>${price}</span></p>
                    <p>Quantity: <span className='orange-text'>${quantity}</span></p>
                    
            </div>
            <button onClick={() => handleRemovefromCart(id)} className='button'>D</button>
        </div>
    );
};

export default ReveiwItem;