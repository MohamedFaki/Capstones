// routes/HomeRoutes.jsx
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import necessary components
import HomeComponent from '../Components/Home/HomeComponent';


const HomeRoutes = () =>{
    return (
            <Routes>
                <Route exact path="/" element={<HomeComponent />} />
            </Routes>

    )
}

export default HomeRoutes;
