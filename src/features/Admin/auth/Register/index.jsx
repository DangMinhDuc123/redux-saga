import React, { useState } from 'react'
import "./Home.css"
import { Redirect } from 'react-router-dom'
import * as Yup from "yup";
import { useFormik } from "formik";


function Register() {
    const [redirect, setRedirect] = useState(false);

    function guidGenerator() {
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4());
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirm_password: ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, "Mininum 2 characters")
                .max(15, "Maximum 15 characters")
                .required("Required!"),
            email: Yup.string().email("Invalid email format").required("Required!"),
            password: Yup.string()
                .min(8, "Minimum 8 characters")
                .required("Required!"),
            confirm_password: Yup.string()
                .oneOf([Yup.ref("password")], "Password's not match")
                .required("Required!")
        }),
        onSubmit: async (values) => {
            await fetch('http://localhost:3000/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: values.name,
                    email: values.email,
                    password: values.password,
                    id: guidGenerator()
                })
            });
            setRedirect(true);
        }

    });

    if (redirect) {
        return <Redirect to="/" />
    }


    return (

        <div className="container">
            <div className="forms-container">
                <div className="signin-signup">
                    <form className="sign-in-form" onSubmit={formik.handleSubmit}>
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input
                                type="text"
                                placeholder="Username"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                            />
                        </div>
                        {formik.errors.full_name && formik.touched.full_name && (
                            <div><span>{formik.errors.full_name}</span> </div>
                        )}
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                        </div>
                        {formik.errors.email && formik.touched.email && (
                            <div><span>{formik.errors.email}</span> </div>
                        )}
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />
                        </div>
                        {formik.errors.password && formik.touched.password && (
                            <div><span>{formik.errors.password} </span> </div>
                        )}
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name="confirm_password"
                                onChange={formik.handleChange}
                            />
                        </div>
                        {formik.errors.confirm_password &&
                            formik.touched.confirm_password && (
                                <div><span>{formik.errors.confirm_password} </span> </div>
                            )}
                        <input type="submit" className="btn" value="Sign up" />
                        <p className="social-text">Or Sign up with social platforms</p>

                    </form>
                </div>
            </div>
        </div>
    );

}

export default Register;
