import { jwtDecode } from "jwt-decode"
import UseGetData from './../../Hooks/UseGetData';
import { useQuery } from "react-query";

const UserAllOrdersLogic = () => {
    const token=localStorage.getItem('token')
    const decodedToken=jwtDecode(token)
    const getUserAllOrders=()=>{
        return UseGetData(`/api/v1/orders/user/${decodedToken?.id}`)
    }
    const {data,isLoading}=useQuery('userOrders',getUserAllOrders)
    return[data,isLoading]
}

export default UserAllOrdersLogic