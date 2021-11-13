import React from 'react';

import './ManageProduct.css'
const ManageProduct = ({ product, handleDeleteProduct }) => {
    const { _id, name, price, picture } = product;
    // console.log(product);





    return (
        <div>
            <div className="product pb-3 mb-5 mt-5 ">
                <img src={picture} alt="" />
                <h3 className="mt-4">{name}</h3>
                <h6 className="mt-4">BDT, {price}</h6>
                <button onClick={() => handleDeleteProduct(_id)} className="btn btn-sm btn-danger px-4 mt-2  ms-2">Delete</button>



            </div>

        </div>
    );
};

export default ManageProduct;