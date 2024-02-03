import baseUrl from "../Api/BaseUrl"

const UseGetData=async(url,params)=>{
    try{
        let response=await baseUrl.get(url,params)
        return response
    }catch (err){
        return err
    }
}
export default UseGetData