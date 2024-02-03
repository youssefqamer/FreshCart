import { useMutation } from "react-query";
import UsePostDataToken from "../../Hooks/UsePostDataToken";
import { useEffect, useState } from "react";
const OnlinePaymentLogic = (cartId,shippingAddress) => {
  
    const [onlinePaymentResponse, setOnlinePaymentResponse] = useState({})
    const onlinePayemnt = useMutation(async () => {
    
        return UsePostDataToken(`/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173/FreshCart/`,{
            shippingAddress:{
                details: shippingAddress?.details,
                phone: shippingAddress?.phone,
                city: shippingAddress?.city
                }
        })
      });

    const {data}=onlinePayemnt
      useEffect(() => {
      if (data) {
        setOnlinePaymentResponse(data)
        if (data.status==='success') {
            window.location.href=data?.session?.url
        }
      }
      }, [data])
      
      return[onlinePaymentResponse,onlinePayemnt]
}

export default OnlinePaymentLogic