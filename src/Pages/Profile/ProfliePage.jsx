import GetUserAddressesLogic from "../../Logic/Address/GetUserAddressesLogic";
import GetUserDataLogic from "../../Logic/profile/GetUserDataLogic"
import Loader from './../../Utilites/Loader/Loader';
import ChangeUserPasswordComponent from "../../Components/Profile/ChangeUserPasswordComponent";
import { Offline } from "react-detect-offline";
import Disconnect from "../../Utilites/Disconnect/Disconnect";

const ProfliePage = () => {
  const [userData]=GetUserDataLogic()
  const [data,isLoading]=GetUserAddressesLogic()
  document.title='Profile'

  return (
    <>
    <Offline><Disconnect/></Offline>
    {!isLoading? <div className="container">
      <div className="bg-light mt-2 rounded-3 p-4">
      
        <div>
          <div className="d-flex justify-content-between align-items-center">
          <p>Name: <span className="text-muted">{userData?.name}</span></p>
          </div>
          <p>Email: <span className="text-muted">{userData?.email}</span></p>
        </div>
        {data?<p>Phone: <span className="text-muted">{data?.data[0]?.phone}</span></p>:''}
    
      </div>
      <ChangeUserPasswordComponent/>
    </div>:<Loader/>}
   
    
    </>
  )
}

export default ProfliePage