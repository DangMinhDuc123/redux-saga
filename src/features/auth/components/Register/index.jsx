import React from 'react';
import RegisterForm from '../RegisterForm';

const Register = () => {
    const hanldeFormSubmit = (event) => {
        console.log(event);
    }
    const initialValues = {
        name: '',
        password: '',
    }

    return (
        <div>
            <RegisterForm initialValues={initialValues} onSubmit={hanldeFormSubmit} />
        </div>
    );
};

export default Register;