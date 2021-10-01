import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import * as Yup from "yup";
import { useFormik } from "formik";
import './Home.css'

function LoginPage() {
    const [list, setList] = useState([]);
    const [redirect, setRedirect] = useState(false);
    let history = useHistory();
    const [error, setError] = useState(null);

    // call API
    useEffect(() => {
        fetch('http://localhost:3000/user')
            .then(res => res.json())
            .then(data => {
                setList(data);
            })
    }, [])

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",

        },
        validationSchema: Yup.object({
            email: Yup.string().email("'Không đúng định dạng Email !").required('Không được để trống !'),
            password: Yup.string()
                .min(3, 'Tối thiểu 3 ký tự !')
                .required('Không được để trống !'),

        }),
        onSubmit: (values) => {
            let count = 0;
            list.forEach((items, index) => {
                if (formik.values.email === items.email && formik.values.password === items.password) {
                    setRedirect(true);
                    return history.push("/admin/dashboard")
                } else {
                    count++;
                }
            })

            if (count === list.length) {
                setError("Tài Khoản hoặc  Mật Khẩu không đúng !");
            }
        }
    });

    return (
        <div className="container">
            <div className="forms-container">
                <div className="signin-signup">
                    <form className="sign-in-form" onSubmit={formik.handleSubmit}>
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                        </div>
                        {formik.errors.email && formik.touched.email && (
                            <div><span> {formik.errors.email}</span> </div>)}
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
                            <div><span>{formik.errors.password}</span></div>
                        )}
                        <div><span>{error ? error : ""}</span></div>
                        <input type="submit" className="btn" value="Sign in" />
                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className="social-media">
                            <a href="!#" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="!#" className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="!#" className="social-icon">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="!#" className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;