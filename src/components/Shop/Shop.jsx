import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/cart';
import { addToDb, getShoppingCart,deleteShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] =useState([])
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(()=>{
        const storedCart = getShoppingCart();
        const saveCart =[];
        // s1: get id
        for (const id in storedCart){
            // s2: get the product using id
            const saveProduct = products.find(product =>product.id == id)
           
            console.log(saveProduct);
            // s3: get quantity of te product
            if(saveProduct){
                const quantity = storedCart[id];
                saveProduct.quantity =quantity;
                // s4 : add the added product to the saved cart
                saveCart.push(saveProduct)
            }
            
            


        }
        setCart(saveCart)
    },[products])
    
    const hendleAddToCart = (product) =>{
        // cart.push(product);
        
        const newCart = [...cart,product]
        setCart(newCart);
        addToDb(product.id)
        
    
       }
       const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
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
               <Cart 
               cart={cart}
               handleClearCart={handleClearCart}
               
               >
                 <div>
                 <Link  to="/Orders">
                <button className='reviewOrder'>Review Order</button>
                </Link>
                </div>
               </Cart>
            </div>
        </div>
    );
};

export default Shop;