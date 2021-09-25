import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { listTypeProducts } from '../../redux/actions/typeproduct'
import { useDispatch } from 'react-redux';
import ListPagePro from './pages/ListPagePro';
import AddEditPageType from './pages/AddEditPageType';

const ListProduct = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listTypeProducts())
    }, [dispatch])

    return (
        <Switch>
            <Route path="/admin/typeProduct" exact>
                <ListPagePro />
            </Route>
            <Route path="/admin/typeProduct/add" >
                <AddEditPageType />
            </Route>
            <Route path="/admin/typeProduct/:typeProductId" >
                <AddEditPageType />
            </Route>
        </Switch>
    );
};

export default ListProduct;