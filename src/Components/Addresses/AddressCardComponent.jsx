
import { PropTypes } from 'prop-types';
import RemoveAddressLogic from '../../Logic/Address/RemoveAddressLogic';
const AddressCardComponent = ({data}) => {
    const [removeAddress]=RemoveAddressLogic()
  return (
   <>
    {data?.data?.length>0?<p className="fw-bold">My Addresses</p>:<p className="fw-bold">There are no addresses yet</p>}
         {data?.data?.map((address,index)=>{
        return <div key={index} className="bg-light shadow rounded-4  p-4 mt-2 ">
         <div className="d-flex justify-content-between align-items-center">
         <p className="fs-5"> Home: <span className="text-muted">{address.name}</span></p>
         <button className="btn btn-danger" onClick={()=>removeAddress(address._id)}>
             <i className="fa-sharp fa-solid fa-trash"></i> {" "}
                Remove
                </button>
         </div>
         <p className="fs-5">Address details:  <span className="text-muted">{address.details}</span></p>
         <div className="d-flex justify-content-between align-items-center">
            <p className="fs-5">Phone: <span className="text-muted">{address.phone}</span></p>
            <p className="fs-5">City: <span className="text-muted">{address.city}</span></p>
         </div>
        </div>
      })}
  
   
  
   
   </>
  )
}
AddressCardComponent.propTypes = {
    data: PropTypes.object.isRequired,
  };
export default AddressCardComponent