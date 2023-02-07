import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from "./NavMenu";
import Login from "./Login";
import AdminScreen from "./AdminScreen";


const App = () => {
  return (
    <BrowserRouter>

<header>
<NavMenu/>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminScreen />} />
     
      </Routes>


      
      <footer className="site-footer">
      <div className="container">
        <div className="footerRow">
          <div className="location">
            <h6>Our Location</h6>
            <p className="text-justify">
              3C, Hansalya Building
            </p>
            <p className="text-justify">
              Cannought Place, Outer Circle
            </p>
            <p className="text-justify">
              CP, New Delhi-110001
            </p>
          </div>

         

          <div className="links">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="#aboutUs">About Us</a></li>
              <li><a href="#certificate">Caertificate</a></li>
              
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      

        <p style={{marginLeft:"100px"}}>Copyright © 2023</p>
      </footer>


    </BrowserRouter>
  );
};

export default App;