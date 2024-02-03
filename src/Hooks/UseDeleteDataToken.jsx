import baseUrl from "../Api/BaseUrl"

const UseDeleteDataToken = async(url) => {
    let headers={
        token:localStorage.getItem('token')
    }
   try{
    let response=await baseUrl.delete(url,{
        headers
    })
    return response.data
   }catch(err){
    return err
   }

}

export default UseDeleteDataToken