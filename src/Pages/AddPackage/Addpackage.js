import React, { useState } from 'react';


const Addpackage = () => {
    const [addName, setAddName] = useState('')
    const [addOffer, setAddOffer] = useState('')
    const [addFee, setAddFee] = useState('')
    const [addDesc, setAddDesc] = useState('')
    const [addImg, setAddImg] = useState('')
    const [formData, setFormData] = useState({})

    const handleAddName = e => {
        setAddName(e.target.value)
    }
    const handleAddOffer = e => {
        setAddOffer(e.target.value)
    }
    const handleAddFee = e => {
        setAddFee(e.target.value)
    }
    const handleAddDesc = e => {
        setAddDesc(e.target.value)
    }
    const handleAddImg = e => {
        setAddImg(e.target.value)
    }
    const handleForm = () => {
        const data = {
            name: addName, offer: addOffer, img: addImg, description: addDesc, bookingFee: addFee
        }
        fetch('https://gory-skeleton-85589.herokuapp.com/homepackages', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert("Succesfully added")
                }
            })
    }
    return (
        <div className='text-center'>

            <form onSubmit={handleForm} className='m-4'>
                <div class="row mb-3">
                    <label for="name" class="col-sm-2 col-form-label">Add Package Name: </label>
                    <div class="col-sm-10">
                        <input onBlur={handleAddName} type="text" class="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="offer" class="col-sm-2 col-form-label">Add Offer</label>
                    <div class="col-sm-10">
                        <input onBlur={handleAddOffer} type="text" class="form-control" id="inputPassword3" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="fee" class="col-sm-2 col-form-label">Booking Fee</label>
                    <div class="col-sm-10">
                        <input onBlur={handleAddFee} type="number" class="form-control" id="inputPassword3" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="description" class="col-sm-2 col-form-label">Add Package Description</label>
                    <div class="col-sm-10">
                        <input onBlur={handleAddDesc} type="text" class="form-control" id="inputPassword3" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="img" class="col-sm-2 col-form-label">Add your Photo Url</label>
                    <div class="col-sm-10">
                        <input onBlur={handleAddImg} type="url" class="form-control" name="" id="" />
                    </div>
                </div>




                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
        </div>
    );
};

export default Addpackage;