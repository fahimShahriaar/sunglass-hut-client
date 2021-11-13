import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://polar-island-04208.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <h2 className="text-dark mt-5 text-center mb-1 ">Our Products</h2>
            <hr className="w-25 mx-auto mb-5 text-dark " />
            <div className="product-container container">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;