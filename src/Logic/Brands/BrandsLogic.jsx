import { useQuery } from "react-query"
import UseGetData from "../../Hooks/UseGetData"

const BrandsLogic = () => {
 const getAllBrands=()=>{
    return UseGetData(`/api/v1/brands`)
 }
 const {data}=useQuery('brands',getAllBrands)
 return[data]
}

export default BrandsLogic