
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className=" text-white py-2 bg-black" style={{bottom:0}}>
      <Container>
        <Row className="mb-4 mt-1">
        
          <Col md={3} className='px-4'>
          <h5 className='mt-4 text-primary'>POPULAR LOCATIONS</h5>
          <ul className="list-unstyled mt-4" >
              <li>
                <Link className="text-light" style={{textDecoration:'none'}}>Kolkatta</Link>
              </li>
              <li>
                <Link  className="text-light" style={{textDecoration:'none'}}>Chennai</Link>
              </li>
              <li>
                <Link  className="text-light" style={{textDecoration:'none'}}>Mumbai</Link>
              </li>
              <li>
                <Link className="text-light" style={{textDecoration:'none'}}>Pune</Link>
              </li>
              
            </ul>
          </Col>

  
          <Col md={3}  className='px-4' >
            <h5 className='mt-4 text-primary'>TRENDING LOCATIONS</h5>
            <ul className="list-unstyled mt-4" >
              <li>
                <Link  className="text-light" style={{textDecoration:'none'}}>Ernakulam</Link>
              </li>
              <li>
                <Link  className="text-light" style={{textDecoration:'none'}}>Thrissur</Link>
              </li>
              <li>
                <Link  className="text-light" style={{textDecoration:'none'}}>Kottayam</Link>
              </li>
              <li>
                <Link  className="text-light" style={{textDecoration:'none'}}>Idukki</Link>
              </li>
              
            </ul>
          </Col>


          <Col md={3} className='px-4'>
            <h4 className='mt-4 text-primary'>Follow Us</h4>
            <div className="d-flex flex-column mt-4" >
              <a  className="text-light mb-2" style={{textDecoration:'none'}}>
                <FontAwesomeIcon icon={faFacebook} size="md"  /> Facebook
              </a>
              <a  className="text-light mb-2" style={{textDecoration:'none'}}>
                <FontAwesomeIcon icon={faInstagram} size="md" /> Instagram
              </a>
              <a  className="text-light mb-2" style={{textDecoration:'none'}}>
                <FontAwesomeIcon icon={faTwitter} size="md" /> Twitter
              </a>
              <a  className="text-light" style={{textDecoration:'none'}}>
                <FontAwesomeIcon icon={faLinkedin} size="md" /> LinkedIn
              </a>
            </div>
          </Col>

          <Col md={3} className='px-4'>
            <h4 className='mt-4 text-primary'>UBScart</h4>
            <div className="d-flex flex-column mt-4" >
              <a  className="text-light mb-2" style={{textDecoration:'none'}}>
               Contact Us
              </a>
              <a  className="text-light mb-2" style={{textDecoration:'none'}}>
                 Privacy Information
              </a>
              <a className="text-light mb-2" style={{textDecoration:'none'}}>
                Legal Information
              </a>
              
            </div>
          </Col>

     
          
        </Row>

        <Row>
          <Col className="text-center">
            <p className="mb-0 text-secondary">© 2024 UBScart. All rights reserved.</p>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;




