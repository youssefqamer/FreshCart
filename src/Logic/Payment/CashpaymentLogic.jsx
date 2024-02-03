import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import UsePostDataToken from './../../Hooks/UsePostDataToken';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import OnlinePaymentLogic from './OnlinePaymentLogic';
import GetUserCartLogic from "../Cart/GetUserCartLogic";

const CashpaymentLogic = (cartId,shippingAddress) => {
    const navigate=useNavigate()
    const [,onlinePayemnt]=OnlinePaymentLogic(cartId,shippingAddress)
    const [selectedPymentMethod, setSelectedPymentMethod] = useState('cash')
    const [,,,,,,,getUserCart]=GetUserCartLogic()
    const getSlectedPaymentMenthod=(e)=>{
   setSelectedPymentMethod(e.target.value)
  }
  const handlePayment=(e)=>{
    e.preventDefault()
   if (shippingAddress.details!==''||shippingAddress.details!=='undefined') {
    if (selectedPymentMethod==='cash') {
        cashPayment.mutate()
    }else{
      onlinePayemnt.mutate()
    }
   }else{
    toast.error('you must select an address ')
   }
  }
  const queryClient=useQueryClient()
 const cashPayment=useMutation(async()=>{
    return UsePostDataToken(`/api/v1/orders/${cartId}`,{
        shippingAddress:{
            details: shippingAddress?.details,
            phone: shippingAddress?.phone,
            city: shippingAddress?.city
            }
           
    })

 })
 const {data}=cashPayment
 useEffect(() => {
  if (data) {
    if (data?.status==='success') {
        toast.success('We received your order successfully')
        setTimeout(() => {
            navigate('/FreshCart/allorders')
            queryClient.invalidateQueries('cart');
            getUserCart();
        }, 1800);
      
     
    }
  }
 }, [data])
 

  return [getSlectedPaymentMenthod,handlePayment]
}

export default CashpaymentLogic