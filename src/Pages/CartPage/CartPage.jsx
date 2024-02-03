import { Offline } from "react-detect-offline";
import CartContainer from "../../Components/Cart/CartContainer";
import Disconnect from "../../Utilites/Disconnect/Disconnect";

const CartPage = () => {
  document.title='Cart'

  return (
   <>
   <Offline><Disconnect/></Offline>
   <CartContainer/>
   </>
  )
}

export default CartPage