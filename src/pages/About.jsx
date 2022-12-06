import React from 'react';
import { LoremIpsum, fullname, Avatar } from 'react-lorem-ipsum';
import { Container, Row, Col, Button } from 'react-bootstrap';
import employees from '../data/employees';
import { EmployeeCard } from '../components/EmployeeCard';

const roles = [{ id: 1, role: 'VD', gender: 'female' }, { id: 2, role: 'HR', gender: "male" }, { id: 3, role: 'Product manager', gender: 'male' }, { id: 4, role: 'Web developer', gender: 'female' }];

const listItems = roles.map((number) =>
    <Col className="d-flex flex-column" key={number.id}>
        <Avatar gender={number.gender} className="align-self-center avatar rounded-circle my-4" width="200" height="200" alt="Avatar" />
        <h2 className="name text-center">{fullname(number.gender)}</h2>
        <h5 className="text-muted text-center">{number.role}</h5>
        <div className="text-center"><LoremIpsum p={1} avgSentencesPerParagraph={3} /></div>
        <Button className='mt-auto mx-4' href="mailto:foo@bar.baz">
            Mail me!
        </Button>
    </Col>
);

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
                {listItems}
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