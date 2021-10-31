import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../components/Header/Banner';

const Home = () => {
    const [packages, setPackages] = useState([])

    useEffect(() => {
        fetch('https://gory-skeleton-85589.herokuapp.com/homepackages')
            .then(res => res.json())
            .then(data => setPackages(data))

    }, [])

    const handleBookNow = id => {
        console.log(id)
    }
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-center bg-info w-50 my-3 mx-auto p-2'>Our Exclusive Packages</h2>
            <div className='container-fluid row g-3 text-center'>
                {
                    packages.map(packaged => <div class="card mb-3" >
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={packaged.img} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h3 class="card-title">{packaged.name}</h3>
                                    <h5 class="card-title">{packaged.offer} package</h5>
                                    <p class="card-text">{packaged.desc}</p>
                                    <p class="card-text text-success">BOOKING FEE <small>{packaged.bookingFee}</small></p>
                                    <Link to={`/orderplace/${packaged._id}`} className='btn btn-outline-success'>Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Home;