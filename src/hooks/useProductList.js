import React, { useEffect, useState } from 'react';
import getRequest from '../utils/request';

const useProductList = () => {
    const [ products, setProducts ] = useState([]);

    useEffect(async () => {
        const response = await getRequest('https://fakestoreapi.com/products');
        setProducts(response.data);
    }, []);

    return products;
};

export default useProductList;