import { useQuery } from "react-query"
import UseGetData from "../../Hooks/UseGetData"
import { useEffect, useState } from "react"

const ProductsYouMayLike = (id) => {
    const [relatedProductsData, setRelatedProductsData] = useState([])
const relatedproducts=async(id)=>{
   if (id) {
       return UseGetData(`/api/v1/products?category=${id}`);
   }

}
const {data}=useQuery(['relativeProducts',id],()=>relatedproducts(id))


useEffect(() => {
if (data) {
    setRelatedProductsData(data?.data?.data?.slice(0,12))
}
}, [data])

return[relatedProductsData]
}

export default ProductsYouMayLike