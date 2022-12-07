import { LoremIpsum } from 'react-lorem-ipsum';
import { Container, Row, Col } from 'react-bootstrap';

function orders({align}){
    if(align)
    {
        return 1;
    }
}

export function SimpleRow({ title, src, align, span }) {
    let firstCol=2;
    let secondCol=1;
    if(align)
    {
        firstCol = 1;
        secondCol = 2;
    }
    return (
        <Container>
            <Row>
                <Col md={8} className="mx-auto text-center">
                    <h5>{title}</h5>
                    <hr className="mb-1 mt-3" />
                </Col>
            </Row>
            <Row className="fs-6 py-4">
                <Col className={"order-"+firstCol}><img className="img-thumbnail img-fluid" alt="" src={src} /></Col>
                <Col md={span} className={"order-"+secondCol}><LoremIpsum p={2} /></Col>
            </Row>
        </Container>
    )
}
