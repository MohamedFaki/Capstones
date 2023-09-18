//routes/CartRoutes.jsx

import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import necessary components

const CartRoutes = () =>{
    return (
            <Routes>
                <Route exact path="/cart" element={<CartComponent />} />
            </Routes>
    )
}

export default CartRoutes;