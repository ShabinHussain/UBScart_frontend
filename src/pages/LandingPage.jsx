import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Cardview from '../components/Cardview'
import { allProductApi, allProductApi2 } from '../services/allApi'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'










function LandingPage() {

  const [allProduct, setAllProduct] = useState([])
  const [allProduct2, setAllProduct2] = useState([])
  const[searchKey, setSearchKey] = useState("")
  const[searchKey2, setSearchKey2] = useState("")






  const getAllProduct = async () => {
   
      const result = await allProductApi(searchKey)
      if (result.status == 200)
        setAllProduct(result.data)
    }
  
  console.log(allProduct);

  const getAllProduct2 = async () => {
   
    const result = await allProductApi2(searchKey)
    if (result.status == 200)
      setAllProduct2(result.data)
  }

console.log(allProduct2);

  

  
  useEffect(()=>{
    getAllProduct()
    getAllProduct2
    },[searchKey])


    

    



  return (
    <>
    <Header searchKey={setSearchKey} searchKey2={setSearchKey2}/>
      <div className='text-light bdy'>
        <Row>
          <Col md={2}>
            <h4 className='ms-3' onClick={()=>setSearchKey("")}   type='button' >ALL CATEGORIES</h4>
          </Col>
          <Col md={1}>
            <h5><Link type='button' className='text-decoration-none text-light' onClick={()=>setSearchKey("bus")}>Bus</Link></h5>
          </Col>
          <Col md={1}>
            <h5 onClick={()=>setSearchKey("Motorcycle")}   type='button'>Motorcycles</h5>
          </Col>
          <Col md={1}>
            <h5 onClick={()=>setSearchKey("Scooter")}   type='button'>Scooters</h5>
          </Col>
          <Col md={1}>
            <h5 onClick={()=>setSearchKey("Mobile Phone")}   type='button'>Mobile Phones</h5>
          </Col>
          <Col md={1}>
            <h5 onClick={()=>setSearchKey("Laptop")}   type='button'>Laptops</h5>
          </Col>
          <Col md={1}>
            <h5 onClick={()=>setSearchKey("Desktop")}   type='button'>Desktops</h5>
          </Col>
          <Col md={1}>
            <h5 onClick={()=>setSearchKey("Gaming")}   type='button'>Gaming</h5>
          </Col>
          <Col md={1}>
            <h5 onClick={()=>setSearchKey("House")}   type='button'>Houses</h5>
          </Col>
          <Col md={1}>
            <h5 onClick={()=>setSearchKey("Apartment")}   type='button'>Apartments</h5>
          </Col>
          <Col md={1}>
            <h5 onClick={()=>setSearchKey("Flat")}   type='button'>Flats</h5>
          </Col>
        </Row>
      </div>
      <div className='container-fluid mt-5'>
        <div className='row ms-5'>
          {allProduct.length >0 ? 
          allProduct.map((item)=>(<div className="col-md-3 mt-5 mb-5 res1">
            <Cardview products={item}/>

          </div>))
          :
         <p>No ad to display</p>}
         

         


        </div>

      </div>
    </>
  )
}

export default LandingPage