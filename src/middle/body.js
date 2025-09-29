import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../middle/body.css';
import img1 from '../images/home_img_1.avif';
import img2 from '../images/home_img_2.avif';
import img3 from '../images/home_img_3.webp';
import img4 from '../images/home_img_4.avif';
import img5 from '../images/home_img_5.avif';
import Container from 'react-bootstrap/esm/Container';
function Body(){
    return(
    <>
        <Carousel indicators={false} className='bodyCarousel' interval={4000}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                    src={img1}
                    alt="Slide 1"/>
            <Carousel.Caption>
                <h3>CHENNAI,INDIA</h3>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"
                    src={img2}
                    alt="Slide 2" />
                    <Carousel.Caption>
                <h3>CHENNAI,INDIA</h3>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"
                    src={img3}
                    alt="Slide 3" />
                    <Carousel.Caption>
                <h3>CHENNAI,INDIA</h3>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"
                    src={img4}
                    alt="Slide 4" />
                    <Carousel.Caption>
                <h3>CHENNAI,INDIA</h3>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"
                    src={img5}
                    alt="Slide 5" />
                    <Carousel.Caption>
                <h3>CHENNAI,INDIA</h3>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <Container>
            <Row className='mt-3 text-center' style={{ color:'#ad8b3a'}}>
                <Col>
                    <a className='text-decoration-none bod' href='#highlights'>HIGHLIGHTS</a>
                </Col>
                <Col>
                    <a className='text-decoration-none bod  active-link' href='#dining'>DINING</a>
                </Col>
                <Col>
                    <a className='text-decoration-none bod' href='#spa'>SPA</a>
                </Col>
                <Col>
                    <a className='text-decoration-none bod' href='#holidays'>HOLIDAYS</a>
                </Col>
            </Row>
         </Container>
            <hr/>
       
    </>
    );
}
export default Body;