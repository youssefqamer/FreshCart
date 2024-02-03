import { useQuery } from "react-query"
import UseGetData from "../../Hooks/UseGetData"

const CategorySliderLogic = () => {
    const getCategories=()=>{
        return UseGetData(`/api/v1/categories`)
    }
    const {data,isLoading}=useQuery('allCategories',getCategories)
    return[data,isLoading]
}

export default CategorySliderLogic