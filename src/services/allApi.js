import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"




//register
export const registerApi = async(reqbody)=>{
    return await commonApi('POST',`${serverUrl}/register`,reqbody,"")
}

//login
export const loginApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/login`,reqBody,"")
}

//add product
export const addProductApi = async(reqBody, reqHeader)=>{
    return await commonApi('POST',`${serverUrl}/addproduct`,reqBody,reqHeader)
}

//all product
//query parameter = baseUrl?key=value
export const allProductApi = async(searchKey,reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/allproducts?search=${searchKey}`,"",reqHeader)  // search ennu parayana key il value
}

//all product2
//query parameter = baseUrl?key=value
export const allProductApi2 = async(searchKey,reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/allproducts2?search=${searchKey}`,"",reqHeader)  // search ennu parayana key il value
}

//user product
export const userProductApi = async(reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/userProduct`,"",reqHeader)
}

//delete product
export const deleteProductApi =async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/delete/${id}`,{},"")
}

//edit project
export const editProductApi =async(productid,reqBody,reqHeader)=>{
    return await commonApi('PUT',`${serverUrl}/edit-product/${productid}`,reqBody,reqHeader)
}

//edit Profile
export const editProfileApi =async(reqBody,reqHeader)=>{
    return await commonApi('PUT',`${serverUrl}/edit-profile`,reqBody,reqHeader)
}