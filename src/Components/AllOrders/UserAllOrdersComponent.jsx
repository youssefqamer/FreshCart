import UserAllOrdersLogic from "../../Logic/AllOrders/UserAllOrdersLogic"

const UserAllOrdersComponent = () => {
  const [data]=UserAllOrdersLogic()
  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    // it means that January represented as 0 , so 0+1 will display 1 (which represents january )  
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  return (
    <>
    <div className=" p-2 ">
      {data?.data?.map((order,index)=>{
        return <div key={index} className="rounded-3 bg-light p-3  mb-3">
         <div className="d-flex justify-content-between align-items-center flex-wrap-reverse ">
         <h5 className="fw-bold">Total order price : <span className="fw-light text-main">{order?.totalOrderPrice} EGP</span></h5>
        <span className="fw-bold fs-5 mb-2">Order # {index+1}</span>
         </div>
          {order?.cartItems?.filter((product)=>product.count!==0).map((product,index)=>{
          return  <div key={index} className="mb-2  p-3 row gy-2 align-items-center">
            <div className="col-md-2">
            <img src={product?.product?.imageCover} alt="" key={index} className="w-100"/>
            </div>
            <div className="col-md-10">
             <div className="d-flex justify-content-between align-items-center flex-wrap">
             <p>Category : <span className="text-muted">{product.product.category.name}</span></p>
            <p className='fs-5'><i className="fa fa-star rating-color"></i>({product.product.ratingsAverage})</p>
             </div>
              <p>Describtion : <span className="text-muted">{product.product.title}</span></p>
              <div className="d-flex justify-content-between align-items-center flex-wrap">
            <p className="d-flex align-items-center">Quantity : <span className="text-muted fs-5">{product.count}</span></p>
            <p className="fs-5">Price : <span className="text-main">{product.price} EGP</span></p>
              </div>
            </div>
          </div>
          })}
         
          <div className="d-flex justify-content-between align-items-center flex-wrap">
          <p className="fs-5">Is paid :<span className="text-muted">{order.isPaid?'yes':'No'}</span></p>
            
            <p className="fs-5">Is delivered :<span className="text-muted">{order.isDelivered?'yes':'No'}</span></p>
           

          </div>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <p className="fs-5">Payment method :<span className="text-muted">{order?.paymentMethodType}</span></p>
          <h5 >Created At : <span className="text-muted">{formatTimestamp(order.createdAt)}</span> </h5>
          </div>
        </div>
      })}
    </div>
    
    
    </>
  )
}
export default UserAllOrdersComponent