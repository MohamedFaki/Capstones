import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Import necessary components
import CartRoutes from "../../routes/CartRoutes";
import { useState, useEffect } from "react";



const CartComponent = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/carts')
            .then((res) => res.json())
            .then((json) => setCart(json));
    }, []);

    return (
        <div>
            <h1>Cart</h1>
            {cart.map((cartItem) => (
                <div key={cartItem.id}>
                    <h2>Cart ID: {cartItem.id}</h2>
                    <p>User ID: {cartItem.userId}</p>
                    <p>Date: {cartItem.date}</p>
                    <ul>
                        {cartItem.products.map((product) => (
                            <li key={product.product.id}>
                                Product ID: {product.product.id}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};




export default CartComponent;


