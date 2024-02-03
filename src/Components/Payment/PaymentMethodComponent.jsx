import GetUserAddressesLogic from "../../Logic/Address/GetUserAddressesLogic"
import GetUserCartLogic from "../../Logic/Cart/GetUserCartLogic";
import CashpaymentLogic from "../../Logic/Payment/CashpaymentLogic";
import Loader from "../../Utilites/Loader/Loader";
import ChooseAddressLogic from "../../Logic/Payment/ChooseAddressLogic";
import OnlinePaymentLogic from './../../Logic/Payment/OnlinePaymentLogic';

const PaymentMethodComponent = () => {
   const [data,isLoading]=GetUserAddressesLogic()
   const [getSelectedAddress,shippingAddress]=ChooseAddressLogic()
   const [,,cartId,,totalCartPrice]=GetUserCartLogic()
   const [getSlectedPaymentMethod,handlePayment]=CashpaymentLogic(cartId,shippingAddress)
   const [,,]=OnlinePaymentLogic(cartId,shippingAddress)
  return (
    <>
{!isLoading&&totalCartPrice>0?
    <div className="container mt-3 ">
    <div className="mx-auto bg-main-light p-5 rounded-2">
<form className="radio-form" onSubmit={handlePayment} >
    <div className="radio-input">
     <div className="form-group d-flex align-items-center">
     <input name="payment" id="cash" type="radio" value='cash' className="input " defaultChecked  onChange={getSlectedPaymentMethod} />
      <label htmlFor="cash" className="fw-bold">Cash</label>
     </div>
      
      <div className="form-group d-flex align-items-center">
     <input  name="payment" id="visa" type="radio" value='visa' className="input "  onChange={getSlectedPaymentMethod}/>
      <label htmlFor="visa" className="fw-bold">Credit / Debit card</label>
     </div>
     <select onChange={getSelectedAddress} className="select mt-3 px-2 mb-5 w-50 mb-3" >
     <option value="0">Choose Address</option>
     {data?.data?.length>0?data?.data?.map((address,index)=>{
        return  <option value={address?._id} key={index}>{address?.name}</option>
     }):<option value="0" >No addresses available</option>}
   
     </select>
    </div>
     <div className="d-flex align-items-center justify-content-end gap-2">
     <div className="disabled bg-light px-4 py-2 rounded-3 fw-bolder" style={{width:'fit-content'}}>{totalCartPrice} EGP</div>
    <button className={`btn bg-main text-white`} disabled={shippingAddress.details===''||shippingAddress.details===undefined} type="submit" >Pay now</button>
     </div>
    </form>
    </div>
    </div>
:<Loader/>}
  

    </>
  )
}

export default PaymentMethodComponent