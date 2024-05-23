import React from 'react'
import {Container, Col, Row, Navbar, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faFacebook, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import logo from "./../../assets/image/logo.svg"
import "./Footer.css"


function Footer() {
  return (
    <footer className='d-flex'>
        <Container>
            <Row>
                <Col className='d-flex align-items-center'>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="logo" />
                    </Navbar.Brand>
                </Col>
                <Col className='d-flex justify-content-end'>
                    <div className="navbar-text">
                        <div className="social-icon">
                        <Nav.Link className="icon" href="https://www.facebook.com/profile.php?id=61556157676426"><FontAwesomeIcon  icon={faFacebook} /></Nav.Link>
                        <Nav.Link className="icon" href="https://www.instagram.com/yehea__sh/"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
                        <Nav.Link className="icon" href="+972569353191"><FontAwesomeIcon icon={faWhatsapp} /></Nav.Link>
                        </div>
                        <p className='mt-3'> Copyright © 2024 | Desing By <span>Yehea Shorafa</span></p>
                    </div> 
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer
