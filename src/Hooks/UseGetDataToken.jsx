import baseUrl from "../Api/BaseUrl"

const UseGetDataToken = async(url) => {
    let headers={
        token:localStorage.getItem('token')
    }
    try{
        let {data}=await baseUrl.get(url,{
            headers
        })
        return data
    }catch(err){
        return err
    }

}

export default UseGetDataToken