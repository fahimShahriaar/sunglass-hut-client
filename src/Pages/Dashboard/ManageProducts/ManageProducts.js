import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';
import './ManageProducts.css'

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://polar-island-04208.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    //Delete order
    const handleDeleteProduct = id => {
        // console.log(id);
        const proceed = window.confirm('Are you sure, you want to delete?')
        if (proceed) {
            const url = `https://polar-island-04208.herokuapp.com/products/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }
                })

        }

    }
    return (
        <div>
            <h2 className="text-dark mt-5 text-center mb-1 ">Manage Products</h2>
            <hr className="w-25 mx-auto mb-5 text-dark " />
            <div className="product-container container">
                {
                    products.map(product => <ManageProduct
                        key={product._id}
                        product={product}
                        handleDeleteProduct={handleDeleteProduct}
                    ></ManageProduct>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;