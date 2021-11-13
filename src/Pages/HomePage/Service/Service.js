import React from 'react';
import { Link } from 'react-router-dom';


import './Service.css'
const Service = ({ product }) => {
    const { _id, name, price, picture } = product;


    return (
        <div>
            <div className="service pb-3 mb-5 mt-5 shadow-sm">
                <img src={picture} alt="" />
                <h3 className="mt-3 mb-3">{name}</h3>

                <h6 className="">BDT, {price}</h6>


                <Link to={`/booking/${_id}`} >
                    <button className="btn btn-sm btn-dark px-2 mt-2">Buy now</button></Link>


            </div>


        </div>
    );
};

export default Service;