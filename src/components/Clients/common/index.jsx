import React from 'react';
import './index.css'
// import { useDispatch, useSelector } from 'react-redux';
// import { selectTypeProductMap } from '../../../features/Admin/typeproduct/typeProductSlice';
// import { productActions, selectProductList } from '../../../features/Admin/product/productSlice';
import MainClient from './mainClient'
import { Link } from 'react-router-dom';



const HeaderClient = () => {


    return (
        <>
            <div className="header" id="header">
                <ul className="nav">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#band">Iphone</a></li>
                    <li><a href="#tour">SamSung</a></li>
                </ul>
                <div className="search-btn">
                    <Link to="/login" className="login-btn mr-2">Login</Link>
                    <Link to="/register" className="login-btn">Register</Link>
                </div>
            </div>
        </>

    );
};

export default HeaderClient;