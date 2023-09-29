import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductListComponent.css";
import { useParams } from "react-router-dom";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Import necessary components




function ProductDetailComponent() {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((json) => setProduct(json));
    }, [id]);

    if (!product) {
        return <div> <h1>Out Of Stock</h1></div>;
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <div className="product-detail">
                <div className="product-image">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="product-info">
                    <h2>{product.description}</h2>
                    <h2>Price: ${product.price}</h2>
                    <h2>Category: {product.category}</h2>
                </div>
            </div>
        </div>
    );
}


export default ProductDetailComponent;