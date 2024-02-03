import { useMutation, useQueryClient } from "react-query";
import UseDeleteDataToken from "../../Hooks/UseDeleteDataToken";
import GetUserCartLogic from "./GetUserCartLogic";
import { useEffect, useState } from "react";

const ClearCartLogic = () => {
   const [,,,,,,setNumOfCartItems]=GetUserCartLogic(localStorage.getItem('token'))
   const [loading, setLoading] = useState(false)
    const queryClient = useQueryClient();
const clearCart = useMutation(async () => {
    return UseDeleteDataToken(`/api/v1/cart`);
})
const{data,isLoading}=clearCart

useEffect(() => {
 if (data?.message==="success") {
    queryClient.invalidateQueries("cart");
    setNumOfCartItems(0)
 }
 if (isLoading) {
    setLoading(true)
 }
}, [isLoading])

return[clearCart,loading]
}

export default ClearCartLogic