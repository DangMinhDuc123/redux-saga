import React from 'react';
import { Tab,Tabs } from '@material-ui/core';

const ProductSort = ({ currentSort, onChange }) => {
 
    const handleSortChange = (event, newValue) => {
        if (onChange) onChange(newValue);
    }
    return (
        <Tabs value={currentSort}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleSortChange}
            aria-label="disabled tabs example"
        >
            <Tab value="price:ASC" label="Gía thấp tới cao">Gía thấp tới cao</Tab>
            <Tab value="price:DESC" label="Gía cao xuống thấp">Gía cao xuống thấp</Tab>
        </Tabs>
    );
};


export default ProductSort;