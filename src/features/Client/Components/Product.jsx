import { Typography, Button } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';

const Product = ({ product }) => {
    return (
        <div>
            <Box padding={1}>
                <Box padding={1}>
                    <img src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/i/p/ip13-pro_2.jpg"
                        alt={product.name}
                        width="100%"
                    />
                </Box>
                <Typography variant="body2">{product.name}</Typography>
                <Typography variant="body2">{product.Price}</Typography>
                <Button >BUY</Button>
            </Box>
        </div>
    );
};

export default Product;