import { Container, Row, Col } from 'react-bootstrap';
import employees from '../data/employees';
import { EmployeeCard } from '../components/EmployeeCard';
import { PageHeadRows } from '../components/PageHeadRows';

function About() {
    return (
        <Container>
            <PageHeadRows title="About Us" />
            <Row>
                {employees.map(data => (
                    <Col className="mb-5" key={`${data.id}`}>
                        <EmployeeCard data={data} />
                    </Col>
                ))}
            </Row>
        </Container>

    );
}

export default About;