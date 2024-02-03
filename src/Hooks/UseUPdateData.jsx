import baseUrl from '../Api/BaseUrl'

const UseUPdateData = async(url,params) => {
    let headers={
        token:localStorage.getItem('token')
    }
  try{
    let response=await baseUrl.put(url,params,{
        headers
    })
    return response.data
    
  }catch(err){
    return err
  }
}

export default UseUPdateData