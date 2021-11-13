import React from 'react';
import { useHistory } from 'react-router-dom';



import './Product.css'

const Product = ({ product }) => {
    const { _id, name, price, picture } = product;
    // console.log(_id);

    const history = useHistory();

    const handleBuyNow = () => {
        history.push(`/booking/${_id}`);
    }

    return (
        <div>
            <div className="product shadow-sm pb-3 mb-5 mt-5">
                <img src={picture} alt="" />
                <h3 className='mt-3 mb-3'>{name}</h3>
                <h6 className=''>BDT, {price}</h6>
                <button onClick={handleBuyNow} className="btn btn-sm btn-dark px-2 mt-2">Buy now</button>
            </div>
        </div>
    );
};

export default Product;