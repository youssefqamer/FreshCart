import { Offline } from "react-detect-offline";
import CategoriesLogic from "../../Logic/Categories/CategoriesLogic"
import Disconnect from "../../Utilites/Disconnect/Disconnect";
import Loader from "../../Utilites/Loader/Loader";

const CategoriesPage = () => {
    const [data,isLoading]=CategoriesLogic()
    
    document.title='Categories'
  return (
  <>
  <Offline><Disconnect/></Offline>
 {!isLoading? <div className="container-fluid p-5 my-2">
    <div className="row">
     {data?.data?.data?.map((category,index)=>{
         return  <div className="col-md-3 col-lg-2" key={index}>
           <div className="text-center">
               <img src={category.image} alt={category.name} style={{cursor:'default'}} className="w-100" height={350}/>
               <p className="my-2 text-main">{category.name}</p>
           </div>
       </div>
     })}
    </div>
  </div>:<Loader/>}
  </>
  )
}

export default CategoriesPage