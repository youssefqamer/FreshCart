import { Offline } from 'react-detect-offline'
import AddAddressComponent from '../../Components/Addresses/AddAddressComponent'
import Disconnect from '../../Utilites/Disconnect/Disconnect'

const AddAddressPage = () => {
  document.title='Add address'

  return (
    <>
    <Offline><Disconnect/></Offline>
    <div className="container">
        <AddAddressComponent/>
    </div>
    
    </>
  )
}

export default AddAddressPage