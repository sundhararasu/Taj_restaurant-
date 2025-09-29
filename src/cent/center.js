import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './center.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../images/dining_img_1.avif';
import img2 from '../images/dining_img_2.avif';
import img3 from '../images/dining_img_3.webp';
import img4 from '../images/dining_img_4.avif';
import img5 from '../images/dining_img_5.avif';
import img6 from '../images/dining_img_6.avif';
import img7 from '../images/dining_img_7.avif';
import img8 from '../images/dining_img_8.webp';
import img9 from '../images/dining_img_9.webp';
import img10 from '../images/dining_img_10.jpg';
import img11 from '../images/dining_img_11.jpg';
import img12 from '../images/dining_img_12.avif';
import img13 from '../images/dining_img_13.avif';
import img14 from '../images/dining_img_14.webp';
import img15 from '../images/dining_img_15.webp';
import img16 from '../images/dining_img_16.avif';
import contact from '../images/contact_phone_icon.svg';
function Dining(){
    return(
        <>
            <div className="d-flex mt-5 align-items-center justify-content-center">
                <hr className='rest'/>
                <span className="p-md-4 text-center res">restaurants in chennai</span>
                <hr className='rest'/>
             </div>
             <div className='d-flex justify-content-center text-center'>
                <p className='exp'>Experience the culinary tapestry at Taj in Chennai, where 
                    vibrant flavours merge with elegant ambiance. Indulge in 
                    diverse dining options, showcasing local nuances and global gastronomy with finesse and flair.</p>
             </div>
             <Container fluid className='mt-5'>
                <Carousel indicators={false} className='diningCarousel' interval={5000}>
                    <Carousel.Item>
                        <Row  className="align-items-center justify-content-center">
                            <Col lg={2}></Col>
                            <Col lg={4} className="align-items-center justify-content-center">
                                <a href='#Mynt'>
                                <img
                                className="d-block  img-fluid rounded dinc"
                                    src={img1}
                                  alt="Mynt"
                                />
                                </a>
                            </Col>
                            <Col  lg={4} >
                                <div className='d-flex align-items-center'>
                                    <hr className='rest' />
                                    <span className="p-md-4 res">mynt</span>
                                </div>
                                    <p>Step into Mynt, Chennai's most-talked-about all-day diner, where contemporary design meets natural sunlight. 
                                        The stunning poolside views create an extraordinary backdrop for both intimate meals and lively gatherings.
                                         As one of the best restaurants in Chennai, our vibrant atmosphere transforms each experience into a visit that is uniquely memorable.</p>
                                <div>
                                    <img src={contact} alt="contact_logo"/>
                                    <span style={{color:'#ad8b3a '}}>+91 4466802500/ For Room Reservation: +91 4464804425</span>
                                </div>
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row  className="align-items-center justify-content-center">
                            <Col lg={2}></Col>
                            <Col lg={4} className="align-items-center justify-content-center">
                                <a href='#Point'>
                                <img
                                className="d-block  img-fluid rounded dinc"
                                    src={img2}
                                  alt="Match Point"
                                />
                                </a>
                            </Col>
                            <Col  lg={4} >
                                <div className='d-flex align-items-center'>
                                    <hr className='rest' />
                                    <span className="p-md-4 res">Match Point</span>
                                </div>
                                    <p>This bright and lively restaurant on the fifth floor overlooks the cool blue hues of the outdoor pool, with floor-to-ceiling windows that frame the skies in the background. On offer are bountiful brunches with fresh bakes, cold-pressed juices, crisp dosas, freshly tossed salads, paper-thin pizzas, delicious desserts, healthy shakes and fragrant teas and robust coffees.</p>
                                <div>
                                    <img src={contact} alt="contact_logo"/>
                                    <span style={{color:'#ad8b3a '}}>+91 44661 48899</span>
                                </div>
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row  className="align-items-center justify-content-center">
                            <Col lg={2}></Col>
                            <Col lg={4} className="align-items-center justify-content-center">
                                <a href='#Golden Dragon'>
                                <img
                                className="d-block  img-fluid rounded dinc"
                                    src={img3}
                                  alt="Golden Dragon"
                                />
                                </a>
                            </Col>
                            <Col  lg={4} >
                                <div className='d-flex align-items-center'>
                                    <hr className='rest' />
                                    <span className="p-md-4 res">Golden Dragon</span>
                                </div>
                                    <p>Explore the authentic flavours of Sichuan and Canton at our legendary Chinese fine-dining institution. Golden Dragon is widely considered one of the best Chinese fine-dining restaurants in Chennai. With an extensive dim sum menu and delicious wines and teas on offer, it is easy to see why.   </p>
                                <div>
                                    <img src={contact} alt="contact_logo"/>
                                    <span style={{color:'#ad8b3a '}}>+91 78248 62306</span>
                                </div>
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row  className="align-items-center justify-content-center">
                            <Col lg={2}></Col>
                            <Col lg={4} className="align-items-center justify-content-center">
                                <a href='#Tea Lounge'>
                                <img
                                className="d-block  img-fluid rounded dinc"
                                    src={img4}
                                  alt="tea lounge"
                                />
                                </a>
                            </Col>
                            <Col  lg={4} >
                                <div className='d-flex align-items-center'>
                                    <hr className='rest' />
                                    <span className="p-md-4 res">Tea Lounge</span>
                                </div>
                                    <p>Indulge in a sumptuous high-tea experience at our elegant Tea Lounge by the lobby. Savour a delectable spread of hors d'oeuvres, scones, macarons, teacakes and petit fours, along with a selection of the best street food Chennai is known for. By reservation only.</p>
                                <div>
                                    <img src={contact} alt="contact_logo"/>
                                    <span style={{color:'#ad8b3a '}}>+91 44660 02827</span>
                                </div>
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row  className="align-items-center justify-content-center">
                            <Col lg={2}></Col>
                            <Col lg={4} className="align-items-center justify-content-center">
                                <a href='#blend'>
                                <img
                                className="d-block  img-fluid rounded dinc"
                                    src={img5}
                                  alt="Blend"
                                />
                                </a>
                            </Col>
                            <Col  lg={4} >
                                <div className='d-flex align-items-center'>
                                    <hr className='rest' />
                                    <span className="p-md-4 res">Blend</span>
                                </div>
                                    <p>Find the perfect Blend of high energy and chill vibes at the Taj Club House. The space draws inspiration from various elements, creating a unique ambience and offerings. Shimmering blue glass and reflective water make for a venue that is fast becoming the place to see and be seen.</p>
                                <div>
                                    <img src={contact} alt="contact_logo"/>
                                    <span style={{color:'#ad8b3a '}}>+91 44663 13131</span>
                                </div>
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row  className="align-items-center justify-content-center">
                            <Col lg={2}></Col>
                            <Col lg={4} className="align-items-center justify-content-center">
                                <a href='#raintree'>
                                <img
                                className="d-block  img-fluid rounded dinc"
                                    src={img6}
                                  alt="Raintree"
                                />
                                </a>
                            </Col>
                            <Col  lg={4} >
                                <div className='d-flex align-items-center'>
                                    <hr className='rest' />
                                    <span className="p-md-4 res">Raintree</span>
                                </div>
                                    <p>Raintree champions Tamil Nadu's Chettinad culinary heritage, meticulously crafted with the 
                                        finest ingredients. This gastronomic experience unfolds within an enchanting indoor-outdoor
                                         setting, nestled amidst a verdant garden expanse.</p>
                                <div>
                                    <img src={contact} alt="contact_logo"/>
                                    <span style={{color:'#ad8b3a '}}>+91 44660 00000</span>
                                </div>
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row  className="align-items-center justify-content-center">
                            <Col lg={2}></Col>
                            <Col lg={4} className="align-items-center justify-content-center">
                                <a href='#the verandah'>
                                <img
                                className="d-block  img-fluid rounded dinc"
                                    src={img7}
                                  alt="The verandah"
                                />
                                </a>
                            </Col>
                            <Col  lg={4} >
                                <div className='d-flex align-items-center'>
                                    <hr className='rest' />
                                    <span className="p-md-4 res">The Verandah</span>
                                </div>
                                    <p>Sunlight floods this chic expanse through its floor-to-ceiling windows, creating an ambiance of serene elegance. The Verandah's menu, honed over time, marries international classics and cherished Indian favourites with artful new creations that promise delightful surprises.</p>
                                <div>
                                    <img src={contact} alt="contact_logo"/>
                                    <span style={{color:'#ad8b3a '}}>+91 44660 00000</span>
                                </div>
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row  className="align-items-center justify-content-center">
                            <Col lg={2}></Col>
                            <Col lg={4} className="align-items-center justify-content-center">
                                <a href='#Connemara Bar'>
                                <img
                                className="d-block  img-fluid rounded dinc"
                                    src={img8}
                                  alt="Connemara bar"
                                />
                                </a>
                            </Col>
                            <Col  lg={4} >
                                <div className='d-flex align-items-center'>
                                    <hr className='rest' />
                                    <span className="p-md-4 res">The Lady Connemara Bar & Lounge</span>
                                </div>
                                    <p>The legacy of stylish sophistication and vibrant nightlife at The Lady Connemara remains unmatched in Southern India. This illustrious past continues to thrive, offering an atmosphere poised to forge new chapters of history.</p>
                                <div>
                                    <img src={contact} alt="contact_logo"/>
                                    <span style={{color:'#ad8b3a '}}>+91 44660 00000</span>
                                </div>
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row  className="align-items-center justify-content-center">
                            <Col lg={2}></Col>
                            <Col lg={4} className="align-items-center justify-content-center">
                                <a href='#bay view'>
                                <img
                                className="d-block  img-fluid rounded dinc"
                                    src={img9}
                                  alt="Bay View"
                                />
                                </a>
                            </Col>
                            <Col  lg={4} >
                                <div className='d-flex align-items-center'>
                                    <hr className='rest' />
                                    <span className="p-md-4 res">Bay View</span>
                                </div>
                                    <p>In a picturesque seaside setting, savour a tantalising coastal feast encompassing a host of fresh seafood, international favourites, spicy Chettinad specialties, and imaginative desserts. Delight in an enviable selection of snapper, kingfish, mackerel, prawns, lobster, and squid, expertly prepared in both Continental and Indian styles.</p>
                                <div>
                                    <img src={contact} alt="contact_logo"/>
                                    <span style={{color:'#ad8b3a '}}>+91 44674 13404</span>
                                </div>
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row  className="align-items-center justify-content-center">
                            <Col lg={2}></Col>
                            <Col lg={4} className="align-items-center justify-content-center">
                                <a href='#wink'>
                                <img
                                className="d-block  img-fluid rounded dinc"
                                    src={img10}
                                  alt="Wink"
                                />
                                </a>
                            </Col>
                            <Col  lg={4} >
                                <div className='d-flex align-items-center'>
                                    <hr className='rest' />
                                    <span className="p-md-4 res">Wink</span>
                                </div>
                                    <p>As a dynamic bar and restaurant in Chennai, Wink captivates with its distinctive pod-like seating and dramatic floor-to-ceiling windows. The cream velvet interiors, punctuated with vibrant splashes of colour, create an atmosphere that evolves from casual to electric as the night progresses. Watch the Wink bar transform into Chennai’s most sought-after nightlife destination, drink in hand.</p>
                                <div>
                                    <img src={contact} alt="contact_logo"/>
                                    <span style={{color:'#ad8b3a '}}>+91 4466802500/ For Room Reservation: +91 4464804425</span>
                                </div>
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row  className="align-items-center justify-content-center">
                            <Col lg={2}></Col>
                            <Col lg={4} className="align-items-center justify-content-center">
                                <a href='#sian'>
                                <img
                                className="d-block  img-fluid rounded dinc"
                                    src={img11}
                                  alt="Sian"
                                />
                                </a>
                            </Col>
                            <Col  lg={4} >
                                <div className='d-flex align-items-center'>
                                    <hr className='rest' />
                                    <span className="p-md-4 res">Sian</span>
                                </div>
                                    <p>As a dynamic bar and restaurant in Chennai, Wink captivates with its distinctive pod-like seating and dramatic floor-to-ceiling windows. The cream velvet interiors punctuated with vibrant splashes of colour create an atmosphere that evolves from casual to electric as the night progresses. Watch the Wink bar transform into Chennai’s most sought-after nightlife destination, drink in hand.</p>
                                <div>
                                    <img src={contact} alt="contact_logo"/>
                                    <span style={{color:'#ad8b3a '}}>+91 4466802500/ For Room Reservation: +91 4464804425</span>
                                </div>
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row  className="align-items-center justify-content-center">
                            <Col lg={2}></Col>
                            <Col lg={4} className="align-items-center justify-content-center">
                                <a href='#mews cafe'>
                                <img
                                className="d-block  img-fluid rounded dinc"
                                    src={img12}
                                  alt="Mews cafe"
                                />
                                </a>
                            </Col>
                            <Col  lg={4} >
                                <div className='d-flex align-items-center'>
                                    <hr className='rest' />
                                    <span className="p-md-4 res">Mews Café</span>
                                </div>
                                    <p>When you need a break from your busy day, drop into Mews Café on the lobby level. Settle into a nook with your favourite book or work on your laptop as you watch the world go by. With a wide selection of quality teas and coffees from around the world, it is a relaxing place to focus and recharge.</p>
                                <div>
                                    <img src={contact} alt="contact_logo"/>
                                    <span style={{color:'#ad8b3a '}}>+91 44661 48899</span>
                                </div>
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row  className="align-items-center justify-content-center">
                            <Col lg={2}></Col>
                            <Col lg={4} className="align-items-center justify-content-center">
                                <a href='#Southern Spice'>
                                <img
                                className="d-block  img-fluid rounded dinc"
                                    src={img13}
                                  alt="Southern Spice"
                                />
                                </a>
                            </Col>
                            <Col  lg={4} >
                                <div className='d-flex align-items-center'>
                                    <hr className='rest' />
                                    <span className="p-md-4 res">Southern Spice</span>
                                </div>
                                    <p>Southern Spice is a tribute to the illustrious past of our country and one of the finest restaurants in Chennai. Bold and elegant interiors with authentic artwork give a sense of understated grandeur that complements the rich and subtle South Indian flavours. With the use of fresh herbs and spices to capture the quintessential South Indian menu, our expert chefs weave magic on every plate.</p>
                                <div>
                                    <img src={contact} alt="contact_logo"/>
                                    <span style={{color:'#ad8b3a '}}>+91 78248 62308</span>
                                </div>
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row  className="align-items-center justify-content-center">
                            <Col lg={2}></Col>
                            <Col lg={4} className="align-items-center justify-content-center">
                                <a href='#Anise'>
                                <img
                                className="d-block  img-fluid rounded dinc"
                                    src={img14}
                                  alt="Anise"
                                />
                                </a>
                            </Col>
                            <Col  lg={4} >
                                <div className='d-flex align-items-center'>
                                    <hr className='rest' />
                                    <span className="p-md-4 res">Anise</span>
                                </div>
                                    <p>The menu at Anise, one of our signature Taj Coromandel restaurants, is an eclectic mix of flavours, blending Western and Eastern influences in a delightful harmony. Indulge in a distinctive culinary experience crafted just for you. ​ Choose from a variety of comfort foods to healthy bowls at this multi-cuisine restaurant in Chennai where convivial gatherings are the norm and minimalism is limited only to the decor.</p>
                                <div>
                                    <img src={contact} alt="contact_logo"/>
                                    <span style={{color:'#ad8b3a '}}>+91 78248 62310</span>
                                </div>
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row  className="align-items-center justify-content-center">
                            <Col lg={2}></Col>
                            <Col lg={4} className="align-items-center justify-content-center">
                                <a href='#Club House'>
                                <img
                                className="d-block  img-fluid rounded dinc"
                                    src={img15}
                                  alt="Club House"
                                />
                                </a>
                            </Col>
                            <Col  lg={4} >
                                <div className='d-flex align-items-center'>
                                    <hr className='rest' />
                                    <span className="p-md-4 res">Club House</span>
                                </div>
                                    <p>Soak in the sunlight through the blue glass façade in this most popular of Taj Club House restaurants. Discover a world of international flavours and an extensive range of specialty teas and coffees including the potent and frothy ‘degree coffee’ of Chennai.</p>
                                <div>
                                    <img src={contact} alt="contact_logo"/>
                                    <span style={{color:'#ad8b3a '}}>+91 44663 13131</span>
                                </div>
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row  className="align-items-center justify-content-center">
                            <Col lg={2}></Col>
                            <Col lg={4} className="align-items-center justify-content-center">
                                <a href='#Seagull'>
                                <img
                                className="d-block  img-fluid rounded dinc"
                                    src={img16}
                                  alt="Seagull"
                                />
                                </a>
                            </Col>
                            <Col  lg={4} >
                                <div className='d-flex align-items-center'>
                                    <hr className='rest' />
                                    <span className="p-md-4 res">Seagull</span>
                                </div>
                                    <p>Embark on a global culinary adventure at Seagull. Delight in authentic Indian flavours, fresh seafood, international classics, and renowned champagne brunches, all in a stylish and refined setting.</p>
                                <div>
                                    <img src={contact} alt="contact_logo"/>
                                    <span style={{color:'#ad8b3a '}}>+91 44674 13409</span>
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
export default Dining;