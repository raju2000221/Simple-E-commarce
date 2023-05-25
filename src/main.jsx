import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Layout/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop.jsx'
import Order from './components/Orders/Order.jsx'
import Inventory from './components/Inventory/Inventory.jsx'
import Signup from './components/Signup/Signup.jsx'
import cartProductsLoader from './components/Loaders/CartProductsLoader.js'




const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <Order></Order>,
        loader: cartProductsLoader
      },
      {
        path: 'Inventory',
        element:<Inventory></Inventory>,
        
      },
      {
        path: 'login',
        element:<Signup></Signup>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
