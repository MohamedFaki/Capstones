//routes/ProductsRoutes.jsx
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import necessary components
import ProductListComponent from '../Components/ProductList/ProductListComponent';

const ProductRoutes = () => {
    return (
            <Routes>
                <Route exact path="/products" element={<ProductListComponent />} />
            </Routes>


    )
}


export default ProductRoutes; 