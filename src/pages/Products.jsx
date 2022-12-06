import { Container, Row, Col } from 'react-bootstrap';
import products from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { PageHeadRows } from '../components/PageHeadRows';

function Products() {
    return (
        <Container>
            <PageHeadRows title="Products" />
            <Row>
                <div className="p-4 pb-md-4 mx-auto text-center">
                    <h3>Kaffemaskiner</h3>
                </div>
            </Row>
            <Row>
                {products.map(data => (
                    <Col className="mb-5" key={`${data.id}`}>
                        <ProductCard data={data} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Products;