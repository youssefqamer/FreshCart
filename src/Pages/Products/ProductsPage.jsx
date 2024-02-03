import ProductsLogic from '../../Logic/Products/ProductsLogic'
import ProductCardComonent from '../../Components/Products/ProductCardComonent';
import Loader from '../../Utilites/Loader/Loader';
import SideFilterComponent from './../../Components/SideFilter/SideFilterComponent';
import PaginationComponent from '../../Components/Pagination/PaginationComponent';
import SideFilterLogic from '../../Logic/SideFilter/SideFilterLogic';
import noProductFound from '../../assets/images/no-product.png'

const ProductsPage = () => {

  const [limit,sort,priceLowerThanString,PriceLowerThan,selectedCategories,page,categoryQueryString,handlePageChange,handleLimit,handleSort,handlePriceLowerThan,handleChackedCategories]=SideFilterLogic()
  const [data]=ProductsLogic(page,limit,sort,priceLowerThanString,categoryQueryString)
  document.title='Products'
  return (
   <>
 <div className="container-fluid  py-5 p-5  mb-5">
  
   <div className=" row">
   <div className="col-xl-2    "  >
    <div>
    <SideFilterComponent limit={limit} sort={sort}   selectedCategories={selectedCategories} PriceLowerThan={PriceLowerThan} handleLimit={handleLimit} handleSort={handleSort} handlePriceLowerThan={handlePriceLowerThan} handleChackedCategories={handleChackedCategories}/>
    </div>
  </div>

 <div className="col-xl-10   " >
  <div>

            {data ? (
              <div className="row">
                {data?.data?.data?.length>0?data?.data?.data?.map((product, index) => (
                  <div className="col-lg-2 col-md-3 col-sm-6" key={index}>
                    <ProductCardComonent products={product} />
                  </div>
                )):<div className='m-auto text-center no-products'>
                  <img src={noProductFound} alt="" className='w-100   mb-1'/>
                  <p className='fw-bold fs-4'>No Products Avaliable</p>
                  </div>}
              </div>
            ) : (
              <Loader />
            )}
          </div>


          </div>

    </div>
    {data?.data?.metadata?.numberOfPages>1?<PaginationComponent currentPage={page} totalPages={data?.data?.metadata?.numberOfPages} onPageChange={handlePageChange}/>
:''}
   </div>
   
   
   </>
  )
}

export default ProductsPage