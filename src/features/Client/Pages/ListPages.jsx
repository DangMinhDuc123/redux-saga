import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import productApi from '../../../api/productApi';
import Paginations from '../Components/Pagination';
import ProductList from '../Components/ProductList';
import ProductSkeletonList from '../Components/ProductSkeletonList';
import ProductSort from '../Components/ProductSort';

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
        display: 'flex'
    }
}))

const ListPages = () => {
    const classes = useStyles();
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    // useState pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(2);

    // filters
    const [filters, setFilters] = useState({

    })

    useEffect(() => {
        (async () => {
            try {
                const data = await productApi.getAll();
                setProductList(data)
            } catch (err) {
                console.log(err);
            }
            setLoading(false);
        })()
    }, []);



    //get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = productList.slice(indexOfFirstPost, indexOfLastPost);

    // change page 
    const paginate = (pageNumbers) => setCurrentPage(pageNumbers);


    const handleSortChange = (newSortValue) => {

    }

    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                            left
                        </Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                        {/* <ProductSort currentSort={filters._sort} onChange={handleSortChange} /> */}
                        <Paper elevation={0}>
                            {loading ? <ProductSkeletonList /> : <ProductList data={currentPost} loading={loading} />}
                            <Paginations postsPerPage={postsPerPage} totalPosts={productList.length} paginate={paginate} />
                        </Paper>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ListPages;