import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../components/Header/Banner';
import useAuth from '../../hooks/useAuth';
import './Home.css'

const Home = () => {
    const [packages, setPackages] = useState([])
    const { isLoading } = useAuth()

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

            <div>
                <section class="happy-client text-center my-bg-color my-5">
                    <div class="container">
                        <h1 class="my-5">Happy <span>Clientes Says</span></h1>
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 col-sm-12 my-4">
                            <div class="col">
                                <div class="card h-100 pb-3 rounded-3 shadow py-3">
                                    <div>
                                        <img class="img-fluid" src="https://images.unsplash.com/photo-1567564967039-a5839aa2d89c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dG91cmlzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" width="149px" height="149px" alt="..." />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Jhonsen Churosoe</h5>
                                        <p class="card-text">Slate helps you see how
                                            many more days you need
                                            to work to reach your financial
                                            goal for the month and year.</p>
                                    </div>
                                    <div style={{ color: "#E77C40" }}>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </div>
                                    <a href="#" class="text-primary fw-bold" style={{ textDecoration: "none" }}>South Korea</a>
                                    <h6>Freelancer</h6>

                                </div>
                            </div>

                            <div class="col">
                                <div class="card h-100 mt-2 pb-3 rounded-3 shadow py-3">
                                    <div>
                                        <img class="img-fluid" src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2021/10/15/78cdc3a1-bf34-4e63-898f-616aa9357471_e44f733d.jpg?itok=wDOx-uc4&v=1634303365" width="149px" height="149px" alt="..." />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Martilina Gr</h5>
                                        <p class="card-text">Slate helps you see how
                                            many more days you need
                                            to work to reach your financial
                                            goal for the month and year.</p>
                                    </div>
                                    <div style={{
                                        color: " #E77C40"
                                    }}
                                    >
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </div>
                                    <a href="#" class="text-primary fw-bold" style={{ textDecoration: "none" }}>America</a>
                                    <h6>Entrepreneur</h6>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card h-100 mt-3 pb-3 rounded-3 shadow py-3">
                                    <div>
                                        <img src="https://static.toiimg.com/thumb/76006166/Spain-tourists.jpg?width=1200&height=900" width="149px" height="149px" alt="..." />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">DJ Boby</h5>
                                        <p class="card-text">Slate helps you see how
                                            many more days you need
                                            to work to reach your financial
                                            goal for the month and year.</p>
                                    </div>
                                    <div style={{ color: " #E77C40" }}>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </div>
                                    <a href="#" class="text-primary fw-bold" style={{ textDecoration: "none" }}>Brazil</a>
                                    <h6>Singer</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <div>
                    <div className='container card shadow my-5 py-5 get-in-touch'>
                        <h2 className='fw-bold text-center'>Get in Touch with US...</h2>
                        <form class="row g-3 mt-3 px-3">
                            <div class="col-md-4">
                                <label for="validationDefault01" class="form-label">First name</label>
                                <input type="text" class="form-control" id="validationDefault01" placeholder="" required />
                            </div>
                            <div class="col-md-4">
                                <label for="validationDefault02" class="form-label">Last name</label>
                                <input type="text" class="form-control" id="validationDefault02" placeholder="" required />
                            </div>
                            <div class="col-md-4">
                                <label for="validationDefaultUsername" class="form-label">Username</label>
                                <div class="input-group">
                                    <span class="input-group-text" id="inputGroupPrepend2">@</span>
                                    <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="validationDefault03" class="form-label">City</label>
                                <input type="text" class="form-control" id="validationDefault03" required />
                            </div>

                            <div class="col-md-3">
                                <label for="validationDefault05" class="form-label">Zip</label>
                                <input type="text" class="form-control" id="validationDefault05" required />
                            </div>
                            <div className="col-md-12">
                                <label for="validationDefault05" class="form-label">Your Email</label>
                                <input type="email" class="form-control" id="validationDefault06" placeholder='@gmail.com' required />
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                    <label class="form-check-label" for="invalidCheck2">
                                        Agree to terms and conditions
                                    </label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>



                </div>

            </div>
        </div>

    );
};

export default Home;