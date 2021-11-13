import React, { useEffect, useState } from 'react';

import Service from '../Service/Service';

import './ServiceHome.css'

const ServiceHome = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://polar-island-04208.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (

        <div>
            <h2 className="text-dark mt-5 text-center mb-1 ">New Arrived</h2>
            <hr className="w-25 mx-auto mb-5 text-dark " />
            <div className="service-container container">
                {
                    products.slice(0, 4).map(product => <Service
                        key={product._id}
                        product={product}
                    ></Service>)
                }

            </div>


        </div>


    );
};

export default ServiceHome;