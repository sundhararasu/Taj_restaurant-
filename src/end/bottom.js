import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../end/bottom.css';
import Container from 'react-bootstrap/esm/Container';
import b1 from '../images/bottom_img1.avif';
import b2 from '../images/bottom_img2.avif';
import b3 from '../images/bottom_img3.avif';
import b4 from '../images/bottom_img4.avif';
import b5 from '../images/bottom_img5.avif';
import b6 from '../images/bottom_img6.webp';
import b7 from '../images/bottom_img7.avif';
function Bottom(){
    return(
    <>
        <Container fluid className='bg-black'>
            <Carousel indicators={false} className='bottomCarousel' interval={5000}>
                <Carousel.Item style={{backgroundImage:`url(${b1})`,minHeight:'500px',backgroundSize: "cover",backgroundPosition: "center"}}>
                    <Row  className="g-0 align-items-stretch justify-content-center d-flex" style={{marginTop:'70px'}}>
                        <Col lg={2 }></Col>
                        <Col lg={4} className="align-items-center h-100 justify-content-center p-0">
                                <img
                                className="img-fluid d-block"
                                src={b1}  
                                  alt=""
                                style={{objectFit:"cover"}}
                                />
                        </Col>
                        <Col  lg={4} className=' bg-white p-0'>
                            <div className='text-center align-items-center justify-content-center'>
                                    <p className="bot mt-lg-5">timeless weddings</p>
                                    <p className="ms-lg-5 mt-lg-4">Experience the magic of a Taj wedding with our expert planners crafting flawless events,creating timeless memories for generations</p>
                            </div>
                        </Col>
                        <Col lg={2}></Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item style={{backgroundImage:`url(${b2})`,minHeight:'500px',backgroundSize: "cover",backgroundPosition: "center"}}>
                    <Row  className="g-0 align-items-stretch justify-content-center d-flex" style={{marginTop:'70px'}}>
                        <Col lg={2 }></Col>
                        <Col lg={4} className="align-items-center h-100 justify-content-center p-0">
                                <img
                                className="img-fluid d-block"
                                src={b2}  
                                  alt=""
                                style={{objectFit:"cover"}}
                                />
                        </Col>
                        <Col  lg={4} className=' bg-white p-0'>
                            <div className='text-center align-items-center justify-content-center'>
                                    <p className="bot mt-lg-5">timeless weddings</p>
                                    <p className="ms-lg-5 mt-lg-4">Experience the magic of a Taj wedding with our expert planners crafting flawless events,creating timeless memories for generations</p>
                            </div>
                        </Col>
                        <Col lg={2}></Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item style={{backgroundImage:`url(${b3})`,minHeight:'500px',backgroundSize: "cover",backgroundPosition: "center"}}>
                    <Row  className="g-0 align-items-stretch justify-content-center d-flex" style={{marginTop:'70px'}}>
                        <Col lg={2 }></Col>
                        <Col lg={4} className="align-items-center h-100 justify-content-center p-0">
                                <img
                                className="img-fluid d-block"
                                src={b3}  
                                  alt=""
                                style={{objectFit:"cover"}}
                                />
                        </Col>
                        <Col  lg={4} className=' bg-white p-0'>
                            <div className='text-center align-items-center justify-content-center'>
                                    <p className="bot mt-lg-5">timeless weddings</p>
                                    <p className="ms-lg-5 mt-lg-4">Experience the magic of a Taj wedding with our expert planners crafting flawless events,creating timeless memories for generations</p>
                            </div>
                        </Col>
                        <Col lg={2}></Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item style={{backgroundImage:`url(${b4})`,minHeight:'500px',backgroundSize: "cover",backgroundPosition: "center"}}>
                    <Row  className="g-0 align-items-stretch justify-content-center d-flex" style={{marginTop:'70px'}}>
                        <Col lg={2 }></Col>
                        <Col lg={4} className="align-items-center h-100 justify-content-center p-0">
                                <img
                                className="img-fluid d-block"
                                src={b4}  
                                  alt=""
                                style={{objectFit:"cover"}}
                                />
                        </Col>
                        <Col  lg={4} className=' bg-white p-0'>
                            <div className='text-center align-items-center justify-content-center'>
                                    <p className="bot mt-lg-5">timeless weddings</p>
                                    <p className="ms-lg-5 mt-lg-4">Experience the magic of a Taj wedding with our expert planners crafting flawless events,creating timeless memories for generations</p>
                            </div>
                        </Col>
                        <Col lg={2}></Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item style={{backgroundImage:`url(${b5})`,minHeight:'500px',backgroundSize: "cover",backgroundPosition: "center"}}>
                    <Row  className="g-0 align-items-stretch justify-content-center d-flex" style={{marginTop:'70px'}}>
                        <Col lg={2 }></Col>
                        <Col lg={4} className="align-items-center h-100 justify-content-center p-0">
                                <img
                                className="img-fluid d-block"
                                src={b5}  
                                  alt=""
                                style={{objectFit:"cover"}}
                                />
                        </Col>
                        <Col  lg={4} className=' bg-white p-0'>
                            <div className='text-center align-items-center justify-content-center'>
                                    <p className="bot mt-lg-5">timeless weddings</p>
                                    <p className="ms-lg-5 mt-lg-4">Experience the magic of a Taj wedding with our expert planners crafting flawless events,creating timeless memories for generations</p>
                            </div>
                        </Col>
                        <Col lg={2}></Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item style={{backgroundImage:`url(${b6})`,minHeight:'500px',backgroundSize: "cover",backgroundPosition: "center"}}>
                    <Row  className="g-0 align-items-stretch justify-content-center d-flex" style={{marginTop:'70px'}}>
                        <Col lg={2 }></Col>
                        <Col lg={4} className="align-items-center h-100 justify-content-center p-0">
                                <img
                                className="img-fluid d-block"
                                src={b6}  
                                  alt=""
                                style={{objectFit:"cover"}}
                                />
                        </Col>
                        <Col  lg={4} className=' bg-white p-0'>
                            <div className='text-center align-items-center justify-content-center'>
                                    <p className="bot mt-lg-5">timeless weddings</p>
                                    <p className="ms-lg-5 mt-lg-4">Experience the magic of a Taj wedding with our expert planners crafting flawless events,creating timeless memories for generations</p>
                            </div>
                        </Col>
                        <Col lg={2}></Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item style={{backgroundImage:`url(${b7})`,minHeight:'500px',backgroundSize: "cover",backgroundPosition: "center"}}>
                    <Row  className="g-0 align-items-stretch justify-content-center d-flex" style={{marginTop:'70px'}}>
                        <Col lg={2 }></Col>
                        <Col lg={4} className="align-items-center h-100 justify-content-center p-0">
                                <img
                                className="img-fluid d-block"
                                src={b7}  
                                  alt=""
                                style={{objectFit:"cover"}}
                                />
                        </Col>
                        <Col  lg={4} className=' bg-white p-0'>
                            <div className='text-center align-items-center justify-content-center'>
                                    <p className="bot mt-lg-5">timeless weddings</p>
                                    <p className="ms-lg-5 mt-lg-4">Experience the magic of a Taj wedding with our expert planners crafting flawless events,creating timeless memories for generations</p>
                            </div>
                        </Col>
                        <Col lg={2}></Col>
                    </Row>
                </Carousel.Item>
            </Carousel>    
        </Container>
    </>
    );
}
export default Bottom;