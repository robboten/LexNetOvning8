import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { LoremIpsum } from 'react-lorem-ipsum';


function Events() {
    return (
        <Container>
            <Row>
                <header className="p-3 pb-md-4 mx-auto text-center">
                    <h1 className="display-4 fw-normal">Kaffeparty</h1>
                </header>
            </Row>
            <Row className="justify-content-md-center  mx-auto text-center">
                <Col xs lg="8">
                    <div className="fs-5 mb-4 text-muted">
                        <LoremIpsum p={1} avgSentencesPerParagraph={5} />
                    </div>
                </Col>
            </Row>
            <Row className="mb-2">
                <Col className="text-bg-secondary rounded-start">
                    <Row>
                        <h4 className="text-center pt-4">Företag</h4>
                    </Row>
                    <Row className="m-4 border-top pt-4">
                        <Col>
                            <img src="https://via.placeholder.com/250x350" className='float-start'></img>
                        </Col>
                        <Col className="col-sm-6">
                            <LoremIpsum p={1} />
                            <div className='clearfix'>
                                <Button className="btn-secondary btn-outline-light float-right">Find out more</Button>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col className="text-bg-light rounded-end border">
                    <Row>
                        <h4 className="text-center pt-4">Privatpersoner</h4>
                    </Row>
                    <Row className="m-4 border-top border-dark pt-4">
                        <Col className="col-sm-6">
                            <LoremIpsum p={1} />
                            <div className='clearfix'>
                                <Button className="btn btn-outline-dark btn-light">Find out more</Button>
                            </div>
                        </Col>
                        <Col>
                            <img src="https://via.placeholder.com/250x350" className='float-end'></img>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Events;