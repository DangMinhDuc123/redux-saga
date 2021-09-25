import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles(theme => ({
    table: {},
    edit: {
        marginRight: theme.spacing(1),
    }
}))

const TableTypePro = (props) => {
    const classes = useStyles();
    const { listTypeProduct, onRemove, onEdit } = props;
    const [selectedProduct, setSelectedProduct] = useState(listTypeProduct);
    const [open, setOpen] = useState(false);

    const handleRemove = (typeProduct) => {
        setSelectedProduct(typeProduct);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleRemoveConfirm = (typeProduct) => {
        onRemove(typeProduct);
        setOpen(false);
    }
    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell >#</TableCell>
                            <TableCell >CODE</TableCell>
                            <TableCell >Name</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listTypeProduct.map((typePro, id) => (
                            <TableRow key={typePro.id}>
                                <TableCell>{id + 1}</TableCell>
                                <TableCell>{typePro.code}</TableCell>
                                <TableCell>{typePro.name}</TableCell>
                                <TableCell align="right">
                                    <Button className={classes.edit} variant="contained" color="primary"
                                        onClick={() => onEdit(typePro)}>Edit</Button>
                                    <Button variant="outlined" color="secondary"
                                        onClick={() => handleRemove(typePro)}>Delete</Button>
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

export default TableTypePro;