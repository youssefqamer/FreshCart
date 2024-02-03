import {  useEffect, useState } from "react"
import {  useQueryClient } from "react-query"
import UsePostDataToken from "../../Hooks/UsePostDataToken"
import toast from "react-hot-toast";
import UseDeleteDataToken from "../../Hooks/UseDeleteDataToken";

const Wishlistlogic = (id,favProducts) => {
  
const [addToWishlist, setAddToWishlist] = useState(false)
const handleFavorite=()=>{
    if (!addToWishlist) {
        addToWishlistMutation()
    }else{
        removeFromWishlistMutation()
    }
}

const queryClient = useQueryClient();
const addToWishlistMutation=async()=>{
    if (localStorage.getItem('token')) {
        setAddToWishlist(true)
        await UsePostDataToken(`/api/v1/wishlist`,{
            productId:id
        })
        queryClient.invalidateQueries("wishlist");
    }else{
        toast.error('Please login first')
    }
}

const removeFromWishlistMutation=async()=>{
    setAddToWishlist(false)
    await UseDeleteDataToken(`/api/v1/wishlist/${id}`)
    queryClient.invalidateQueries("wishlist");
}

useEffect(() => {
 if (favProducts) {
//The favProducts?.some((favProduct) => favProduct.id === id)  checks if any product in the favProducts array has an id matching the current product's id (while rendering the productcard). The some method returns true if at least one element satisfies the condition, otherwise false.
// The result of the some method is passed to setAddToWishlist to update the addToWishlist state. If the current product is in the user's wishlist, it will be set to true; otherwise, it will be set to false
    setAddToWishlist(favProducts?.some((favProduct)=>favProduct.id===id))
 }
}, [favProducts])

return[addToWishlist,handleFavorite]
}

export default Wishlistlogic