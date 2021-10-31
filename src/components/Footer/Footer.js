import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <div>
            <div className='footer-bg'>
                <div className="row">
                    <div className="col-md-3 col-sm-1 my-5" style={{
                        fontFamily: 'Lobster',
                        color: 'white',
                        marginLeft: '50px'
                    }}>
                        <h1>HAPPY TO FLY</h1>
                        <i className="fab fa-facebook fs-2 mx-2 text-primary"></i>
                        <i class="fab fa-instagram fs-2 mx-2 " style={{
                            color: 'purple'
                        }}></i>
                        <i class="fab fa-linkedin fs-2 mx-2 text-primary"></i>
                        <i class="fab fa-youtube fs-2 mx-2 text-danger"></i>
                    </div>
                    <div className="col-md-3 col-sm-1 my-5">
                        <div style={{
                            border: '1px dotted white',
                            margin: '10px',
                            padding: '10px'

                        }}>
                            <div className='d-flex align-items-center'><i class="fas fa-hand-point-right fs-3 text-primary"></i> <p className=' ms-2 fs-4 text-white'>Themes</p></div>
                            <div className='d-flex align-items-center'><i class="fas fa-hand-point-right fs-3 text-primary"></i> <p className=' ms-2 fs-4 text-white'>Support</p></div>
                            <div className='d-flex align-items-center'><i class="fas fa-hand-point-right fs-3 text-primary"></i> <p className=' ms-2 fs-4 text-white'>About Us</p></div>
                            <div className='d-flex align-items-center'><i class="fas fa-hand-point-right fs-3 text-primary"></i> <p className=' ms-2 fs-4 text-white'>Our Services</p></div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-1">
                        <div className='my-5' style={{
                            marginLeft: '80px',
                            border: '1px dashed white',
                            padding: '20px',
                            marginTop: '30px'

                        }}>
                            <div className='d-flex align-items-center'><i class="fas fa-hand-point-right fs-3 text-primary"></i> <p className=' ms-2 pt-2 fs-6 text-white'>Systems</p></div>
                            <div className='d-flex align-items-center'><i class="fas fa-hand-point-right fs-3 text-primary"></i> <p className=' ms-2 fs-6 pt-2 text-white'>Authority</p></div>
                            <div className='d-flex align-items-center'><i class="fas fa-hand-point-right fs-3 text-primary"></i> <p className=' ms-2 fs-6 pt-2 text-white'>Terms & Privacy</p></div>
                            <div className='d-flex align-items-center'><i class="fas fa-hand-point-right fs-3 text-primary"></i> <p className=' ms-2 fs-6 pt-2 text-white'>Our Services</p></div>
                        </div>
                    </div>
                </div>
                <h6 className='text-center text-white'> ALL ©
                    Copyright reserved to Anik Chandra Deb</h6>
            </div>

        </div>
    );
};

export default Footer;