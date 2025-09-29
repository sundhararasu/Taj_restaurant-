import Footer from '../footers/footer.js';
import Off from '../images/offe.webp';
import '../offer/offer.css';
import Container from 'react-bootstrap/esm/Container.js';
import Row from 'react-bootstrap/esm/Row.js';
import Col from 'react-bootstrap/esm/Col.js';
import off1 from '../images/off1.avif';
import off2 from '../images/off2.webp';
import off3 from '../images/off3.webp';
import off4 from '../images/off4.webp';
import off5 from '../images/off5.avif';
import off6 from '../images/off6.avif';
import off7 from '../images/off7.avif';
import off8 from '../images/off8.avif';
import Bottom from '../end/bottom.js';
function Offers(){
        return(
            <>
                <img src={Off} alt='offers' className='img-fluid'/>
                <div className="d-flex mt-5 align-items-center justify-content-center">
                    <hr className='re'/>
                    <span className="p-md-4 text-center r fs-1">MEMBER RATES</span>
                    <hr className='re'/>
                </div>
                <Container>
                    <Row>
                        <Col md={6} className=''>
                            <img src={off1} alt='festival' className='img-fluid'/>
                            <div className='fes bg-white ms-3 me-3 p-3'>
                            <h3  className=' ' style={{fontSize:'15px',textTransform:'uppercase',fontFamily:'Cinzel, "Palatino Linotype", sans-serif;'}}>Festivals of India – Members-only Festive Stays</h3>
                            <p>Festivities, in their finest form, are an art — expressed through thoughtful gestures, graceful settings and the quiet joy of coming together. This season, step into stays where every detail is crafted to delight and every gathering becomes a cherished memory.</p>
                            <button type='btn' className='p-2' style={{backgroundColor:'#ad8b3a',width:'150px',border:'none',color:'white'}}>LOGIN/JOIN</button>
                            </div>
                        </Col>
                        <Col md={6} className=''>
                            <img src={off2} alt='festival' className='img-fluid'/>
                            <div className='fes bg-white ms-3 me-3 p-3'>
                            <h3  className=' ' style={{fontSize:'15px',textTransform:'uppercase',fontFamily:'Cinzel, "Palatino Linotype", sans-serif;'}}>Limited Period Escapes</h3>
                            <p>Wake up to a magical sunrise under clear skies, unwind in the embrace of nature, or rediscover romance in the charming bylanes of a metropolis. Discover unforgettable experiences with the Limited Period Escapes Offer.</p>
                            <button type='btn' className='p-2' style={{backgroundColor:'#ad8b3a',width:'150px',border:'none',color:'white'}}>LOGIN/JOIN</button>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-5'>
                        <Col md={6} >
                            <img src={off3} alt='festival' className='img-fluid'/>
                            <div className='fes bg-white ms-3 me-3 p-3'>
                            <h3  className=' ' style={{fontSize:'15px',textTransform:'uppercase',fontFamily:'Cinzel, "Palatino Linotype", sans-serif;'}}>Suite Surprises - Member Only</h3>
                            <p>Indulge in a stay that goes beyond the ordinary and experience enhanced comfort, added space, thoughtful touches and unparalleled extravagance with our special package for suites.</p>
                            <button type='btn' className='p-2' style={{backgroundColor:'#ad8b3a',width:'150px',border:'none',color:'white'}}>LOGIN/JOIN</button>
                            </div>
                        </Col>
                        <Col md={6} className=''>
                            <img src={off4} alt='festival' className='img-fluid'/>
                            <div className='fes bg-white ms-3 me-3 p-3'>
                            <h3  className=' ' style={{fontSize:'15px',textTransform:'uppercase',fontFamily:'Cinzel, "Palatino Linotype", sans-serif;'}}>New Beginnings</h3>
                            <p>Indulge the explorer in you and set out to discover our newest hotels and novel experiences. Enjoy exclusive 20% savings on breakfast-inclusive rates and celebrate new beginnings with us.</p>
                            <button type='btn' className='p-2' style={{backgroundColor:'#ad8b3a',width:'150px',border:'none',color:'white'}}>LOGIN/JOIN</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="d-flex mt-5 align-items-center justify-content-center">
                    <hr className='re'/>
                    <span className="p-md-4 text-center r fs-1">EXCLUSIVE OFFERS</span>
                    <hr className='re'/>
                </div>
                <Container>
                    <Row>
                        <Col md={6} className=''>
                            <img src={off5} alt='festival' className='img-fluid'/>
                            <div className='fes bg-white ms-3 me-3 p-3'>
                            <h3  className=' ' style={{fontSize:'15px',textTransform:'uppercase',fontFamily:'Cinzel, "Palatino Linotype", sans-serif;'}}>Stay A Bit Longer - Room only</h3>
                            <p>Experience an extraordinary stay with our exclusive package crafted to reward those who opt to prolong their stay with us. Indulge in our hospitality for a minimum of three nights and enjoy remarkable discounts on your accommodation and delectable food and soft beverages.</p>
                            <button type='btn' className='p-2' style={{backgroundColor:'#ad8b3a',width:'150px',border:'none',color:'white'}}>LOGIN/JOIN</button>
                            </div>
                        </Col>
                        <Col md={6} className=''>
                            <img src={off6} alt='festival' className='img-fluid'/>
                            <div className='fes bg-white ms-3 me-3 p-3'>
                            <h3  className=' ' style={{fontSize:'15px',textTransform:'uppercase',fontFamily:'Cinzel, "Palatino Linotype", sans-serif;'}}>Soulful Abodes</h3>
                            <p>Reconnect with your spirit, awaken your inner wisdom and discover a deeper sense of peace with Soulful Abodes. Embark on your very own transformative journey across India’s 50+ transcendent destinations, as you enjoy benefits crafted mindfully for the spiritual traveller in you.</p>
                            <button type='btn' className='p-2' style={{backgroundColor:'#ad8b3a',width:'150px',border:'none',color:'white'}}>LOGIN/JOIN</button>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-5'>
                        <Col md={6} >
                            <img src={off7} alt='festival' className='img-fluid'/>
                            <div className='fes bg-white ms-3 me-3 p-3'>
                            <h3  className=' ' style={{fontSize:'15px',textTransform:'uppercase',fontFamily:'Cinzel, "Palatino Linotype", sans-serif;'}}>Dream. Drive. Discover. Delight. (4D)</h3>
                            <p>Drive away to enjoy the company of your loved ones and spend unforgettable moments in our exemplary care, with all meals included.</p>
                            <button type='btn' className='p-2' style={{backgroundColor:'#ad8b3a',width:'150px',border:'none',color:'white'}}>LOGIN/JOIN</button>
                            </div>
                        </Col>
                        <Col md={6} className=''>
                            <img src={off8} alt='festival' className='img-fluid'/>
                            <div className='fes bg-white ms-3 me-3 p-3'>
                            <h3  className=' ' style={{fontSize:'15px',textTransform:'uppercase',fontFamily:'Cinzel, "Palatino Linotype", sans-serif;'}}>Stay A Bit Longer - Breakfast Inclusive</h3>
                            <p>Embark on an unforgettable journey with our exclusive stay package designed to reward those who choose to extend their sojourn with us. </p>
                            <button type='btn' className='p-2' style={{backgroundColor:'#ad8b3a',width:'150px',border:'none',color:'white'}}>LOGIN/JOIN</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className='mt-5'>
                <Bottom/>
                <Footer/>
                </div>
            </>
        );
}
export default Offers;