import React from 'react';
import { useForm } from "react-hook-form";


const Registration = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='text-center'>
            <h3>Registration First</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='m-2' type='text' placeholder='Your Name' {...register("Name")} />
                <br />
                <input className='m-2' type='email' placeholder='Your Email' {...register("Email")} />
                <br />
                <input className='m-2' type='password' placeholder='Your Password' {...register("password")} />
                <br />

                <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
                <br />
                <input className='btn btn-success m-2' value='Register' type="submit" />
            </form>
        </div>
    );
};

export default Registration;