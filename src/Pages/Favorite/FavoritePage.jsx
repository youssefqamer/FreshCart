import ProductCardComonent from "../../Components/Products/ProductCardComonent"
import GetUserWishlistLogic from "../../Logic/Wishlist/GetUserWishlistLogic"
import Loader from './../../Utilites/Loader/Loader';
import favImage from '../../assets/images/favimg.jpg'
import { Offline } from "react-detect-offline";
import Disconnect from "../../Utilites/Disconnect/Disconnect";
const FavoritePage = () => {
    const [favProducts,isLoading]=GetUserWishlistLogic()
    document.title='Favorite'
  return (
    <>
    <Offline><Disconnect/></Offline>
    {!isLoading?  <div className="container-fluid p-5">
   <div className="row">
    {favProducts?.data?.length>0?favProducts?.data?.map((favProduct,index)=>{
        return <div className="col-lg-2 col-md-3 col-sm-6" key={index}>
        
        <ProductCardComonent products={favProduct} />
        </div>
    }):<div className="my-5 text-center">
        
        <img src={favImage} alt="no favorite products yet" className="w-25"/>
        <p className="my-2 fs-4 fw-bold">There are no favorite products yet</p>
        </div>}
    </div>
    </div>:<Loader/>}
   
    </>
  )
}

export default FavoritePage