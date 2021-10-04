import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Dashboard } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
        '&.active > div ': {
            backgroundColor: theme.palette.action.selected
        }
    }
}));

const Sidebar = () => {
    const { t } = useTranslation();
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <NavLink to="/admin/dashboard" className={classes.link}>
                    <ListItem button select="true" >
                        <ListItemIcon>
                            <Dashboard />
                        </ListItemIcon>
                        <ListItemText primary={t('Dashboard')} />
                    </ListItem>
                </NavLink>
                <NavLink to="/admin/products" className={classes.link}>
                    <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary={t('Products')} />
                    </ListItem>
                </NavLink>
                <NavLink to="/admin/typeProduct" className={classes.link}>
                    <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary={t('TypeProduct')} />
                    </ListItem>
                </NavLink>
            </List>
        </div>

    );
};

export default Sidebar;