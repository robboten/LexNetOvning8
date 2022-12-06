import React from 'react';
import { LoremIpsum} from 'react-lorem-ipsum';
import { Container, Row, Col } from 'react-bootstrap';
import employees from '../data/employees';
import { EmployeeCard } from '../components/EmployeeCard';

function About() {
    return (
        <Container>
            <Row>
                <header className="p-3 pb-md-4 mx-auto text-center">
                    <h1 className="display-4 fw-normal">About Us</h1>
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
                {employees.map(data => (
                    <Col xs={3} className="mb-5" key={`${data.id}`}>
                        <EmployeeCard data={data} />
                    </Col>
                ))}
            </Row>
        </Container>

    );
}

export default About;