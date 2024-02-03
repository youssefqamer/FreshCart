import baseUrl from "../Api/BaseUrl"

const UsePostDataToken = async(url,params) => {

    let headers={
        token:localStorage.getItem('token')
    }
   try{
    let response=await baseUrl.post(url,params,{
        headers
    })
    return response.data
   }catch(err){
    return err
   }
}

export default UsePostDataToken