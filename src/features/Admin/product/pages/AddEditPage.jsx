import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@material-ui/core'
import { ChevronLeft } from '@material-ui/icons'
import { Link, useParams } from 'react-router-dom'
import productApi from '../../../../api/productApi';
import FormProduct from '../components/FormProduct';
import { useHistory } from 'react-router-dom';


const AddEditPage = () => {
    const history = useHistory();
    const { productId } = useParams();
    const isEdit = Boolean(productId);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (productId == null) return;
        (async () => {
            try {
                const data = await productApi.getById(productId);
                setProduct(data);
            } catch (err) {
                console.log('loi', err);
            }
        })();
    }, [productId]);



    const initialValues = {
        name: '',
        TypeProduct: '',
        description: '',
        Price: '',
        ...product,
    }

    const hanldeFormSubmit = async (formValues) => {
        if (isEdit) {
            await productApi.update(formValues)
        } else {
            await productApi.add(formValues)
        }
        history.push('/admin/products');
    }


    return (
        <>
            <Box>
                <Link to='/admin/products'>
                    <Typography variant='caption' style={{ display: 'flex', alignItems: 'center' }}>
                        <ChevronLeft /> Back
                    </Typography>
                </Link>
            </Box>
            <Typography variant='h4'>
                {isEdit ? 'Update' : 'Add new product'}

            </Typography>

            {(!isEdit || Boolean(product)) && (
                <Box mt={3}>
                    <FormProduct initialValues={initialValues} onSubmit={hanldeFormSubmit} />
                </Box>
            )}

        </>
    );
};

export default AddEditPage;