
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { serverUrl } from '../services/serverUrl';
import { Col, Row } from 'react-bootstrap';
import { editProfileApi } from '../services/allApi';
import { useNavigate } from 'react-router-dom';





function EditProfile() {
    const navigate = useNavigate()
    const [userDetails, setUserDetails] = useState({
      username:"",
      email:"", 
      password:"", 
      profile:""
  
    })
   {/* const [existingImage, setExistingImage] = useState("") 
    const [preview, setPreview] = useState("") */}
    const [editstatus, setEditStatus] = useState(false)
  
  
   {/* const handleProfileFile = (e)=>{
      e.preventDefault()
      setUserDetails({...userDetails,profile:e.target.files[0]})
    }*/}
  
    console.log(userDetails);
    {/*console.log(preview);*/}
    
    
  
    {/*useEffect(()=>{
      if(userDetails.profile){
        setPreview(URL.createObjectURL(userDetails.profile))
      }
      else{
        setPreview("")
      }
    },[userDetails.profile])*/}
  
  
  
  
    useEffect(()=>{
      if(sessionStorage.getItem("existingUser")){
        const user = JSON.parse(sessionStorage.getItem("existingUser"))
        setUserDetails({...userDetails,username:user.username,email:user.email,password:user.password})
       {/* setExistingImage(user.profile)*/}
      }
      setEditStatus(false)
    },[editstatus])
  
  
    const handleProfileUpdate = async()=>{
      const {username,email,password} = userDetails
      if(!username || !email || !password){
        toast.info("please fill the input fields")
      }
      else{
        const reqBody = new FormData()
  
        reqBody.append("username",username)
        reqBody.append("email",email)
        reqBody.append("password",password)
        {/*profile?reqBody.append("profile",profile):reqBody.append("profile",existingImage)*/}
  
  
        const token = sessionStorage.getItem("token")
  
       {/* if(preview){
          const reqHeader = {
            "Content-Type":"multipart/form-data",
            "Authorization":`Bearer ${token}`
          }
          
          
          const result = await editProfileApi(reqBody,reqHeader)
          console.log('inside preview');
          console.log(result);
          if(result.status===200){
            toast.success('Profile updated successfully')
            sessionStorage.setItem("existingUser",JSON.stringify(result.data))
            setEditStatus(true)
            setTimeout(()=>{
                navigate('/')},
             2000)
          }else{
            toast.error('something went wrong')
          }
        }
        else{*/}
          const reqHeader = {
            "Content-Type":"application/json",
            "Authorization":` Bearer ${token}`
          }
          const result = await editProfileApi(reqBody,reqHeader)
          console.log(result);
          if(result.status==200){
            toast.success('Profile updated successfully')
            sessionStorage.setItem("existingUser",JSON.stringify(result.data))
            setEditStatus(true)
            setTimeout(()=>{
                navigate('/')},
             2000)
          }else{
            toast.error('something went wrong')
          }
        {/*}*/}
  
      }
    }
  
  
  console.log(open);
  return (
    <>
    <Header/>
   <Row>
    <Col md='3'></Col>
    <Col md='6'>
    <div className='mx-3 p-5 shadow rounded mt-4'  >
    <div className='d-flex justify-content-between mt-3'>
      <h4 className='text-success'>Profile</h4>
      
      
    </div>
   
  
   
   <div>
   <div className='d-flex justify-content-center align-items-center flex-column'>
    {/* <label htmlFor="profileImg">
     <input id='profileImg' type="file" style={{display:'none'}} onChange={(e)=>handleProfileFile(e)}/>
     {existingImage==""?
      <img src={preview?preview:"https://cdn-icons-png.flaticon.com/512/1160/1160358.png"} alt="no image" style={{width:'170px',height:'170px',borderRadius:'50%'}}/>
     :
     <img src={preview?preview:`${serverUrl}/uploads/${existingImage}`} alt="no image" style={{width:'170px',height:'170px',borderRadius:'50%'}}/>}
     </label>*/}


     <form className='mt-4 w-100'>
      <div className='mb-3'>
        <input type="text" className='form-control' placeholder='username' value={userDetails.username} onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})}/>

      </div>
      <div className='mb-3'>
        <input type="text" className='form-control' placeholder='email' value={userDetails.email} onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}/>

      </div>
      
      <div className='mb-3'>
        <button type='button' className='btn btn-success w-100' onClick={handleProfileUpdate}>Update</button>

      </div>

     </form>
    </div>
   </div>
    
   


  </div></Col>
    <Col md='3'></Col>
   </Row>
  <ToastContainer position='top-center' theme='colored' autoClose={2000}/>

  </>
    
  )
}

export default EditProfile