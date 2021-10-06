import React from 'react';
import Tabs from '@material-ui/core/Tabs';

const ProductSort = ({ currentSort, onChange }) => {
    const [value, setValue] = React.useState(2);

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
            <Tabs value="Price:ASC" label="Gía thấp tới cao"></Tabs>
            <Tabs value="Price:DESC" label="Gía thấp tới cao"></Tabs>
        </Tabs>
    );
};


export default ProductSort;