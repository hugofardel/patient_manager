// import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import userStore from "../store/userStore";

const Login = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            id: "",
            password: "",
        },
        onSubmit: (values) => {
            userStore.login(
                "WXFREGFeergfe5er1545",
                "582156782",
                values.id,
                "USER"
            );
            navigate("/");
        },
    });

    return (
        <div className="login">
            <h1>Connexion</h1>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    id="login-identifiant"
                    name="id"
                    label="Identifiant"
                    variant="outlined"
                    value={formik.values.id}
                    onChange={formik.handleChange}
                />
                <TextField
                    id="login-password"
                    name="password"
                    label="Mot de passe"
                    variant="outlined"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                <Button type="submit" variant="contained">
                    Se connecter
                </Button>
            </form>

            {false && (
                <p className="text-redirect-register">
                    Vous n'avez pas encore de compte ? Inscrivez-vous 
                    <NavLink to="/login">ici</NavLink>.
                </p>
            )}
        </div>
    );
};

export default Login;
