import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LoremIpsum } from 'react-lorem-ipsum';
import { ProductCard } from '../components/ProductCard';
import products from '../products';

function Products() {
    return (
            <Container>
                <Row>
                    <header className="p-3 pb-md-4 mx-auto text-center">
                        <h1 className="display-4 fw-normal">Products</h1>
                    </header>
                </Row>
                <Row className="justify-content-md-center  mx-auto text-center">
                    <Col xs lg="8">
                        <div className="fs-5 mb-4 text-muted">
                            <LoremIpsum p={1} avgSentencesPerParagraph={5} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="p-4 pb-md-4 mx-auto text-center">
                        <h3>Kaffemaskiner</h3>
                    </div>
                </Row>
                <Row>
                    {products.map(data => (
                        <Col xs={3} className="mb-5" key={`${data.id}`}>
                            <ProductCard data={data} />
                        </Col>
                    ))}
                </Row>
            </Container>
    );
}

export default Products;