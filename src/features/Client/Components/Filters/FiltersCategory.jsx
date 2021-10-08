import { Typography, Box } from '@material-ui/core';
import React, { useState,useEffect } from 'react';
import typeProductApi from '../../../../api/typeProductApi';

const FilterCategory = ({ onChange }) => {
    const [categoryList, setCategoryList] = useState([]);
    
    useEffect(() => {
        (async () => {
            try {
                const list = await typeProductApi.getAll();
                console.log({list})
                setCategoryList(
                    list.map((x) => ({
                        id: x.id,
                        name: x.name
                    }))
                )
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])

    const handleCategoryClick = (category) => {
        console.log(category)
        if(onChange) {
            onChange(category.id)
        }
        
    }
    return (
        <Box>
            <Typography>Danh mục sản phẩm </Typography>
            <ul>
                {categoryList.map(category =>
                    <li key={category.id} onClick={() => handleCategoryClick(category)}>{category.name}</li>
                    )}
            </ul>
        </Box>
    );
};

export default FilterCategory;