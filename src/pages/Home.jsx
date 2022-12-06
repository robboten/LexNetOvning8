import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
    return (
        <Container className='text-muted '>
            <Row>
                <header className="p-3 pb-md-4 mx-auto text-center">
                    <h1 className="display-4 fw-normal">Kaffeparty</h1>
                </header>
            </Row>
            <Row className='text-center'>
                <figure>
                    <blockquote className="blockquote">
                        <p>"You know, this is - excuse me - a damn fine cup of coffee."</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        Someone at <cite title="Source Title">Double R Diner</cite>
                    </figcaption>
                </figure>
            </Row>
            <Row className="fs-6 py-4">
                <h4>Vilka är vi?</h4>
                <Col md={8}>
                    <LoremIpsum p={2} />
                </Col>
                <Col>
                    <img className="img-thumbnail img-fluid" src="http://www.dvo.com/newsletter/monthly/2022/october/images/hot-drink.jpeg" />
                </Col>
            </Row>
            <Row>
                <Col md={8} className="mx-auto text-center">
                    <h5>Vad gör vi?</h5>
                    <hr className="mb-1 mt-3" />
                </Col>
            </Row>
            <Row className="fs-6 py-4">
                <Col>
                    <img className="img-thumbnail img-fluid" src="https://libreshot.com/wp-content/uploads/2016/04/chocolate-and-coffee.jpg" />
                </Col>
                <Col md={8}>
                    <LoremIpsum p={2} />
                </Col>
            </Row>
            <Row>
                <Col md={8} className="mx-auto text-center">
                    <h5>Varför oss?</h5>
                    <hr className="mb-1 mt-3" />
                </Col>
            </Row>
            <Row className="fs-6 py-4">
                <Col md={9}>
                    <LoremIpsum p={3} />
                </Col>
                <Col>
                    <img className="img-thumbnail img-fluid" src="https://www.jazzedongrains.com/wp-content/uploads/2022/05/Cover-story-arabica-2.jpg" />
                </Col>
            </Row>
            <Row>
                <Col md={8} className="mx-auto text-center">
                    <h5>Kaffeparty, så fungerar det!</h5>
                    <hr className="mb-1 mt-3" />
                </Col>
            </Row>
            <Row className="fs-6 py-4">
                <Col>
                    <img className="img-thumbnail img-fluid" src="https://live.staticflickr.com/65535/51196341817_db191250d1_b.jpg" />
                </Col>
                <Col md={8}>
                    <LoremIpsum p={2} />
                </Col>
            </Row>
        </Container>
    );
}


export default Home;