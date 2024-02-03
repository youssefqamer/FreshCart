import { Offline } from "react-detect-offline";
import CategoriesSliderComponent from "../../Components/CategoriesSlider/CategoriesSliderComponent";
import MainSlider from "../../Components/MainSlider/MainSlider";
import ProductCardComonent from "../../Components/Products/ProductCardComonent";
import ProductsLogic from "../../Logic/Products/ProductsLogic";
import SideFilterLogic from "../../Logic/SideFilter/SideFilterLogic";
import Spinner from './../../Utilites/Loader/Spinner';
import Disconnect from "../../Utilites/Disconnect/Disconnect";

const HomePage = () => {
  const [limit,sort,priceLowerThanString,,,page,categoryQueryString,,,,,]=SideFilterLogic()
  const [data]=ProductsLogic(page,limit,sort,priceLowerThanString,categoryQueryString)
  document.title='Home'
  return (
    <>
    <Offline><Disconnect/></Offline>
  <div className="container-fluid p-5">
    <MainSlider/>
  <CategoriesSliderComponent/>
  {data ? (
              <div className="row mt-5">
                {data?.data?.data?.length>0?data?.data?.data?.slice(0,12).map((product, index) => (
                  <div className="  col-lg-2 col-md-3 col-sm-6" key={index}>
                    <ProductCardComonent products={product} />
                  </div>
                )):''}
              </div>
            ) : (
              <Spinner />
            )}

  </div>
    </>
  )
}

export default HomePage