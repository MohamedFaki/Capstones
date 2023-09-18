//routes/RegisterRoutes.jsx
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import necessary components
import RegisterComponent from '../Components/Register/RegisterComponent';

const RegisterRoutes = () => { 
    return (
        <Router>
        <Routes>
            <Route exact path ="/register" Component={RegisterComponent} />
        </Routes>
        </Router>
    )
}

export default RegisterRoutes;