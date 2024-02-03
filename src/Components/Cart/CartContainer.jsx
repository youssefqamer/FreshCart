import GetUserCartLogic from "../../Logic/Cart/GetUserCartLogic"
import RemoveItemLogic from "../../Logic/Cart/RemoveItemLogic"
import Loader from './../../Utilites/Loader/Loader';
import cart from '../../assets/images/empty cart.webp'
import { Link } from "react-router-dom";
import UpdateQuantityLogic from "../../Logic/Cart/UpdateQuantityLogic";
import ClearCartLogic from "../../Logic/Cart/ClearCartLogic";
const CartContainer = () => {
    const[cartData,isLoading,,,,errorMsg]=GetUserCartLogic(localStorage.getItem('token'))
    const [deleteItem]=RemoveItemLogic()
    const [updateQuantity]=UpdateQuantityLogic()
    const [clearCart,loading]=ClearCartLogic()

  return (

   <>
  {!isLoading?cartData?.numOfCartItems===0||errorMsg?<div className=" text-center w-75 m-auto" >
    <img src={cart} alt="empty cart" className="w-75 "/>
    <p className="fs-3 text-muted">Your cart is empty</p>
    <Link to={'/FreshCart/products'}><button className="btn bg-main text-white p-2"> Add some products</button></Link>
  </div>: <div className="container mt-3 ">
    <div className=" mx-auto bg-main-light p-5 rounded-2">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
        <h1 className="mb-3">Cart shop</h1>
        <button className="btn btn-danger" onClick={clearCart.mutate}>{loading?<i className="fa-solid fa-spinner fa-spin  "></i>:'Clear Cart'}</button>
        </div>
        <div className="d-flex justify-content-between align-items-center">
            <h3 className="h5">Total price : <span className="text-main">{cartData?.data?.totalCartPrice} EGP</span></h3>
            <h3 className="h6">Total cart items : <span className="text-main">{cartData?.numOfCartItems}</span></h3>
        </div>
       {cartData?.data?.products?.map((product,index)=>{
      return   <div className="row border-bottom py-2" key={index}>
         <div className="col-md-1">
             <img src={product.product.imageCover} alt={product.product.title}  className="w-100"/>
         </div>
         <div className="col-md-11">
         <div className="d-flex justify-content-between align-items-center ">
         <div className="left-side">
             
             <h4 className="h5">{product.product.title}</h4>
             <p>{product.price} EGP</p>

      <button className="button"  onClick={()=>deleteItem(product.product._id)}>
  <svg viewBox="0 0 448 512" className="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
</button>
         </div>
         <div className="right-side d-flex align-items-center">
            <button className={`btn btn-outline-success ${product.count===0?'disabled':""}` } onClick={()=>updateQuantity(product.product._id,product.count-1)}>-</button>
            <span className="mx-2">{product.count}</span>
            <button className="btn btn-outline-success" onClick={()=>updateQuantity(product.product._id,product.count+1)}>+</button>
         </div>
         </div>
         </div>
     </div>
       })}
       <Link to={'/FreshCart/paymentMethod'} className={`btn bg-main text-white w-50 d-block m-auto mt-3 ${cartData?.data?.totalCartPrice===0?'disabled':''}`}>Checkout</Link>
    </div>
   </div>:<Loader/>}
   
   
   </>
  )
}

export default CartContainer