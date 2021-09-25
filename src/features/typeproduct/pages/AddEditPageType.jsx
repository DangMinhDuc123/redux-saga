import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@material-ui/core'
import { ChevronLeft } from '@material-ui/icons'
import { Link, useParams } from 'react-router-dom'
import typeProductApi from '../../../api/typeProductApi';
import FormTypeProduct from '../components/FormTypeProduct';
import { useHistory } from 'react-router-dom';


const AddEditPageType = () => {
    const history = useHistory();
    const { typeProductId } = useParams();
    const isEdit = Boolean(typeProductId);
    const [typeProduct, setTypeProduct] = useState(null);

    useEffect(() => {
        if (typeProductId == null) return;
        (async () => {
            try {
                const data = await typeProductApi.getById(typeProductId);
                setTypeProduct(data);
            } catch (err) {
                console.log('loi', err);
            }
        })();
    }, [typeProductId]);



    const initialValues = {
        name: '',
        code: '',
        ...typeProduct,
    }

    const hanldeFormSubmit = async (formValues) => {
        if (isEdit) {
            await typeProductApi.update(formValues)
        } else {
            await typeProductApi.add(formValues)
        }
        history.push('/admin/typeProduct');
    }


    return (
        <>
            <Box>
                <Link to='/admin/typeProduct'>
                    <Typography variant='caption' style={{ display: 'flex', alignItems: 'center' }}>
                        <ChevronLeft /> Back
                    </Typography>
                </Link>
            </Box>
            <Typography variant='h4'>
                {isEdit ? 'Update' : 'Add new type product'}
            </Typography>

            {(!isEdit || Boolean(typeProduct)) && (
                <Box mt={3}>
                    <FormTypeProduct initialValues={initialValues} onSubmit={hanldeFormSubmit} />
                </Box>
            )}

        </>
    );
};

export default AddEditPageType;