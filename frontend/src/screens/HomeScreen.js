import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';

const HomeScreen = () => {
    const [products, setProducts] = useState([]); //what we are calling the state and the function we call to change the state

    useEffect(() => {
        //fires as soon as page is loaded
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products');
            setProducts(data);
        }

        fetchProducts()
    }, [])

    return (
        <>
            <h1>Latest Kitties</h1>   
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen;
