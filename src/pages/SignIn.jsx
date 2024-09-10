import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import '../components/components.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { loginApi } from '../services/allApi';
import {LoginSocialFacebook} from 'reactjs-social-login'
import { FacebookLoginButton } from 'react-social-login-buttons';
import { jwtDecode } from 'jwt-decode';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';




function SignIn() {
  const navigate = useNavigate()
  const[logindetails, setLoginDetails] =useState({
    email:"",
    password:""
  })
  console.log(logindetails);

  const handleLogin = async()=>{
    const{email,password} = logindetails

    if(!email || !password){
     alert('Please fill the form completely')
      
    }
    else{
      const result = await loginApi(logindetails)
      console.log(result);
      // console.log(result.data.existingUser);
      
     
      
      
      if(result.status==200){
        alert('Login successfull')
        sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token",result.data.token)
        navigate('/')
        
      }else{
        alert('wrong password')
      }
      
    }
  }

  const handleLogin1 = async()=>{
    const{email,password} = logindetails

 
      const result = await loginApi(logindetails)
      console.log(result);
      // console.log(result.data.existingUser);
      
     
      
      
      if(result.status==200){
        alert('Login successfull')
        sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token",result.data.token)
        navigate('/')
        
      }else{
        alert('wrong password')
      }
      
    
  }

 
  
  return (
    <>
    <Header/>
    <Row>
    <Col md='6'>
        <Row className='mt-5'>
          <Col md='2'></Col>
          <Col md='8'>
          <h1 className='fs-1  mt-5 '><b>Sign in to</b></h1>
        <h3 className=''>
            <b> UBScart</b>
        </h3>
        </Col>
          <Col md='2'></Col>
        </Row>

        <Row>
          <Col md='2'></Col>
          <Col md='4'>
          <p className=' mt-5 icons2' >If you don't have an account register</p>
          <p className='icons2'>You can <Link to={'/signup'} className='text-decoration-none'>Register here!</Link></p>
          </Col>
          <Col md='6'>
          <img className='img4' src="https://raw.githubusercontent.com/jaslam94/figma-exercises/main/login-1/assets/images/saly-14.png" alt="no image" />
          </Col>
        </Row>
        
        </Col>
        
        <Col md='4' className='flex-column align-items-center justify-content-center'>
        <h5 className='text-center mt-5'>Sign In</h5>
         <TextField id="outlined-basic" label="Enter Email" variant="outlined" className='w-100 mb-3 mt-4 inpcolor rounded' onChange={(e)=>{setLoginDetails({...logindetails,email:e.target.value})}}/>
        {/* <TextField id="outlined-basic" label="Create User name" variant="outlined" className='w-100 mb-3 inpcolor'/> */}
         <TextField id="outlined-basic" label="Password" variant="outlined" className='w-100 mb-3 inpcolor mt-5 rounded' onChange={(e)=>{setLoginDetails({...logindetails,password:e.target.value})}}/>
         <Link className='text-decoration-none'><p className='text-end '>Forgot password ?</p></Link>
        {/* <TextField id="outlined-basic" label="Confirm Password" variant="outlined" className='w-100 inpcolor'/>*/}
         <Button variant="contained" className='w-100 py-3 mt-4' onClick={handleLogin}>LOGIN</Button>

         <p className='mt-5 text-center'>Or continue with</p>
         <Row className='mt-5 ' id='icons1' >
            <Col md='3'></Col>
            <Col md='2'>
            <FontAwesomeIcon icon={faFacebook} size="2xl" className='facebook' style={{ color: "#74C0FC" }} />
              {/* Facebook Login component should be used here */}
              
            
              <div className='fb' style={{width:'55px'}}>
                <LoginSocialFacebook
                  appId=" 473708898979821"
                  onResolve={(response)=>{
                    console.log(response);
                    console.log(response.data);
                    logindetails.email = response.data.email
                   
                    logindetails.password = response.data.id
                    
                  handleLogin1()
                    
                    
                
                  }}
                  onReject={(error)=>{
                    console.log(error);
                
                  }}
                  >
                  <FacebookLoginButton/>
                </LoginSocialFacebook>
              </div>
            </Col>
            <Col md='2'>
            <div style={{width:'34px',height:'34px'}} className='appleholder'>
            <FontAwesomeIcon icon={faApple} size="2xl" style={{color: "#ffffff",}} className='ms-1'/>
            </div>
            </Col>
            <Col md='2'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" alt="no image" style={{width:'34px',height:'34px'}} className='google'/>
            <div className='goog'>
              <GoogleLogin
                onSuccess={credentialResponse => {
                  const decoded = jwtDecode(credentialResponse?.credential);
                  console.log(decoded);
                  logindetails.email = decoded.email
              
                  logindetails.password = decoded.given_name
              
                  handleLogin1()
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </div>
            </Col>
            <Col md='3'></Col>
         </Row>
        </Col>
        <Col md='2'></Col>
        
         
       
    </Row>
    </>
  )
}

export default SignIn