import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import UseGetData from '../../Hooks/UseGetData'

const ProductDetailsLogic = () => {
 const {id}=useParams()
 const getProductDetails=(id)=>{
    return UseGetData(`api/v1/products/${id}`)
 }
 let {data,isLoading}=useQuery(['details', id],()=>getProductDetails(id),{
   cacheTime:500
 })


 return[data,isLoading,getProductDetails]
}

export default ProductDetailsLogic