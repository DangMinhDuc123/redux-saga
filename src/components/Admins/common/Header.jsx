import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import Language from '../../../i18n/index';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
const Header = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    function logout() {
        localStorage.clear();
        window.location.href = '/';
    }
    return (
        <>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            {t('titleProductManager')}
                        </Typography>
                        <Button color="inherit" onClick={logout}>
                            {t('logout')}
                        </Button>
                        <Language />
                    </Toolbar>
                </AppBar>
            </div>

        </>
    );
};

export default Header;