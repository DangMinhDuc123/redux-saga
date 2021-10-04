import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableProduct from '../components/TableProduct';
import productApi from '../../../../api/productApi';
import { selectTypeProductMap } from '../../typeproduct/typeProductSlice';
import { Link, useHistory } from 'react-router-dom'
import { productActions, selectProductList } from '../productSlice';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    root: {},
    titleContainer: {
        display: 'flex',
        flexFlow: 'row nowarp',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
}));

const ListPage = () => {
    const { t } = useTranslation();
    const history = useHistory();
    const classes = useStyles();
    const productList = useSelector(selectProductList);
    const typeProductMap = useSelector(selectTypeProductMap);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productActions.fetchProductList())
    }, [dispatch])

    const handleRemoveProduct = async (product) => {
        try {
            await productApi.remove(product.id);
            dispatch(productActions.fetchProductList())
        } catch (err) {
            console.log(err);
        }
    }


    const handleEditProduct = async (product) => {
        history.push(`/admin/products/${product.id}`)
    }
    return (
        <Box className={classes.root}>
            <Box className={classes.titleContainer} style={{ justifyContent: 'space-between', display: 'flex', flexFlow: 'row nowarp' }}>
                <Typography variant='h4'>{t('Products')}</Typography>
                <Link to='/admin/products/add' style={{ textDecoration: 'none' }}>
                    <Button variant='contained' color='primary'>
                        {t('Add')}
                    </Button>
                </Link>
            </Box>
            <TableProduct productList={productList} onRemove={handleRemoveProduct} onEdit={handleEditProduct} typeProductMap={typeProductMap} />
        </Box >
    );
};

export default ListPage;