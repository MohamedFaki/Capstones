//routes/ProductsRoutes.jsx
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; 
import ProductListComponent from '../Components/ProductList/ProductListComponent';
import ProductDetailComponent from '../Components/ProductList/ProductDetailComponent';

const ProductRoutes = () => {
    return (
            <Routes>
                <Route exact path="/products" element={<ProductListComponent />} />
                <Route path="/products/:id" element={<ProductDetailComponent />} />
            </Routes>
    )
}


export default ProductRoutes; 