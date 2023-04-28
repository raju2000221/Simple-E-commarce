import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';


const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const hendleAddToCart = (product) =>{
        console.log('sjdhj', product)
       }


    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        hendleAddToCart ={hendleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>order summery</h4>
            </div>
        </div>
    );
};

export default Shop;