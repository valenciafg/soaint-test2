import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import useShoppingCart from '../hooks/useShoppingCart';

const ProductCard = ({ item }) => {
    const { title, price, image, id } = item;

    const addToCart = () => {
        console.log('****')
    }
    return (
        <Card>
            <Image src={image} size="large" circular />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
            </Card.Content>
            <Card.Content extra>
                
                <Button icon labelPosition='left'>
                    <Icon name='money' />
                    {price}
                </Button>
                <Button icon labelPosition='right' onClick={addToCart}>
                    Add to cart
                    <Icon name='add to cart' />
                </Button>
            </Card.Content>
        </Card>
    );
};

export default ProductCard;