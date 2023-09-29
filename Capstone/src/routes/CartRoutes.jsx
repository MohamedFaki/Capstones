//routes/CartRoutes.jsx 

import CartComponent from "../Components/Cart/CartComponent"; // 
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const CartRoutes = () =>{

    const location = useLocation();
    const cart = location.state.cart || []; 
    
    return (
            <Routes>
                <Route exact path="/cart" element={<CartComponent />} />
            </Routes>
    )
}

export default CartRoutes;