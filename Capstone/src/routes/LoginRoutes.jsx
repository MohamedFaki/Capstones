//routes/LoginRoutes.jsx

import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import necessary components

const LoginRoutes = () => {
    return (
        <switch>
            <Route exact path ="/login" Component={LoginComponents} />
        </switch>
    )
}

export default Login;