import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([])
    const { user, isLoading } = useAuth()

    const email = user.email
    console.log(email)
    useEffect(() => {
        fetch(`https://gory-skeleton-85589.herokuapp.com/myOrders/${email}`)
            .then(res => res.json())
            .then(result => {
                setMyOrders(result)
            })
    }, [])

    const handleCancel = id => {
        console.log(id)
        fetch(`https://gory-skeleton-85589.herokuapp.com/cancelOrder/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)

                if (result.deletedCount) {
                    let isBoss = prompt("Write 'Yes' to cancel this package");
                    if (isBoss == 'yes') {
                        alert('succesfully Deleted')
                        const remaining = myOrders.filter(pd => pd._id !== id)
                        setMyOrders(remaining)
                    }
                }
            })
    }
    if (isLoading) {
        return "loading..."
    }
    return (
        <div className='w-75 mx-auto'>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">Booking Id</th>
                        <th scope="col">Package</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Address</th>
                        <th scope="col">Status</th>
                        <th scope="col">Manage</th>
                    </tr>
                </thead>



                {myOrders?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd?.orderdPackage}</td>
                            <td>{pd?.phoneNumber}</td>

                            <td>{pd?.address}</td>
                            <td>{pd?.status}</td>
                            <td><button onClick={() => handleCancel(pd._id)} className='btn btn-warning'>Cancel</button></td>


                        </tr>
                    </tbody>
                ))}

            </table>
        </div>
    );
};

export default MyOrders;