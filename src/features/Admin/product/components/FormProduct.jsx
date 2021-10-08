import { Box, Button } from '@material-ui/core';
import React from 'react';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { InputField } from '../../../../components/Admins/FormField';
import { SelectField } from '../../../../components/Admins/FormField/SelectField';
import { selectTypeProOptions } from '../../typeproduct/typeProductSlice';
import { useTranslation } from 'react-i18next';

function FormProduct({ initialValues, onSubmit }) {
    const { t } = useTranslation();
    const typeProOptions = useSelector(selectTypeProOptions);

    const { control, handleSubmit, formState: { isSubmitting } } = useForm({
        defaultValues: initialValues,
    })

    const handleFormSubmit = async (formValues) => {
        try {
            await onSubmit?.(formValues);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Box maxWidth={350}>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <InputField name="name" control={control} label={t('Name')} />
                <SelectField name="category" control={control} label={t('category')} options={typeProOptions} />
                <InputField name="description" control={control} label={t('DesTableProduct')} />
                <InputField name="price" control={control} label={t('PriceTableProduct')} />
                <Box mt={3}>
                    <Button variant="contained" type="submit" disabled={isSubmitting}>
                        {isSubmitting}
                        Save </Button>
                </Box>
            </form>
        </Box>
    )
};
export default FormProduct;