import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useState, useEffect } from 'react';
import productApi from '../../../api/productApi';
import ProductFilter from '../Components/ProductFilter';
import ProductList from '../Components/ProductList';
import ProductSkeletonList from '../Components/ProductSkeletonList';
import ProductSort from '../Components/ProductSort';
import HeaderClient from '../../../components/Clients/common'

const useStyles = makeStyles(theme => ({
    root: {},
    left: {
        width: '250px',
    },
    right: {
        flex: '1 1 0',
    },
    pagination: {
        justifyContent: 'center',
        display: 'flex',
        marginTop: "20px",
        paddingBottom: "10px"
    }
}))

const ListPages = () => {
    const classes = useStyles();
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    // filters
    const [filters, setFilters] = useState({
        _page: 1,
        _limit: 4,
        _sort: 'price:ASC'
    });
    //pagination
    const [pagination, setPaginaton] = useState({
        limit: 3,
        total: 9,
        page: 1
    });

    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(filters);
                setProductList(data);
                setPaginaton(pagination);
            } catch (err) {
                console.log(err);
            }
            setLoading(false);
        })()
    }, [filters]);





    const handlePageChange = (e, page) => {
        setFilters((preFilter) => ({
            ...preFilter,
            _page: page
        }))
    }

    const handleSortChange = (newSortValue) => {
        setFilters((preFilter) => ({
            ...preFilter,
            _sort: newSortValue
        }))
    }

    const handleFilterChange = (newFilters) => {
        setFilters((preFilter) => ({
            ...preFilter,
            ...newFilters,
        }))
    }

    return (
        <>
            <Box>
                <HeaderClient />
            </Box>
            <Box mt={4}>
                <Container>
                    <Grid container spacing={1}>
                        <Grid item className={classes.left}>
                            <Paper elevation={0}>
                                <ProductFilter filters={filters} onChange={handleFilterChange} />
                            </Paper>
                        </Grid>
                        <Grid item className={classes.right}>
                            <Paper elevation={0}>
                                <ProductSort currentSort={filters._sort} onChange={handleSortChange} />
                                {loading ? <ProductSkeletonList /> : <ProductList data={productList} />}
                                <Pagination className={classes.pagination}
                                    color="primary"
                                    count={Math.ceil(pagination.total / pagination.limit)}
                                    page={pagination.page}
                                    onChange={handlePageChange}
                                />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default ListPages;