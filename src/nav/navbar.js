import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Taj from '../images/taj_logo.webp';
import {Link} from "react-router-dom";
import Offers from '../offer/offers.js';
import Home from '../home.js'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
function AppBar() {
  return (
    <Router>
    <Navbar expand="lg">
      <Container fluid>
        <img className='ms-4' src={Taj} alt='logo'/>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-lg-5 gap-xl-5 gap-md-2 w-100 p-2 hom'>
            <Nav.Link disabled >DESTINATIONS</Nav.Link>
            <Nav.Link disabled>HOTELS</Nav.Link>
            <Nav.Link disabled>DINING</Nav.Link>
            <Nav.Link as={Link} to="/Offers">OFFERS</Nav.Link>
            <Nav.Link disabled>MEMBERSHIPS</Nav.Link>
            <Nav.Link disabled>MORE</Nav.Link>
            <Nav.Link disabled >LOGIN / JOIN</Nav.Link>
            <button style={{backgroundColor:'#ad8b3a',border:'none',color:'white',width:'150px'}}>BOOK A STAY</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Offers" element={<Offers/>}/>
      </Routes>
    </Router>

  );
}

export default AppBar;