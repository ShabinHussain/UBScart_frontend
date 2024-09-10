import axios from "axios"



export const commonApi = async(httpReq,url,reqBody,reqHeader)=>{
    const reqqax ={
        method : httpReq,
        url,
        data: reqBody,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
    }


    return await axios(reqqax).then((result)=>{
        return result
    }).catch((error)=>{
        return error
    })
        
    
}


