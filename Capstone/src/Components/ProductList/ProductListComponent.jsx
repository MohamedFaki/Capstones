//Components/ProductList/ProductListComponent.jsx
import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Import necessary components
import ProductsRoutes from "../../routes/ProductsRoutes";


const ProductListComponent = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => setProducts(json));
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((products) => (
                    <li key={products.id}>
                        <h2>{products.title}</h2>
                        <p>{products.price}</p>
                        <p>{products.category}</p>
                        <p>{products.description}</p>
                        <img src={products.image} alt={products.title} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductListComponent;