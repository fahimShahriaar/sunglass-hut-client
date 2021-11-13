import { Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';


const AddProducts = () => {


    const [products, setProducts] = useState('');

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = { ...products };
        newProduct[field] = value;
        setProducts(newProduct);

    }
    const onSubmit = e => {
        const product = {
            ...products,



        }


        fetch('https://polar-island-04208.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)

        })
            .then(res => res.json())

            .then(data => {
                console.log(data);
                if (data.modifiedCount);

                alert("insert successfully");


            })
        e.preventDefault()
    };
    return (
        <div>
            <Typography sx={{ mt: 5 }} variant='h5'>Add Products</Typography>
            <hr className="w-25 mx-auto mb-2 text-dark " />

            <form onSubmit={onSubmit}>
                <TextField sx={{ mt: 5, width: '50%' }} name="picture" id="standard-basic" onBlur={handleOnBlur} label="Product Image " variant="standard" /><br />
                <TextField sx={{ mt: 5, width: '50%' }} name="name" id="standard-basic" onBlur={handleOnBlur} label="Product Name" variant="standard" /><br />
                <TextField sx={{ mt: 5, width: '50%' }} name="price" id="standard-basic" onBlur={handleOnBlur} label=" Product Price" variant="standard" /><br />
                <button className="btn btn-sm btn-success mt-5  ms-2 px-5">Confirm</button>

            </form>
        </div>
    );
};

export default AddProducts;