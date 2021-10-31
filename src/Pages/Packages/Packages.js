import React, { useEffect, useState } from 'react';

const Packages = () => {
    const [allpackages, setAllPackages] = useState([])


    useEffect(() => {
        fetch('https://gory-skeleton-85589.herokuapp.com/homepackages')
            .then(res => res.json())
            .then(data => setAllPackages(data))

    }, [])
    return (
        <div className='row text-center'>
            {
                allpackages.map(allpackaged => <div class="card bg-dark text-white">
                    <img src={allpackaged.img} class="card-img" alt="..." />
                    <div class="card-img-overlay">
                        <h3 class="card-title">{allpackaged.name}</h3>
                        <h5 class="card-title">{allpackaged.offer}</h5>
                        <p class="card-text">{allpackaged.desc}</p>
                        <p class="card-text">{allpackaged.bookingFee}</p>
                    </div>
                </div>)
            }

        </div>
    );
};

export default Packages;