import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { serverUrl } from '../services/serverUrl';
import { allProductApi } from '../services/allApi';








function Cardview({products}) {
  const [show, setShow] = useState(false);

 

  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <Card style={{ width: '280px',height:'320px' }}>
      <Card.Img variant="top" src={`${serverUrl}/uploads/${products.prodImage}`} height={'150px'} />
      <Card.Body className='res2'>
        <Card.Title>Rs.{products?.price}</Card.Title>
        <Card.Text>
          {products?.title}
        </Card.Text>
        <Card.Text>
          <Row>
            <Col md='5'>
            <Card.Text>
            {products?.place}
            </Card.Text>
            </Col>
            <Col md='3'>
            <Card.Text>
            {products?.date}
            </Card.Text>

            </Col>
            <Col md='3'>
            <Card.Text>
             <Button onClick={handleShow}>
              More
             </Button>
            </Card.Text>

            </Col>
           {/* <Col md='1'>
            <Card.Text>
            <FontAwesomeIcon icon={faHeart} size="xl" />
            </Card.Text>

            </Col>*/}
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ad Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><b>Title:</b>{products?.title}</p>
          <p><b>Price:</b>{products?.price}</p>
          <p><b>Place:</b>{products?.place}</p>
          <p><b>Date:</b>{products?.date}</p>
          <p><b>Contact:</b>{products?.contact}</p>
          <p><b>Email:</b>{products?.email}</p>
          <p><b>Description:</b>{products?.description}</p>
          <p><b><img src={`${serverUrl}/uploads/${products.prodImage}`} alt="no image" width={'250px'} height={'250px'}/></b></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Cardview