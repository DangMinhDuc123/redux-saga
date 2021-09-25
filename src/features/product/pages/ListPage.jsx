import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../../redux/actions/product'
import TableProduct from '../components/TableProduct';
import productApi from '../../../api/productApi';
import { Link, useHistory } from 'react-router-dom'

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
    const history = useHistory();
    const classes = useStyles();
    const productList = useSelector(state => state.productReducer.product)
    // const listTypeProduct = useSelector(state => state.typeProductReducer.typeProduct)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    const handleRemoveProduct = async (product) => {
        try {
            await productApi.remove(product.id);
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
                <Typography variant='h4'>Products</Typography>
                <Link to='/admin/products/add' style={{ textDecoration: 'none' }}>
                    <Button variant='contained' color='primary'>
                        Thêm Mới
                    </Button>
                </Link>
            </Box>
            <TableProduct productList={productList} onRemove={handleRemoveProduct} onEdit={handleEditProduct} />
        </Box >
    );
};

export default ListPage;