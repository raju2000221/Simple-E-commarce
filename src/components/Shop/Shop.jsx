import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/cart';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] =useState([])
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    
    const hendleAddToCart = (product) =>{
        // cart.push(product);
        
        const newCart = [...cart,product]
        setCart(newCart);
        
    
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
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;