import React, { useState } from 'react';

import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {

    const { siginInWIthGoogle, setUser } = useAuth()

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



    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='text-center'>
            <h3>LOG IN </h3>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input type='email' placeholder='Your Email'  {...register("Email")} />
                <br />

                <input className='m-2' type='password' placeholder='Your Password' {...register("Password", { required: true })} />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}

                <input className='m-2 px-4 btn btn-danger' value='Log in' type="submit" />
                <p>New User?</p><Link to='/registration'>Register first</Link>
            </form>
            <button onClick={handleGoogleSignIn} className='btn-lg btn-warning'>
                Google Sign in
            </button>
        </div>
    );
};

export default Login;