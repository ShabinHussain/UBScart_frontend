import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { addProductApi } from '../services/allApi';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';







function PostAd() {
  const navigate = useNavigate()
  const[productDetails, setProductDetails] = useState({
    price:"",
    title:"",
    place:"",
    date:"",
    contact:"",
    email:"",
    description:"",
    prodImage:""
  })
  const [token,setToken] = useState("")
  const [preview, setPreview] = useState("")  //to store url

  const handleFile = (e)=>{
    console.log(e.target.files[0]);
    setProductDetails({...productDetails,prodImage:e.target.files[0]})
  }

  console.log(productDetails);

  useEffect(()=>{
    if(productDetails.prodImage){
      //createObjectUrl - Method is used to convert files into urls- comes from library named url
      setPreview(URL.createObjectURL(productDetails.prodImage));
    }
  },[productDetails.prodImage])

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }
   },[])

   console.log(token);
   


   const handleAdd = async(e)=>{
    e.preventDefault()
  
    const{price, title, place, date, description,contact,email,  prodImage} = productDetails
    if(!price || !title || !place || !date || !description || !contact || !email ||  !prodImage){
      toast.info('please fill the form completely')
    }else{
      //api
      //inorder to send uploaded content use formData class
      const reqBody = new FormData()
      reqBody.append("price",price)
      reqBody.append("title",title)
      reqBody.append("place",place)
      reqBody.append("date",date)
      reqBody.append("contact",contact)
      reqBody.append("email",email)
      reqBody.append("description",description)
      reqBody.append("prodImage",prodImage)
  
      if(token){
        const reqHeader = {
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}` //to send to backend
        }
  
        const result = await addProductApi(reqBody, reqHeader)
        console.log(result);
        if(result.status==200){
          toast.success('project uploaded successfully')
         
          setTimeout(()=>{
            navigate('/')
          },2000)
  
        
        }
  
      }
      else{
        alert('please login')
      }
    }
   }

  
  return (
    <>
    <Header/>
    <Row>
        <h2 className='text-center'>Post Your Ad</h2>
    </Row>
    <Row>
        <Col md='1'></Col>
        <Col md='4'>
        <img src={preview? preview : "https://cdn-icons-png.flaticon.com/512/1185/1185202.png"} alt="no image" height={'380px'} width={'380px'} className='mt-5'/>
        </Col>
        <Col md='5'>
        <div className='w-100 shadow mt-1'>
        <TextField id="outlined-basic" label="Enter Selling Price" variant="outlined" className='w-100  rounded bg-white' onChange={(e)=>setProductDetails({...productDetails,price:e.target.value})}/>

        </div>
        <div className='w-100 shadow mt-3'>
        <TextField id="outlined-basic" label="Enter Title" variant="outlined" className='w-100  rounded bg-white' onChange={(e)=>setProductDetails({...productDetails,title:e.target.value})}/>

        </div>
        <div className='w-100 shadow mt-3'>
        <TextField id="outlined-basic" label="Enter Location" variant="outlined" className='w-100  rounded bg-white' onChange={(e)=>setProductDetails({...productDetails,place:e.target.value})}/>

        </div>
        <div className='w-100 shadow mt-3'>
        <TextField id="outlined-basic" label="Enter Publishing Date" variant="outlined" className='w-100  rounded bg-white' onChange={(e)=>setProductDetails({...productDetails,date:e.target.value})}/>

        </div>
        <div className='w-100 shadow mt-3'>
        <TextField id="outlined-basic" label="Enter Contact Number(*contact number is visible to others)" variant="outlined" className='w-100  rounded bg-white' onChange={(e)=>setProductDetails({...productDetails,contact:e.target.value})}/>

        </div>
        <div className='w-100 shadow mt-3'>
        <TextField id="outlined-basic" label="Enter Email Address(*visible to other users)" variant="outlined" className='w-100  rounded bg-white' onChange={(e)=>setProductDetails({...productDetails,email:e.target.value})}/>

        </div>
        
        <div className='w-100 shadow mt-3'>
        <textarea id="outlined-basic" placeholder="Enter Description" variant="outlined" className='w-100  rounded bg-white' onChange={(e)=>setProductDetails({...productDetails,description:e.target.value})}/>

        </div>
        <div className='w-100 shadow mt-3'>
            <p>Upload Image</p>
        <TextField id="outlined-basic" type='file' label="" variant="outlined" className='w-100  rounded bg-white' onChange={(e)=>handleFile(e)}/>

        </div>
       

        </Col>


    </Row>
    <Row>
    <div className='w-100  mt-3 d-flex align-items-center justify-content-center'>
            <Button type='button' onClick={handleAdd}>Submit Ad</Button>

        </div>
    </Row>
    <ToastContainer position='top-center' theme='colored' autoClose={2000}/>

    </>
  )
}

export default PostAd