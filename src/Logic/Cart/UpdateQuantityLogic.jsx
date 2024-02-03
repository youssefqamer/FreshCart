import { useQueryClient } from "react-query"
import UseUPdateData from "../../Hooks/UseUPdateData"

const UpdateQuantityLogic = () => {
 const queryClient=useQueryClient()
 const updateQuantity=async(id,qunatity)=>{
    await UseUPdateData(`/api/v1/cart/${id}`,{
        count:qunatity
    })
    queryClient.invalidateQueries("cart");
 }
return[updateQuantity]
}

export default UpdateQuantityLogic