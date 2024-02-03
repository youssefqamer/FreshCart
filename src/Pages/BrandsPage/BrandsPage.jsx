import BrandCardComponent from "../../Components/Brands/BrandCardComponent"
import BrandsLogic from "../../Logic/Brands/BrandsLogic"
import Loader from './../../Utilites/Loader/Loader';
import noProductFound from '../../assets/images/no-product.png'
import Disconnect from "../../Utilites/Disconnect/Disconnect";
import { Offline } from "react-detect-offline";

const BrandsPage = () => {
  const [data]=BrandsLogic()
  document.title='Brands'

  return (
   <>
   <Offline><Disconnect/></Offline>
  {data? <div className="container-fluid ">
    <div className="row mb-4">
    {data?.data?.data?.length>0?data?.data?.data?.map((brand,index)=>{
      return <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-12 ">
        <BrandCardComponent data={brand}/>
      </div>
    }):<div className='m-auto text-center no-products'>

    <img src={noProductFound} alt="" className='w-100   mb-1'/>
    <p className='fw-bold fs-4'>No Brands Avaliable</p>
    </div>}
    </div>
   </div>:<Loader/>}
   </>
  )
}

export default BrandsPage