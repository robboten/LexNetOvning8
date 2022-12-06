import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { LoremIpsum } from 'react-lorem-ipsum';
import { PageHeadRows } from '../components/PageHeadRows';

function Events() {
    return (
        <Container>
            <PageHeadRows title="Kaffeparty" />
            <Row className="mb-2">
                <Col className="text-bg-secondary rounded-start">
                    <Row>
                        <h4 className="text-center pt-4">Företag</h4>
                    </Row>
                    <Row className="m-4 border-top pt-4">
                        <Col>
                            <img src="https://via.placeholder.com/250x350" alt="placeholder" className='float-start'></img>
                        </Col>
                        <Col className="col-sm-6">
                            <LoremIpsum p={1} />
                            <div className='clearfix pb-auto'>
                                <Button className="btn-secondary btn-outline-light  float-end">Find out more</Button>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col className="text-bg-light rounded-end border">
                    <Row>
                        <h4 className="text-center pt-4">Privatpersoner</h4>
                    </Row>
                    <Row className="m-4 border-top border-dark pt-4">
                        <Col>
                            <img src="https://via.placeholder.com/250x350" alt="placeholder" className='float-start'></img>
                        </Col>
                        <Col className="col-sm-6">
                            <LoremIpsum p={1} />
                            <div className='clearfix'>
                                <Button className="btn btn-outline-dark btn-light float-end">Find out more</Button>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Events;