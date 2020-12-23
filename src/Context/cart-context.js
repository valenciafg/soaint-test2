import React, { useState, useEffect, useMemo } from 'react';
import getRequest from '../utils/request';

const CartContext = React.createContext();

export function CartProvider(props) {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    
    const getProducts = async () => {
      const response = await getRequest('https://fakestoreapi.com/products');
      setProducts(response.data);
    }
    getProducts();
  }, []);

  const value = useMemo(() => {
    return ({
      products
    });
  }, []);

  return <CartContext.Provider value={value} {...props} />
}

export function useCart() {
  const context = React.useContext(CartContext);
  if (!context) throw new Error('useCart must be inside CartContext provider');
  return context;
}