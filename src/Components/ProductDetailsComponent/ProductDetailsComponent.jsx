import Slider from "react-slick";
import ProductDetailsLogic from "../../Logic/ProductDetails/ProductDetailsLogic"
import Loader from './../../Utilites/Loader/Loader';
import AddToCartLogic from "../../Logic/Cart/AddToCartLogic";
import { useParams } from "react-router-dom";
import Wishlistlogic from "../../Logic/Wishlist/Wishlistlogic";
import GetUserWishlistLogic from "../../Logic/Wishlist/GetUserWishlistLogic";
import ProductsYouMayLike from "../../Logic/Products/ProductsYouMayLike";
import ProductCardComonent from "../Products/ProductCardComonent";
import Spinner from './../../Utilites/Loader/Spinner';

const ProductDetailsComponent = () => {
  const {id}=useParams()
  const [favProducts]=GetUserWishlistLogic()
  const [addToWishlist,handleFavorite]=Wishlistlogic(id,favProducts?.data)
  const [addToCart]=AddToCartLogic()
  const [data,isLoading]=ProductDetailsLogic()
  const [relatedProductsData]=ProductsYouMayLike(data?.data?.data?.category?._id)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000,
    draggable:true,
    fade:false,
    className:'grap'
  };
  return (
    <>
    {isLoading?<Loader/>:<>
    <div className="col-md-4 mb-5">
      <div>
      <Slider {...settings}>
      {data?.data?.data?.images.map((image,index)=><img style={{cursor:'grab',maxWidth:'100%'}} key={index} src={image} alt="" />)}
      </Slider>
      </div>
    </div>
    <div className="col-md-8">
      <div>
        <div className="d-flex justify-content-between align-align-items-center">
        <h2>{data?.data?.data.title}</h2>
    {addToWishlist?<i className="fa-solid fa-heart fs-5 text-main" style={{cursor:'pointer'}} onClick={handleFavorite}></i>:<i className="fa-regular fa-heart" style={{cursor:'pointer'}} onClick={handleFavorite}></i>}
        </div>
   
    <p>{data?.data?.data.description}</p>
    <p>{data?.data?.data.category.name}</p>
    <div className="d-flex justify-content-between align-items-center">
      <h5>{data?.data?.data.price} EGP</h5>
      <h5>
            <i className="fa fa-star rating-color"></i>
            <span>({data?.data?.data.ratingsAverage})</span>
        </h5>
    </div>
    <button className="btn bg-main w-100 text-white" onClick={()=>addToCart(id)}>Add to cart</button>
      </div>
    </div>
    {relatedProductsData?.length>0?<p className="my-5 fw-bold ">Products you may like</p>:''}
    {relatedProductsData?relatedProductsData?.map((product,index)=>{
      return <div className="col-lg-2 col-md-3 col-sm-6" key={index}>
      <ProductCardComonent products={product} />
    </div>
    }):<Spinner/>}
  
    </>}
 
    
    </>
  )
}

export default ProductDetailsComponent