//Components/Home/HomeComponent.jsx

import React,{useEffect, useState} from 'react';
import HomeRoutes from '../../routes/HomeRoutes';

const HomeComponent = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => setProducts(json))
        .catch(err => console.log('API request error: ', err))
    }, [])


    return (
        <div className="App">
            <h1>Homeh1</h1>
            <ul>
                {products.map((item, index) => {
                    <li key = {index}>{item.title}</li>
                })}
            </ul>
        </div>
    );
}

export default HomeComponent