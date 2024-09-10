import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import '../components/components.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { registerApi } from '../services/allApi';
import {LoginSocialFacebook} from 'reactjs-social-login'
import { FacebookLoginButton } from 'react-social-login-buttons';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';










function SignUp() {
  const navigate= useNavigate()
  //creating state to hold data from input fields
  const[inputdata, setInputData]= useState({
    email:"",
    username:"",
    password:""
    
    

  })
  const[cpassword,setCPswd] = useState("")
  //const[confirmpswd, setConfirmPswd] = useState(false)
  console.log(inputdata);
  console.log(cpassword);
  

  const registerhandle = async()=>{
    const{email,username,password} = inputdata
    

    if(!email || !username || !password ||!cpassword){
      alert('Please fill the form completely')
    }
    else{
    if(password == cpassword){
       console.log('password matches successfully');
       alert('Password Matches Successfully')
       const result = await registerApi(inputdata)
       console.log(result);
      if(result.status==200){
       alert('Registration successfull')
       navigate('/signin')
      }else{
       alert('Registration failed')
      }
       

       
    }
    else{
      console.log('password not matching');
      alert('Password not matching')
    }
  }

  }

  const registerhandle1 = async()=>{
    const{email,username,password} = inputdata
    

    
       const result = await registerApi(inputdata);
       console.log(result);
      if(result.status==200){
       alert('Registration successfull')
       navigate('/signin')
      }else{
       alert('Registration failed')
      }
       

       
    
   
  };

  

  //facebook login
  
  useEffect(() => {
    window.fbAsyncInit = function() {
      FB.init({
        appId: '473708898979821', // Replace with your app ID
        cookie: true,
        xfbml: true,
        version: 'v15.0'
      });
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  

  

  return (
    <>
    <Header/>
    <Row className='bg-black'>
        <Col md='2'></Col>
        <Col md='4' className='flex-column align-items-center justify-content-center'>
        <h5 className='text-center mt-5'>Sign Up</h5>
         <TextField id="outlined-basic" label="Enter Email" variant="outlined" className='w-100 mb-3 mt-4 inpcolor rounded' onChange={(e)=>setInputData({...inputdata,email:e.target.value})}/>
         <TextField id="outlined-basic" label="Create User name" variant="outlined" className='w-100 mb-3 inpcolor rounded' onChange={(e)=>setInputData({...inputdata,username:e.target.value})}/>
         <TextField id="outlined-basic" label="Password" variant="outlined" className='w-100 mb-3 inpcolor rounded' onChange={(e)=>setInputData({...inputdata,password:e.target.value})}/>
         <TextField id="outlined-basic" label="Confirm Password" variant="outlined" className='w-100 inpcolor rounded' onChange={(e)=>setCPswd(e.target.value)} />
         <Button variant="contained" className='w-100 py-3 mt-3' id='buttn' onClick={registerhandle}>Register</Button>

         <p className='mt-5 text-center'>Or continue with</p>
         <Row className='mt-5' id='icons1'>
            <Col md='3'></Col>
            <Col md='2'>
            <FontAwesomeIcon icon={faFacebook} size="2xl" className='facebook' style={{color: "#74C0FC",}} />
            {/*Facebook Login */}
            <div className='fb' style={{width:'55px'}}>
                <LoginSocialFacebook
                  appId=" 473708898979821"
                  onResolve={(response)=>{
                    console.log(response);
                    console.log(response.data);
                    inputdata.email = response.data.email
                    inputdata.username = response.data.name
                    inputdata.password = response.data.id
                    setCPswd(response.data.id)
                    registerhandle1()
                    
                
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
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
                alt="Google Logo"
                style={{ width: '34px', height: '34px' }}
                className='google'
              />
              <div className='goog'>
                {/* GoogleLogin component should be used here */}
                <GoogleLogin
                onSuccess={credentialResponse => {
                  const decoded = jwtDecode(credentialResponse?.credential);
                  console.log(decoded);
                  inputdata.email = decoded.email
                  inputdata.username = decoded.name
                  inputdata.password = decoded.given_name
                  setCPswd(decoded.given_name)
                  registerhandle1()
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
        
         
        <Col md='6'>
        <Row>
          <Col md='2'></Col>
          <Col md='8'>
          <h1 className='fs-1  mt-5'><b>Sign Up to</b></h1>
        <h3 className=''><b>UBScart</b></h3>
        </Col>
          <Col md='2'></Col>
        </Row>

        <Row>
          <Col md='2'></Col>
          <Col md='4'>
          <p className=' mt-5 icons2' >If you already have an account</p>
          <p className='icons2'>You can <Link to={'/signin'} className='text-decoration-none'>Login here!</Link></p>
          </Col>
          <Col md='6'>
          <img className='img3' src="https://raw.githubusercontent.com/jaslam94/figma-exercises/main/login-1/assets/images/saly-14.png" alt="no image" />
          </Col>
        </Row>
        
        </Col>
    </Row>
    </>
  )
}

export default SignUp