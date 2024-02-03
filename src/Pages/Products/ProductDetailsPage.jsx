import { Offline } from "react-detect-offline"
import ProductDetailsComponent from "../../Components/ProductDetailsComponent/ProductDetailsComponent"
import Disconnect from "../../Utilites/Disconnect/Disconnect"

const ProductDetailsPage = () => {
  document.title='Product Details'

  return (
    <>
    <Offline><Disconnect/></Offline>
    <div className="container py-5">
    <div className="row align-items-center">
    <ProductDetailsComponent/>
    </div>
    </div>
    
    </>
  )
}

export default ProductDetailsPage