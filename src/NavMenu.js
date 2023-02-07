

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import companyLogo from './IMG.png';

const NavMenu = () => {

    const location = useLocation()
    

    return (

<Navbar bg="light" expand="lg">
      <Container>
        <Link to="/">

      <img src={companyLogo} alt="Company Logo" className="logo"/>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link className={[location.pathname==="/about" ?"active":"navLink" ] } to="/about">About Us</Link>
          <Link className={location.pathname==="/contact" ?"active":"navLink"} to="/contact">Contact</Link>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )}



export default NavMenu;
