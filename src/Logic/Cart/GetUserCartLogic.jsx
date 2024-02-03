import {  useQuery } from "react-query"
import UseGetDataToken from "../../Hooks/UseGetDataToken"
import { useEffect, useState } from "react"
const GetUserCartLogic = () => {
    const [cartId, setCartId] = useState(null)
    const [cartData, setCartData] = useState({})
    const [numOfCartItems, setNumOfCartItems] = useState(null)
    const [totalCartPrice, setTotalCartPrice] = useState(0)
    const [errorMsg, setErrorMsg] = useState(null)
const getUserCart=async()=>{
    if (localStorage.getItem('token')) {
      return UseGetDataToken('/api/v1/cart')
    }
}
let {data,isLoading}=useQuery("cart",getUserCart)
useEffect(() => {
  if (data) {

if (data?.data?._id) {
   setCartData(data)
    setCartId(data?.data?._id)
    setNumOfCartItems(data?.numOfCartItems)
    setTotalCartPrice(data?.data?.totalCartPrice)
}else  {
  setErrorMsg(data?.response?.data?.message);
  // if there is error this means that the cartItems is 0 so we set it to null again 
  setNumOfCartItems(null)
 }
  }
}, [data])


return[cartData,isLoading,cartId,numOfCartItems,totalCartPrice,errorMsg,setNumOfCartItems,getUserCart]
}

export default GetUserCartLogic
