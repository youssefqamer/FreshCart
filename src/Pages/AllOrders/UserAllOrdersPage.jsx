import { Offline } from 'react-detect-offline'
import UserAllOrdersComponent from '../../Components/AllOrders/UserAllOrdersComponent'
import UserAllOrdersLogic from '../../Logic/AllOrders/UserAllOrdersLogic'
import Disconnect from '../../Utilites/Disconnect/Disconnect'
import Loader from '../../Utilites/Loader/Loader'

const UserAllOrdersPage = () => {
  const [,isLoading]=UserAllOrdersLogic()
  document.title='All orders'

  return (
   <>
   <Offline><Disconnect/></Offline>
   {!isLoading?<div className="container mt-3 mb-5">
   <div className="mx-auto bg-main-light  rounded-2 ">
    <UserAllOrdersComponent />
    </div>
   </div>:<Loader/>}
   </>
  )
}

export default UserAllOrdersPage