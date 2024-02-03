import { useQuery } from "react-query"
import UseGetDataToken from "../../Hooks/UseGetDataToken"

const GetUserAddressesLogic = () => {
const getUserAddresses=async()=>{
    return UseGetDataToken(`/api/v1/addresses`)
}
const {data,isLoading}=useQuery('address',getUserAddresses)
return[data,isLoading]
}

export default GetUserAddressesLogic