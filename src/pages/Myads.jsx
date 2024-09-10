
import AdView from '../components/AdView'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { serverUrl } from '../services/serverUrl';
import { deleteProductApi, userProductApi } from '../services/allApi';
import Header from '../components/Header';
import { editResponseContext } from '../context/DataShare';






function Myads() {
    const [show, setShow] = useState(false);
    const [userProduct, setUserProduct] = useState([])
    const [deleteStatus, setDeleteStatus] = useState(false)
    const { editResponse } = useContext(editResponseContext)

    const getUserProduct = async () => {
        if (sessionStorage.getItem("token")) {
          const token = sessionStorage.getItem("token")
          const reqHeader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
          const result = await userProductApi(reqHeader)
          setUserProduct(result.data);
        }
      }
      console.log(userProduct);


      const handleDelete = async (id) => {
        const result = await deleteProductApi(id)
        console.log(result);
        if (result.status == 200) {
          setDeleteStatus(true)
        }
      }
    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    useEffect(() => {
        getUserProduct()
        setDeleteStatus(false)
      }, [deleteStatus,editResponse])
    
  return (
    <>
    <Header/>
    <div className='container-fluid mt-5'>
        <div className='row ms-5'>
            {userProduct?.length > 0 ? 
            userProduct?.map((item)=>(<div className='col-md-3 mt-5 mb-5 res1'>
               <AdView products={item} handleDelete={handleDelete}/>
            </div>))
            :
            <p>No ad to display</p>}

        </div>

    </div>
    </>
  )
}

export default Myads