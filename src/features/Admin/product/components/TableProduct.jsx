import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
    table: {},
    edit: {
        marginRight: theme.spacing(1),
    }
}))

const TableProduct = (props) => {
    const { t } = useTranslation();
    const classes = useStyles();
    const { productList, onRemove, onEdit, typeProductMap } = props;
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
                            <TableCell >{t('NameTableProduct')}</TableCell>
                            <TableCell >{t('ImgTableProduct')}</TableCell>
                            <TableCell >{t('PriceTableProduct')}</TableCell>
                            <TableCell >{t('DesTableProduct')}</TableCell>
                            <TableCell >{t('TypeProductTableProduct')}</TableCell>
                            <TableCell align="right">{t('ActionsTableProduct')}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productList.map((product, id) => (
                            <TableRow key={product.id}>
                                <TableCell>{id + 1}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell><img src={product.img} alt="description" /></TableCell>
                                <TableCell>{product.Price}</TableCell>
                                <TableCell>{product.description}</TableCell>
                                <TableCell>{typeProductMap[product.TypeProduct]?.name}</TableCell>
                                <TableCell align="right">
                                    <Button className={classes.edit} variant="contained" color="primary"
                                        onClick={() => onEdit(product)}>{t('Edit')}</Button>
                                    <Button variant="outlined" color="secondary"
                                        onClick={() => handleRemove(product)}>{t('Delete')}</Button>
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
                <DialogTitle id="alert-dialog-title">{t('DialogTitleDelete')}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {t('TextDialogTitleDelete')}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        {t('Cancel')}
                    </Button>
                    <Button onClick={() => handleRemoveConfirm(selectedProduct)} color="secondary" autoFocus>
                        {t('Remove')}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default TableProduct;