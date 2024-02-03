import { useMutation } from "react-query"
import UseGetDataToken from "../../Hooks/UseGetDataToken"
import { useEffect, useState } from "react"

const ChooseAddressLogic = () => {
    const [shippingAddress , setShippingAddress] = useState({
        details: "",
        phone: "",
        city: ""
    })
 const getSelectedAddress=(e)=>{
   if (e.target.value!==0) {
    getSelectedAddressDetails.mutate(e.target.value)
   }
 }

const getSelectedAddressDetails=useMutation(async(id)=>{
    return   UseGetDataToken(`/api/v1/addresses/${id}`)
})
const {data}=getSelectedAddressDetails
useEffect(() => {
 if (data) {
    setShippingAddress((prevShippingAddress) => ({
        ...prevShippingAddress,
        details: data?.data?.details,
        phone:data?.data?.phone,
        city:data?.data?.city,
      }))
 }
}, [data])


 return[getSelectedAddress,shippingAddress]
}

export default ChooseAddressLogic