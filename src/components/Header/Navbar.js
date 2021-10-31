import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const { user, logOut } = useAuth()

    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <a style={{
                    fontFamily: 'Fruktur',
                }} className="navbar-brand" href="#">HAPPY TO FLY</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="ms-auto navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link " to='/home'>HOME</Link>
                        </li>

                        {user.email && <li className="nav-item">
                            <Link className="nav-link" to='/myorders'>MY ORDERS</Link>
                        </li>}
                        {user.email && <li className="nav-item">
                            <Link className="nav-link" to='/addpackage'>ADD PACKAGE</Link>
                        </li>}
                        {user.email && <li className="nav-item">
                            <Link className="nav-link" to='/manageallorders'>MANAGE ALL ORDERS</Link>
                        </li>}
                        {user.email ? <div className='d-flex'>
                            <div className='d-flex justify-content-between align-self-center mx-3'>
                                <img width='40px' style={{
                                    borderRadius: "50%"
                                }} src={user.photoURL} alt="" />
                                <p className='ms-2 mt-2'>{user.displayName}</p>
                            </div>

                            <div>
                                <li className="nav-item">
                                    <button className='btn btn-info' onClick={logOut}>Log Out</button></li>
                            </div>

                        </div> :
                            <li className="nav-item">
                                <Link className="nav-link " to='/login'>LOG IN</Link>
                            </li>}

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;