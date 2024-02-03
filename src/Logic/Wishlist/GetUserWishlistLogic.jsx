import { useQuery } from 'react-query';
import UseGetDataToken from './../../Hooks/UseGetDataToken';
import { useEffect ,useState} from 'react';
const GetUserWishlistLogic = () => {
    const [favProducts, setFavProducts] = useState([])
 const getWishlist=()=>{
    
    return UseGetDataToken(`/api/v1/wishlist`)
 }
 const {data,isLoading}=useQuery('wishlist',getWishlist)
 
 useEffect(() => {
  if (data) {
    setFavProducts(data)
  }
 }, [data])
 return[favProducts,isLoading]
}

export default GetUserWishlistLogic