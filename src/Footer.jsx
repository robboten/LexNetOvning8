import React from "react";
import { LoremIpsum } from 'react-lorem-ipsum';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <Container>
            <footer className="py-4">
                <Row className="d-flex py-4 my-4 border-top text-muted">
                    <Col><p><small>robboten ~ © 2022</small></p></Col>
                    <Col className="col fs-6 fst-italic"><LoremIpsum p={1} avgSentencesPerParagraph={3} /></Col>
                </Row>
            </footer>
        </Container>
    )
}

export default Footer;