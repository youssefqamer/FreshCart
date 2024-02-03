import { Link } from "react-router-dom"
import AddressCardComponent from "../../Components/Addresses/AddressCardComponent";
import GetUserAddressesLogic from './../../Logic/Address/GetUserAddressesLogic';
import Loader from './../../Utilites/Loader/Loader';
import { Offline } from "react-detect-offline";
import Disconnect from "../../Utilites/Disconnect/Disconnect";

const Addressespage = () => {
  const [data,isLoading]=GetUserAddressesLogic()
  document.title='Addresses'

  return (
    <>
    <Offline><Disconnect/></Offline>
    {!isLoading?  <div className="container mb-5">
    <div className='mx-auto bg-light p-5 mt-2 w-100  rounded-3'>
    <AddressCardComponent data={data} />
      <Link to='/FreshCart/add-address' className="btn bg-main text-white text-center w-100  mt-3" >Add new address</Link>
    </div>
       
    </div>:<Loader/>}
    </>
  )
}

export default Addressespage