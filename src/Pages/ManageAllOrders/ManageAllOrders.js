import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [manageAllOrders, setManageAllOrders] = useState([])

    useEffect(() => {
        fetch(`https://gory-skeleton-85589.herokuapp.com/orders`)
            .then(res => res.json())
            .then(result => {
                setManageAllOrders(result)
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
                        const remaining = manageAllOrders.filter(pd => pd._id !== id)
                        setManageAllOrders(remaining)
                    }
                }
            })
    }
    const updatedData = { status: 'approved' }

    const handleReceive = (id, updatedData) => {


        fetch(`https://gory-skeleton-85589.herokuapp.com/update/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(result => {

            })

    }
    return (
        <div className='w-75 mx-auto'>
            <table className="table table-light table-striped">
                <thead>
                    <tr>
                        <th scope="col">Customer Email</th>
                        <th scope="col">Package</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Address</th>
                        <th scope="col">Status</th>
                        <th className='text-center' colspan='2' scope="col">Manage</th>
                    </tr>
                </thead>



                {manageAllOrders?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{pd?.email}</td>
                            <td>{pd?.orderdPackage}</td>
                            <td>{pd?.phoneNumber}</td>

                            <td>{pd?.address}</td>
                            <td>{pd?.status}</td>
                            <td><button onClick={() => handleCancel(pd._id)} className='btn btn-warning'>Cancel</button></td>
                            <td><button onClick={() => handleReceive(pd._id, index)} className='btn btn-success'>Receive</button></td>


                        </tr>
                    </tbody>
                ))}

            </table>
        </div>
    );
};

export default ManageAllOrders;