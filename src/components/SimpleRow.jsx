import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import { Container, Row, Col } from 'react-bootstrap';

export function SimpleRow({ title, src, align, span }) {
    return (
        <Container>
            <Row>
                <Col md={8} className="mx-auto text-center">
                    <h5>{title}</h5>
                    <hr className="mb-1 mt-3" />
                </Col>
            </Row>
            <Row className="fs-6 py-4">
                {align ? <Col><img className="img-thumbnail img-fluid" alt="" src={src} /></Col> : <Col md={span} className="fs-6"><LoremIpsum p={2} /></Col>}
                {!align ? <Col><img className="img-thumbnail img-fluid" alt="" src={src} /></Col> : <Col md={span} className="fs-6"><LoremIpsum p={2} /></Col>}
            </Row>
        </Container>
    )
}
