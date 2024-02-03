import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddToCartLogic from '../../Logic/Cart/AddToCartLogic';
import Wishlistlogic from '../../Logic/Wishlist/Wishlistlogic';
import GetUserWishlistLogic from '../../Logic/Wishlist/GetUserWishlistLogic';

const ProductCardComonent = ({products}) => {
 const [addToCart]=AddToCartLogic()
 const [favProducts]=GetUserWishlistLogic()
  const [addToWishlist,handleFavorite]=Wishlistlogic(products?.id,favProducts?.data)
  return (
    <>


    <div className="product px-2 py-3">
  <Link to={`/FreshCart/productDetails/${products?.id}`} style={{textDecoration:'none'}}>
        <img src={products?.imageCover} alt={products?.title} className="w-100" />
        </Link>
        <div>
          <div className='d-flex justify-content-between align-items-center'>
        <p className="text-main">{products?.category?.name}</p>
        {addToWishlist?<i className="fa-solid fa-heart fs-5 text-main" style={{cursor:'pointer'}} onClick={handleFavorite}></i>:<i className="fa-regular fa-heart" style={{cursor:'pointer'}} onClick={handleFavorite}></i>}
          </div>
        <h3 className='h6' title={products?.title}>{products?.title.split(" ").slice(0,3).join(" ")}...</h3>
        <div className="d-flex justify-content-between align-items-center flex-wrap">
        <p>{products.price} EGP</p>
        <div>
            <i className="fa fa-star rating-color"></i>
            <span>({products.ratingsAverage})</span>
        </div>
        </div>
    </div>
  
  
    <button className='btn bg-main w-100 text-white' onClick={()=>addToCart(products.id)}>Add to cart</button>
    </div>
    </>
  )
}
ProductCardComonent.propTypes = {
    products: PropTypes.object.isRequired,
   
  };
export default ProductCardComonent