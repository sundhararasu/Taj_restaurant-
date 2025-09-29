import Container from "react-bootstrap/esm/Container";
import hcl from "../images/foot_hcl.webp";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import '../footers/footer.css';
import F from '../images/f.svg';
import X from '../images/x.svg';
import I from '../images/i.svg';
import Y from '../images/y.svg';
import IN from '../images/in.svg';
import F1 from '../images/foo1.svg';
import F2 from '../images/foo2.svg';
import F3 from '../images/foo3.svg';
import F4 from '../images/foo4.svg';
import F5 from '../images/foo5.svg';
import F6 from '../images/foo6.svg';
import F7 from '../images/foo7.svg';
import F8 from '../images/foo8.svg';
import F9 from '../images/foo9.svg';
import F10 from '../images/foo10.svg';
function Footer(){
    return(
        <>
        <Container fluid className="bg-black">
        <Container >
            <Row >
            <Col  className="mt-5">
            <img src={hcl} alt="hcl"/>
            <p className="mt-5"><b>SUBSCRIBE FOR LATEST UPDATES</b></p>
            <div className="d-flex gap-5 ">
            <input type="text" placeholder="Enter Your e-mail Address" className="bg-black" style={{all:"unset", borderBottom:"1px solid grey"}}></input>
            <button className="bg-gray-500 border-0 p-2 ">SUBSCRIBE</button>
            </div>
            <p className="mt-5"><b>FOR BOOKINGS CONTACT</b></p>
             <div className="d-lg-flex gap-5">
            <a href="#con" style={{textDecoration:'none'}}><p style={{color:'white'}}>1-800-111-825</p></a>
            <a href="#con" style={{textDecoration:'none'}}><p style={{color:'white'}}>reservations@ihcltata.com</p></a>
            </div>
            <p className="mt-5"><b>CUSTOMER SUPPORT</b></p>
            <div className="d-lg-flex gap-5">
            <a href="#con" style={{textDecoration:'none'}}><p style={{color:'white'}}>contacttaj@tajhotels.com</p></a>
            <a href="#con" style={{textDecoration:'none'}}><p style={{color:'white'}}>website.feedback@tajhotels.com</p></a>

            </div>
            </Col>
            <Col className="ms-5">
                <h6 className='mt-5' style={{color:'grey'}}><b>QUICK LINKS</b></h6>
                <div className="d-flex gap-5 foot">
                <ul className="list-unstyled ">
                   <li className="mb-3"> <a href="#hotel" >Hotel</a></li>
                   <li className="mb-3"> <a href="#dining" >Dining</a></li>
                   <li className="mb-3"> <a href="#wellness" >Wellness</a></li>
                   <li className="mb-3"> <a href="#timeless" >Timeless Weddings</a></li>
                   <li className="mb-3"> <a href="#event" >Event Venues</a></li>
                   <li className="mb-3"> <a href="#magazine" >Taj Magazine</a></li>
                   <li className="mb-3"> <a href="#sitemap" >Sitemap</a></li>
                   <li className="mb-3"> <a href="#hsbc" >HSBC Taj Credit</a></li>
                   <li className="mb-3"> <a href="#card" >Card</a></li>
                </ul>
                <ul className="list-unstyled ">
                   <li className="mb-3"> <a href="#about" >About Taj</a></li>
                   <li className="mb-3"> <a href="#holidays" >Holidays</a></li>
                   <li className="mb-3"> <a href="#offers" >Offers</a></li>
                   <li className="mb-3"> <a href="#gifting" >Gifting</a></li>
                   <li className="mb-3"> <a href="#neupass" >Neupass</a></li>
                   <li className="mb-3"> <a href="#epicure" >Epicure</a></li>
                   <li className="mb-3"> <a href="#taj" >Taj Blog</a></li>
                </ul>
                </div>
            </Col>
            <Col className="ms-3">
                <h6 className='mt-5' style={{color:'grey'}}><b>CONNECT WITH US</b></h6>
                <div className="d-flex gap-3 mt-3">
                <a href="#connect with socially"><img src={F} alt="facebook"/></a>
                <a href="#connect with socially"><img src={X} alt="twitter"/></a>
                <a href="#connect with socially"><img src={I} alt="insta"/></a>
                <a href="#connect with socially"><img src={Y} alt="youtube"/></a>
                <a href="#connect with socially"><img src={IN} alt="in"/></a>
                </div>
            </Col>
            </Row>
            <hr style={{color:'grey'}}/>
            <Col>
                <h6><b>DESTINATIONS</b></h6>
            <hr style={{color:'grey'}}/>
            </Col>
             <Col>
                <h6 className="brand text-white"><b>OUR BRANDS</b></h6>
                <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 w-100">
                    <Col lg={1}>
                    <a href="#taj"><img src={F1} alt="taj" className="img-fluid" /></a>
                    </Col>
                    <Col lg={1}>
                    <a href="#collection"><img src={F2} alt="collection" className="img-fluid" /></a>
                    </Col>
                    <Col lg={1}>
                    <a href="#sele"><img src={F3} alt="sele" className="img-fluid" /></a>
                    </Col>
                    <Col lg={1}>
                    <a href="#gateway"><img src={F4} alt="gateway" className="img-fluid" /></a>
                    </Col>
                    <Col lg={1}>
                    <a href="#vivanta"><img src={F5} alt="vivanta" className="img-fluid" /></a>
                    </Col>
                    <Col lg={1}>
                    <a href="#ginger"><img src={F6} alt="ginger" className="img-fluid" /></a>
                    </Col>
                    <Col lg={1}>
                    <a href="#life"><img src={F7} alt="life" className="img-fluid" /></a>
                    </Col>
                    <Col lg={1}>
                    <a href="#trails"><img src={F8} alt="trails" className="img-fluid" /></a>
                    </Col>
                    <Col >
                    <a href="#min"><img src={F9} alt="min" className="img-fluid" /></a>
                    </Col>
                    <Col >
                    <a href="#tajstats"><img src={F10} alt="tajstats" className="img-fluid" /></a>
                    </Col>
                </div>
                <hr style={{color:'grey'}}/>
            </Col>
            <Col>
                <Row>
                    <Col lg={6}>
                        <span className="text-white" style={{fontSize:'11px',fontFamily:'sans-serif'}}>© 2025 The Indian Hotels Company Limited. All Rights Reserved.</span>
                    </Col>
                    <Col lg={6} className="cor">
                        <a href="#corporate">Corporate</a>
                        <a href="#pressroom">Pressroom</a>
                        <a href="#pressroom">Work With Us</a>
                        <a href="#pressroom">Terms of Service</a>
                        <a href="#pressroom" >Best Rate Guarantee FAQ</a>
                        <a href="#pressroom">Accessibility</a>
                        <a href="#pressroom">Investor Relations</a>
                        <a href="#pressroom">Partners</a>
                        <a href="#pressroom">Privacy Policy</a>
                        <a href="#pressroom" style={{border:'none'}}>Cookies Policy</a>
                    </Col>
                </Row>
            </Col>
        </Container>
        </Container>
        </>
    );
}
export default Footer;