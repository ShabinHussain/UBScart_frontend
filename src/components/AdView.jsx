import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { serverUrl } from '../services/serverUrl';
import { TextField } from '@mui/material';
import { editProductApi } from '../services/allApi';
import { editResponseContext } from '../context/DataShare';






function AdView({products,handleDelete}) {
    const [show, setShow] = useState(false);
    const[editPro, setEditPro] = useState(false)
    const [productDetails, setProductDetails] = useState({
      id: products?._id,
      price: products?.price,
      title: products?.title,
      place: products?.place,
      date: products?.date,
      description: products?.description,
      contact: products?.contact,
      email: products?.date,
      prodImage: ""
    })
    const [preview, setPreview] = useState("")
    const [key, setKey] = useState(0)
    const {setEditResponse} = useContext(editResponseContext)

    console.log(productDetails);

    const handleFile = (e)=>{
      console.log(e.target.files[0]);
      setProductDetails({...productDetails,prodImage:e.target.files[0]})
    }


    useEffect(()=>{
      if(productDetails.prodImage){
        //createObjectUrl - Method is used to convert files into urls- comes from library named url
        setPreview(URL.createObjectURL(productDetails.prodImage));
      }
    },[productDetails.prodImage])
    
  
    const handleClose1 = () => {
      setProductDetails({
        id: products?._id,
        price: products?.price,
        title: products?.title,
        place: products?.place,
        date: products?.date,
        description: products?.description,
        contact: products?.contact,
        email: products?.email,
        prodImage: ""
  
      })
      setPreview("")
      if (key == 0) {
        setKey(1)
      }
      else {
        setKey(0)
      }
    }

  
   

    const handleClose = () => {
      setShow(false);
      handleClose1()
    }
    const handleShow = () => setShow(true);


    const handleClick = () => {
      handleDelete(products?._id); // Call the handleDelete function
      handleClose(); // Call the handleClose function
    };

    const handleEdit = () =>{
      setEditPro(true)
    }

    console.log(editPro);
    


    const handleUpdate =async(e)=>{
      e.preventDefault()
  
      const{id,price, title, place, date, description,contact,email,prodImage} = productDetails
      if(!price || !title || !place || !date || !description || !contact || !email ){
        alert('please fill the form completely')
      }
      
      else{
  
        const reqBody = new FormData()
  
        reqBody.append("price",price)
        reqBody.append("title",title)
        reqBody.append("place",place)
        reqBody.append("date",date)
        reqBody.append("description",description)
        reqBody.append("contact",contact)
        reqBody.append("email",email)
       { preview?reqBody.append("prodImage",prodImage):reqBody.append("prodImage",products.prodImage) } //preview undel new illel old
  
        const token= sessionStorage.getItem("token")
  
        if(preview){ {/*if there is new image upload */}
          const reqHeader = {
            "Content-Type":"multipart/form-data",
            "Authorization":` Bearer ${token}`
          }
        const result = await editProductApi(id,reqBody,reqHeader)
        console.log(result);
        if(result.status==200){
          alert('product updated successfully')
          handleClose()
          setEditResponse(result.data)
  
  
        }else{
          alert('something went wrong')
        }
      }
  
  
        else{ {/*no new image upload */}
          const reqHeader = { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
          const result = await editProductApi(id,reqBody,reqHeader)
          console.log(result);
          if(result.status==200){
            alert('product updated successfully')
            handleClose()
            setEditResponse(result.data)
    
          }else{
            alert('something went wrong')
          }
        }
    
  
  
  
      }
    }

    useEffect(()=>{
      setEditPro(false)
    },[])
  
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
         {!editPro ? <Modal.Title>Ad Details</Modal.Title> :
          <Modal.Title>Edit Details</Modal.Title>}
        </Modal.Header>
        {!editPro ? <Modal.Body>
          <p><b>Title:</b>{products?.title}</p>
          <p><b>Price:</b>{products?.price}</p>
          <p><b>Place:</b>{products?.place}</p>
          <p><b>Date:</b>{products?.date}</p>
          <p><b>Contact:</b>{products?.contact}</p>
          <p><b>Email:</b>{products?.email}</p>
          <p><b>Description:</b>{products?.description}</p>
          <p><b><img src={`${serverUrl}/uploads/${products.prodImage}`} alt="no image" width={'250px'} height={'250px'}/></b></p>
        </Modal.Body>
        :
        <div className='px-3'>
             <div className='w-100 shadow mt-1'>
        <TextField id="outlined-basic" label="Enter Selling Price" value={productDetails.price}  variant="outlined" className='w-100  rounded bg-white' onChange={(e)=>setProductDetails({...productDetails,price:e.target.value})}/>

        </div>
        <div className='w-100 shadow mt-3'>
        <TextField id="outlined-basic" label="Enter Title" value={productDetails.title} variant="outlined" className='w-100  rounded bg-white' onChange={(e)=>setProductDetails({...productDetails,title:e.target.value})}/>

        </div>
        <div className='w-100 shadow mt-3'>
        <TextField id="outlined-basic" label="Enter Location" value={productDetails.place} variant="outlined" className='w-100  rounded bg-white' onChange={(e)=>setProductDetails({...productDetails,place:e.target.value})}/>

        </div>
        <div className='w-100 shadow mt-3'>
        <TextField id="outlined-basic" label="Enter Publishing Date" value={productDetails.date} variant="outlined" className='w-100  rounded bg-white' onChange={(e)=>setProductDetails({...productDetails,date:e.target.value})}/>

        </div>
        <div className='w-100 shadow mt-3'>
        <TextField id="outlined-basic" label="Enter Contact Number(*contact number is visible to others)" value={productDetails.contact} variant="outlined" className='w-100  rounded bg-white' onChange={(e)=>setProductDetails({...productDetails,contact:e.target.value})}/>

        </div>
        <div className='w-100 shadow mt-3'>
        <TextField id="outlined-basic" label="Enter Email Address(*visible to other users)" value={productDetails.email} variant="outlined" className='w-100  rounded bg-white' onChange={(e)=>setProductDetails({...productDetails,email:e.target.value})}/>

        </div>
        
        <div className='w-100 shadow mt-3'>
        <textarea id="outlined-basic" placeholder="Enter Description" value={productDetails.description} variant="outlined" className='w-100  rounded bg-white' onChange={(e)=>setProductDetails({...productDetails,description:e.target.value})}/>

        </div>
        <div className='w-100 shadow mt-3'>
            <p>Upload Image</p>
        <TextField id="outlined-basic" type='file' label="" variant="outlined" className='w-100  rounded bg-white' key={key} onChange={(e)=>handleFile(e)}/>
        <img src={preview ? preview : `${serverUrl}/uploads/${products.prodImage}`} alt="no image" width={'350px'} height={'300px'} className='ms-5'/>
        </div>
        </div>}
        <Modal.Footer>
          <Button variant="primary" onClick={handleEdit}>
            Edit
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
          <Button variant="danger" onClick={handleClick}>
            Delete
          </Button>
          <Button variant="secondary" onClick={handleClose}>
           Save Changes
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AdView