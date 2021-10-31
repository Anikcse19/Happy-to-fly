import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const OrderPlace = () => {
    const { user } = useAuth()
    console.log(user)
    const { id } = useParams()
    const [ordered, setOrdered] = useState([])
    const [address, setAddres] = useState({})

    useEffect(() => {
        fetch(`https://gory-skeleton-85589.herokuapp.com/ordered/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data[0])
                setOrdered(data[0])
            })
    }, [])


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        setAddres(data)
        reset()
        data.status = 'pending'
        data.email = user.email
        data.orderdPackage = ordered.name
        fetch(`https://gory-skeleton-85589.herokuapp.com/myorders/${id}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result) {
                    alert('Booking Done')
                }
            })
    };
    return (
        <div className='text-center'>

            <h6>Your Booking Identification No: {id} </h6>
            <h5>You are confirming the {ordered.name} package</h5>
            <p>Total cost going to be {ordered.bookingFee}</p>
            {
                address.address ? <h3>Order Details</h3> : ''
            }
            {address.address ?
                <p>Address:{address.address}</p> :
                <h3>Please Write your Address</h3>}
            {
                address.name &&
                <p>Name:{address.name} </p>
            }
            {
                address.phoneNumber &&
                <p>Contact:{address.phoneNumber} </p>
            }
            <form onSubmit={handleSubmit(onSubmit)}>

                <input className='m-2' placeholder='Name' {...register("name", { required: true })} /> <br />
                <input className='m-2' placeholder='Phone Number' {...register("phoneNumber", { required: true })} /> <br />
                <input className='m-2' placeholder='Address' {...register("address", { required: true })} />
                <br />


                <input className='btn btn-danger m-2' value='Confirm Booking' type="submit" />
            </form>
            <Link to='/myorders' className='btn btn-success'>See Your Ordered Package</Link>
        </div>
    );
};

export default OrderPlace;