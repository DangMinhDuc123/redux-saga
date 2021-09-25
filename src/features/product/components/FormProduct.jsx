import { Box, Button } from '@material-ui/core';
import React from 'react';
import { useForm } from "react-hook-form";
import { InputField } from '../../../components/FormField';

function FormProduct({ initialValues, onSubmit }) {
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
                <InputField name="name" control={control} label="Name" />
                <InputField name="TypeProduct" control={control} label="TypeProduct" />
                <InputField name="description" control={control} label="Description" />
                <InputField name="Price" control={control} label="Price" />
                <Box mt={3}>
                    <Button variant="contained" type="submit" disabled={isSubmitting}>
                        {isSubmitting}
                        Save</Button>
                </Box>
            </form>
        </Box>
    )
};
export default FormProduct;