
import baseUrl from '../Api/BaseUrl';

const UsePostData=async(url,params)=>{
try{
  let response=await baseUrl.post(url,params)
  return response
}catch(err){
  return err
}
}
export default UsePostData