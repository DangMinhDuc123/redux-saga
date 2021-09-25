import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles(theme => ({
    table: {},
    edit: {
        marginRight: theme.spacing(1),
    }
}))

const TableProduct = (props) => {
    const classes = useStyles();
    const { productList, onRemove, onEdit } = props;
    const [selectedProduct, setSelectedProduct] = useState(productList);
    const [open, setOpen] = useState(false);

    const handleRemove = (product) => {
        setSelectedProduct(product);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleRemoveConfirm = (product) => {
        onRemove(product);
        setOpen(false);
    }
    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell >#</TableCell>
                            <TableCell >Name</TableCell>
                            <TableCell >IMG</TableCell>
                            <TableCell >Price</TableCell>
                            <TableCell >DES</TableCell>
                            <TableCell >TypeProduct</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productList.map((product, id) => (
                            <TableRow key={product.id}>
                                <TableCell>{id + 1}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>IMG</TableCell>
                                <TableCell>{product.Price}</TableCell>
                                <TableCell>{product.description}</TableCell>
                                <TableCell>{product.TypeProduct}</TableCell>
                                <TableCell align="right">
                                    <Button className={classes.edit} variant="contained" color="primary"
                                        onClick={() => onEdit(product)}>Edit</Button>
                                    <Button variant="outlined" color="secondary"
                                        onClick={() => handleRemove(product)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>



            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Remove a product ?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure to remove product !!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => handleRemoveConfirm(selectedProduct)} color="secondary" autoFocus>
                        Remove !
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default TableProduct;