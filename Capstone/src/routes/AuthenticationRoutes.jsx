import AuthenticationComponent from "../Components/Authentication/AuthenticationComponent";
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProductListComponent from '../Components/ProductList/ProductListComponent';


const AuthenticationRoutes = () => {
    return (
        <Routes>
            <Route exact path="/login" element={<AuthenticationComponent />} />
        </Routes>
    )
}

export default AuthenticationRoutes;