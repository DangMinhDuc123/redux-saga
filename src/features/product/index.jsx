import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import ListPage from './pages/ListPage'
import AddEditPage from './pages/AddEditPage'
import { listTypeProducts } from '../../redux/actions/typeproduct'
import { useDispatch } from 'react-redux';

const Product = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listTypeProducts())
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