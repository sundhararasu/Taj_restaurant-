import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Search from '../images/Search-Icon.svg';
import '../cusine/hotel.css';
import beyond from '../images/beyond.jpg';
import contact from '../images/contact_phone_icon.svg';
import blend from '../images/dining_img_5.avif';
import club from '../images/dining_img_15.webp';
import brew from '../images/brew.avif';
import rain from '../images/dining_img_6.avif';
import veran from '../images/veran.avif';
function Hotel() {
    return (
        <>
            <div style={{ backgroundColor: '#f5f6f6',paddingBottom:'15px'}}>
                <Container className="mt-md-5" >
                    <Row>
                        <Col lg={4} className="mt-5">
                            <input name="text" className="search" placeholder="Hotels" style={{ backgroundColor: '#f5f6f6', width: '100%', border: 'none', borderBottom: '1px solid grey' }}></input>
                        </Col>
                        <Col lg={4} className="mt-5">
                            <div className="search-wrapper">
                                <img src={Search} className="search-icon" alt="Search_Bar" />
                                <input
                                    type="text"
                                    name="text"
                                    className="search"
                                    placeholder="Search for Restaurant or Cuisine"
                                />
                            </div>
                        </Col>
                        <Col lg={4}>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} className="align-items-center justify-content-center mt-5">
                            <img
                                className="d-block  img-fluid rounded dinc"
                                src={beyond}
                                alt="beyond"
                            />
                            <div className='d-flex align-items-center mt-5 '>
                                <hr className='hot me-3' />
                                <span className="hotel fs-5">Beyond Indus</span>
                            </div>
                            <div className="ms-5">
                                <p className="mt-3">Taj Club House</p>
                                <p>Experience the culinary richness of Punjab, Rawalpindi, and Sindh at our specialized restaurant. Delight in a diverse array of exquisite dishes, each showcasing the vibrant flavors and cultural heritage of these regions, ensuring a memorable dining experience.</p>
                                <p>Cuisine: <b>North West Frontier</b></p>
                                <img src={contact} alt="contact_logo" />
                                <span style={{ color: '#ad8b3a ' }}>+91 44663 13131</span>
                            </div>
                        </Col>
                        <Col lg={4} className="align-items-center justify-content-center mt-5">
                            <img
                                className="d-block  img-fluid rounded dinc"
                                src={blend}
                                alt="blend"
                            />
                            <div className='d-flex align-items-center mt-5 '>
                                <hr className='hot me-3' />
                                <span className="hotel fs-5">BLEND</span>
                            </div>
                            <div className="ms-5">
                                <p className="mt-3">Taj Club House</p>
                                <p>Find the perfect Blend of high energy and chill vibes at the Taj Club House. The space draws inspiration from various elements, creating a unique ambience and offerings. Shimmering blue glass and reflective water make for a venue that is fast becoming the place to see and be seen.</p>
                                <p>Cuisine: <b>Finger Food</b></p>
                                <img src={contact} alt="contact_logo" />
                                <span style={{ color: '#ad8b3a ' }}>+91 44663 13131</span>
                            </div>
                        </Col>
                        <Col lg={4} className="align-items-center justify-content-center mt-5">
                            <img
                                className="d-block  img-fluid rounded dinc"
                                src={club}
                                alt="club"
                            />
                            <div className='d-flex align-items-center mt-5 '>
                                <hr className='hot me-3' />
                                <span className="hotel fs-5">CLUB HOUSE</span>
                            </div>
                            <div className="ms-5">
                                <p className="mt-3">Taj Club House</p>
                                <p>Soak in the sunlight through the blue glass façade in this most popular of Taj Club House restaurants. Discover a world of international flavours and an extensive range of specialty teas and coffees including the potent and frothy ‘degree coffee’ of Chennai.</p>
                                <p>Cuisine: <b>Multi-Cuisine</b></p>
                                <img src={contact} alt="contact_logo" />
                                <span style={{ color: '#ad8b3a ' }}>+91 44663 13131</span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} className="align-items-center justify-content-center mt-5">
                            <img
                                className="d-block  img-fluid rounded dinc"
                                src={brew}
                                alt="brew"
                            />
                            <div className='d-flex align-items-center mt-5 '>
                                <hr className='hot me-3' />
                                <span className="hotel fs-5">Multi-Cuisine</span>
                            </div>
                            <div className="ms-5">
                                <p className="mt-3">Taj Club House</p>
                                <p>Experience the culinary richness of Punjab, Rawalpindi, and Sindh at our specialized restaurant. Delight in a diverse array of exquisite dishes, each showcasing the vibrant flavors and cultural heritage of these regions, ensuring a memorable dining experience.</p>
                                <p>Cuisine: <b>North West Frontier</b></p>
                                <img src={contact} alt="contact_logo" />
                                <span style={{ color: '#ad8b3a ' }}>+91 44663 13131</span>
                            </div>
                        </Col>
                        <Col lg={4} className="align-items-center justify-content-center mt-5">
                            <img
                                className="d-block  img-fluid rounded dinc"
                                src={rain}
                                alt="rain"
                            />
                            <div className='d-flex align-items-center mt-5 '>
                                <hr className='hot me-3' />
                                <span className="hotel fs-5">BLEND</span>
                            </div>
                            <div className="ms-5">
                                <p className="mt-3">Taj Club House</p>
                                <p>Find the perfect Blend of high energy and chill vibes at the Taj Club House. The space draws inspiration from various elements, creating a unique ambience and offerings. Shimmering blue glass and reflective water make for a venue that is fast becoming the place to see and be seen.</p>
                                <p>Cuisine: <b> Alfresco fine dining</b></p>
                                <img src={contact} alt="contact_logo" />
                                <span style={{ color: '#ad8b3a ' }}>+91 44660 00000</span>
                            </div>
                        </Col>
                        <Col lg={4} className="align-items-center justify-content-center mt-5">
                            <img
                                className="d-block  img-fluid rounded dinc"
                                src={veran}
                                alt="veran"
                            />
                            <div className='d-flex align-items-center mt-5 '>
                                <hr className='hot me-3' />
                                <span className="hotel fs-5">CLUB HOUSE</span>
                            </div>
                            <div className="ms-5">
                                <p className="mt-3">Taj Club House</p>
                                <p>Soak in the sunlight through the blue glass façade in this most popular of Taj Club House restaurants. Discover a world of international flavours and an extensive range of specialty teas and coffees including the potent and frothy ‘degree coffee’ of Chennai.</p>
                                <p>Cuisine: <b>Multi-Cuisine</b></p>
                                <img src={contact} alt="contact_logo" />
                                <span style={{ color: '#ad8b3a ' }}>+91 44660 00000</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
export default Hotel;