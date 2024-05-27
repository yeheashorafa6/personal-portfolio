import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faFacebook, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from "react";
import "./Header.css";
import logo from "./../../assets/image/logo.svg"



function Hrader() {

  // STATE

  const [activeLink , setActiveLink] = useState("home");
  const [scrolled , setScrolled] = useState(false);

  // == STATE ==

  // USE EFFECT

  useEffect(() => {
    const onScrolled = () => {
      if (window.scrollY > 60) { // Corrected window.scrollY here
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  
    window.addEventListener('scroll', onScrolled);
    return () => window.removeEventListener('scroll', onScrolled);
  }, []);

  // == USE EFFECT ==

  // FUNCTIONS 
  const onUpdateActiveLink = (link) =>{
    setActiveLink(link)
  }


  // == FUNCTIONS ==


  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? "active" : ""} onClick={() =>{onUpdateActiveLink("home")}}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "skills" ? "active" : ""} onClick={() =>{onUpdateActiveLink("skills")}}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === "projects" ? "active" : ""} onClick={() =>{onUpdateActiveLink("projects")}}>Projects</Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <Nav.Link className="icon" href="https://www.facebook.com/profile.php?id=61556157676426"><FontAwesomeIcon  icon={faFacebook} /></Nav.Link>
              <Nav.Link className="icon" href="https://www.instagram.com/yehea__sh/"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
              <Nav.Link className="icon" href="+972569353191"><FontAwesomeIcon icon={faWhatsapp} /></Nav.Link>
            </div>
            <button className="btn" onClick={() =>{console.log("Connected")}}>
                <span>
                    Let’s Connect
                </span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Hrader;
