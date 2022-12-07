import { Container, Row } from 'react-bootstrap';
import { SimpleRow } from '../components/SimpleRow';

const rData = [
    { title: "Vilka är vi?", align: false, span: 8, src: "http://www.dvo.com/newsletter/monthly/2022/october/images/hot-drink.jpeg" },
    { title: "Vad gör vi?", align: true, span: 8, src: "https://libreshot.com/wp-content/uploads/2016/04/chocolate-and-coffee.jpg" },
    { title: "Varför oss?", align: false, span: 10, src: "https://www.jazzedongrains.com/wp-content/uploads/2022/05/Cover-story-arabica-2.jpg" },
    { title: "Kaffeparty, så fungerar det!", align: true, span: 8, src: "https://live.staticflickr.com/65535/51196341817_db191250d1_b.jpg" }
]
const simpleRows = rData.map((data) => {
    return <SimpleRow key={data.title} title={data.title} align={data.align} span={data.span} src={data.src} />
});

function Home() {
    return (
        <Container>
            <Row>
                <header className="p-3 pb-md-4 mx-auto text-center">
                    <h1 className="display-4 fw-normal">Kaffeparty</h1>
                </header>
            </Row>
            <Row className='text-center pb-4'>
                <figure>
                    <blockquote className="blockquote text-muted">
                        <p>"You know, this is - excuse me - a damn fine cup of coffee."</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        Someone at <cite title="Source Title">Double R Diner</cite>
                    </figcaption>
                </figure>
            </Row>
            {simpleRows}
        </Container>
    );
}


export default Home;