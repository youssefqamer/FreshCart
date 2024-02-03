import { useQuery } from "react-query"
import UseGetData from "../../Hooks/UseGetData"

const CategoriesLogic = () => {
 const getAllCategories=async()=>{
    return UseGetData(`/api/v1/categories`)
 }
 const {data,isLoading}=useQuery('categories',getAllCategories)
 return[data,isLoading]
}

export default CategoriesLogic