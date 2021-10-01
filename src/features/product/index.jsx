import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import ListPage from './pages/ListPage'
import AddEditPage from './pages/AddEditPage'
import { useDispatch } from 'react-redux';
import { typeProductActions } from '../typeproduct/typeProductSlice';

const Product = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(typeProductActions.fetchTypeProductList())
    }, [dispatch])

    return (
        <Switch>
            <Route path="/admin/products" exact>
                <ListPage />
            </Route>
            <Route path="/admin/products/add" >
                <AddEditPage />
            </Route>
            <Route path="/admin/products/:productId" >
                <AddEditPage />
            </Route>
        </Switch>
    );
};

export default Product;