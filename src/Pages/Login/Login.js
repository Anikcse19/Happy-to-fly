import React, { useState } from 'react';
import './Login.css'

import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {

    const { siginInWIthGoogle, setUser, loginWithEmailAndPassword, setIsLoading } = useAuth()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory()
    const location = useLocation()

    const url = location.state?.from || "/home"

    const handleGoogleSignIn = () => {
        siginInWIthGoogle()
            .then((res) => {
                console.log(res.user)
                setUser(res.user)
                history.push(url)
            }
            )
            .catch((err) => console.log(err))
        // // .finally(() => {
        // //     setIsLoading(false)
        // })

    }
    const handleGetEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleGetPassword = (e) => {
        setPassword(e.target.value);
    }



    const handleLoginWithEmailAndPassword = (e) => {
        e.preventDefault();

        loginWithEmailAndPassword(email, password)
            .then((res) => {
                setIsLoading(true)
                setUser(res.user);
                history.push(url)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    return (
        <div className='text-center w-50 my-5 mx-auto bg'>
            <h3>LOG IN </h3>
            <form onSubmit={handleLoginWithEmailAndPassword}>
                <input type="email" onBlur={handleGetEmail} placeholder="Email" />
                <br />
                <br />
                <input type="password" onBlur={handleGetPassword} placeholder="Password" />
                <br />
                <br />
                <input type="submit" className='btn-lg btn-outline-primary my-3' value="login" />

            </form>
            <p>New User?<Link to='/registration'>Registration please</Link></p>
            <button onClick={handleGoogleSignIn} className='btn-lg mb-4 btn-warning'>
                Google Sign in
            </button>
        </div>
    );
};

export default Login;