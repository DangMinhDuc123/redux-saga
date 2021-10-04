import React, { useEffect } from 'react';
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectTypeProductMap } from '../../../features/typeproduct/typeProductSlice';
import { productActions, selectProductList } from '../../../features/product/productSlice';
import MainClient from './mainClient'
import { Link } from 'react-router-dom';



const HeaderClient = () => {

    const productList = useSelector(selectProductList);
    const typeProductMap = useSelector(selectTypeProductMap);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productActions.fetchProductList())
    }, [dispatch])



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

            <MainClient productList={productList} typeProductMap={typeProductMap} />
        </>

    );
};

export default HeaderClient;