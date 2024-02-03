import {   useQuery } from "react-query";
import UseGetData from './../../Hooks/UseGetData';
const ProductsLogic = (page,limit,sort,priceLowerThanString,categoryQueryString) => {
    const getAllProducts=async(page,limit,sort)=>{
        return UseGetData(`api/v1/products?page=${page}&limit=${limit}&sort=${sort}${priceLowerThanString}&${categoryQueryString}`)
    }
const { data } = useQuery(['allProducts', page,limit,sort,priceLowerThanString,categoryQueryString], () => getAllProducts(page,limit,sort,priceLowerThanString,categoryQueryString));
      
    return[data]
}

export default ProductsLogic