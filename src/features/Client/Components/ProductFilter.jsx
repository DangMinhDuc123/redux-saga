
import { Box } from '@mui/system';
import React from 'react';
import FilterCategory from './Filters/FiltersCategory';

const ProductFilter = ({ filters, onChange }) => {

    const handleCategoryChange = (newCategoryId) => {
        if (!onChange) return;

        const newFilter = {
            ...filters,
            'category.id': newCategoryId,
        }
        onChange(newFilter)
    }

    return (
        <Box>
            <FilterCategory onChange={handleCategoryChange} />
        </Box>
    );
};

export default ProductFilter;