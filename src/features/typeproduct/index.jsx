import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListPagePro from './pages/ListPagePro';
import AddEditPageType from './pages/AddEditPageType';

const ListProduct = () => {
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