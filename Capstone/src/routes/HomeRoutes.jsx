// routes/HomeRoutes.jsx
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; 
import HomeComponent from '../Components/Home/HomeComponent';


const HomeRoutes = () =>{
    return (
            <Routes>
                <Route path="/" element={<HomeComponent />} />
            </Routes>

    )
}

export default HomeRoutes;
