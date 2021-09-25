import { Avatar, Box, Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { InputField } from '../../../../components/FormField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',

        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const RegisterForm = ({ initialValues, onSubmit }) => {
    const classes = useStyles();
    const { control, handleSubmit, formState: { isSubmitting } } = useForm({
        defaultValues: initialValues,
    })

    const handleFormSubmit = async (formValues) => {
        try {
            await onSubmit?.(formValues);
        } catch (err) {
            console.log(err);
        }
    }

    return (


        <div>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
            </div>
            <form onSubmit={handleSubmit(handleFormSubmit)} noValidate className={classes.root}>
                <InputField name="fullname" control={control} label="Full Name" margin-right={10} />
                <InputField name="email" control={control} label="Email" />
                <InputField name="password" control={control} label="Password" />
                <InputField name="retypePassword" control={control} label="RePassword" />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign Up
                </Button>
            </form>
        </div>
    );
};

export default RegisterForm;