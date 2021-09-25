import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listTypeProducts } from '../../../redux/actions/typeproduct'
import TableTypePro from '../components/TableTypePro';
import typeProductApi from '../../../api/typeProductApi';
import { Link, useHistory } from 'react-router-dom'
// import { createSelector } from 'reselect';

const useStyles = makeStyles((theme) => ({
    root: {},
    titleContainer: {
        display: 'flex',
        flexFlow: 'row nowarp',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
}));

const ListPagePro = () => {
    const history = useHistory();
    const classes = useStyles();
    const listTypeProduct = useSelector(state => state.typeProductReducer.typeProduct)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listTypeProducts())
    }, [dispatch])

    const handleRemoveProduct = async (typeProduct) => {
        try {
            await typeProductApi.remove(typeProduct.id);
        } catch (err) {
            console.log(err);
        }
    }


    const handleEditProduct = async (typeProduct) => {
        history.push(`/admin/typeProduct/${typeProduct.id}`)
    }
    return (
        <Box className={classes.root}>
            <Box className={classes.titleContainer} style={{ justifyContent: 'space-between', display: 'flex', flexFlow: 'row nowarp' }}>
                <Typography variant='h4'>List Type Products</Typography>
                <Link to='/admin/typeProduct/add' style={{ textDecoration: 'none' }}>
                    <Button variant='contained' color='primary'>
                        Thêm Mới
                    </Button>
                </Link>
            </Box>
            <TableTypePro listTypeProduct={listTypeProduct} onRemove={handleRemoveProduct} onEdit={handleEditProduct} />
        </Box >
    );
};

export default ListPagePro;