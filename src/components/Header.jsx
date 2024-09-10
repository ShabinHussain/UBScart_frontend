import { faArrowRightFromBracket, faBell, faCircleDown, faCircleQuestion, faClipboard, faGear, faHeart, faMagnifyingGlass, faMessage, faRightToBracket, faTableColumns, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../components/components.css'
import { Link, useNavigate } from 'react-router-dom';



function Header({searchKey , searchKey2}) {
    const navigate= useNavigate()
    const [place, setPlace] = React.useState('');
    const[user1, setUser1]= useState("")



    const handleChange = (e) => {
        const selectedPlace = e.target.value
        setPlace(selectedPlace)
        
      if(selectedPlace==10){
        searchKey("Ernakulam")

      }
      else if(selectedPlace == 20){
        searchKey("Thrissur")

      }
      else if(selectedPlace==30){
        searchKey("Thiruvananthapuram")

      }
    };

    const tokenlogin = sessionStorage.getItem('token')
    console.log(tokenlogin);

    const handleLogout = () => {
        sessionStorage.removeItem("existingUser");
        sessionStorage.removeItem("token");
        navigate('/'); // Redirect to login or homepage
      };




    

    useEffect(()=>{
        if(sessionStorage.getItem("existingUser")){
          setUser1(JSON.parse(sessionStorage.getItem("existingUser")).username)
        }
      },[])

      

    return (
        <>
            <Navbar expand="lg" className="bg-black navv res5">
                <Container >
                    <Navbar.Brand href="#home"><Link to={'/'}><img src="/logo.png" alt="no image" height={'30px'} className='shadow rounded' /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto bg-white">
                            {/*<Nav.Link href="#home" className='t3'>
                                <FormControl  sx={{
                                    '& > :not(style)': { m: 1 },
                                }} className='t3'>
                                    <InputLabel id="demo-simple-select-label">Location</InputLabel>
                                    <Select 
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={place}
                                        label="Place"
                                        onChange={(e)=>handleChange(e)}

                                    >
                                        <MenuItem value={10} >Ernakulam</MenuItem>
                                        <MenuItem value={20} type='button' onClick={()=>searchKey2("Thrissur")}>Thrissur</MenuItem>
                                        <MenuItem value={30}>Thiruvananthapuram</MenuItem>
                                    </Select>
                                </FormControl>
                            </Nav.Link>*/}
                            <Nav.Link href="#link" className='d-flex'>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1 },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                    className='t2'
                                >
                                    <TextField id="outlined-basic" label="Find Cars, Mobile Phones and More..." variant="outlined" className='t2' onChange={(e)=>searchKey(e.target.value)}/>


                                </Box>
                                <Button className='ht mt-2 pe-4'><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>

                            </Nav.Link>
                            <Nav.Link href="#link" className='t4 res4'>
                                <FontAwesomeIcon icon={faMessage} size='2xl' className='mt-3 ms-4' />
                            </Nav.Link>
                            <NavDropdown title={<FontAwesomeIcon icon={faUser} size="2xl" />} id="basic-nav-dropdown" className='t5 res3'>
                             {!tokenlogin &&
                              <div>
                                  <NavDropdown.Item href="#action/3.1" >
                                    <Link className='text-decoration-none text-white' to={'/signin'}>
                                        <Row>
                                            <Col md='4'><FontAwesomeIcon icon={faRightToBracket} size="2xl" /></Col>
                                            <Col md='8'><Button style={{width:'85px'}}>LOGIN</Button></Col>
                                        </Row>
                                    </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item >
                                    <Link className='text-decoration-none text-white' to={'/signup'}>
                                        <Row>
                                            <Col md='4'><FontAwesomeIcon icon={faUserPlus} size="2xl" /></Col>
                                            <Col md='8'><Button>SIGNUP</Button></Col>
                                        </Row>
                                    </Link>
                                    </NavDropdown.Item>
                              </div> }
                                
                               {tokenlogin && <div>
                                   <NavDropdown.Item  >
                                    <Link className='text-decoration-none text-white'>
                                        <Row>
                                            <Col><FontAwesomeIcon icon={faUser} size="2xl" /></Col>
                                            <Col>{user1}</Col>
                                        </Row>
                                    </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        <Button><Link className='text-white text-decoration-none' to={'/editprofile'}>View and Edit Profile</Link></Button>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">
                                    <Link className='text-decoration-none text-white'>
                                        <Row>
                                            <Col><FontAwesomeIcon icon={faHeart} size="lg" /></Col>
                                            <Col><Link to={'/myads'} className='text-decoration-none text-white'>My ADS</Link></Col>
                                        </Row>
                                    </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">
                                    <Link className='text-decoration-none text-white'>
                                        <Row>
                                            <Col><FontAwesomeIcon icon={faClipboard} size="lg" /></Col>
                                            <Col><Link to='/postad' className='text-decoration-none text-white'>Post Ad</Link></Col>
                                        </Row>
                                    </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">
                                    <Link className='text-decoration-none text-white'>
                                        <Row>
                                            <Col><FontAwesomeIcon icon={faTableColumns} size="lg" /></Col>
                                            <Col>Packages, Billing</Col>
                                        </Row>
                                    </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">
                                    <Link className='text-decoration-none text-white'>
                                        <Row>
                                            <Col><FontAwesomeIcon icon={faCircleQuestion} size="lg" /></Col>
                                            <Col>Help</Col>
                                        </Row>
                                    </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">
                                    <Link className='text-decoration-none text-white'>
                                        <Row>
                                            <Col><FontAwesomeIcon icon={faGear} size="lg" /></Col>
                                            <Col>Settings</Col>
                                        </Row>
                                    </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">
                                    <Link className='text-decoration-none text-white'>
                                        <Row>
                                            <Col><FontAwesomeIcon icon={faCircleDown} size="lg" /></Col>
                                            <Col>Install App</Col>
                                        </Row>
                                    </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">
                                    <Link className='text-decoration-none text-white'>
                                        <Row>
                                            <Col><FontAwesomeIcon icon={faArrowRightFromBracket} size="lg" /></Col>
                                            <Col><Button onClick={handleLogout}>LogOut</Button></Col>
                                        </Row>
                                    </Link>
                                    </NavDropdown.Item>
                               </div>}
                            </NavDropdown>
                            <Nav.Link href="#link" className='t4 res4'>
                                <FontAwesomeIcon icon={faBell} size="2xl" className='mt-3 ms-4 t4' />
                            </Nav.Link>
                           
                            <Nav.Link href="#link" className='t4'>
                                <Button className='mt-3 ms-3'>
                                    <Link to={'/postad'} className='sbt ps-2 pe-2 fs-5 pb-3 text-decoration-none text-white'><b>Sell</b></Link>
                                </Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}


export default Header