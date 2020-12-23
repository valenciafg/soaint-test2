import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import ProductCard from './ProductCard';
//  import { useCart } from '../Context/cart-context';
import useProductList from '../hooks/useProductList';
import './ProductList.css';

const ProductList = () => {
    const { products } = useProductList();
    const prdList = products.map((item, index) => {
        return <ProductCard key={index} item={item} />
    });
    return (
        <Container className="product-container">
            <Card.Group centered>
                {prdList}
            </Card.Group>
        </Container>
    );
};

export default ProductList;