import CategorySliderLogic from "../../Logic/CategorySlider/CategorySliderLogic";
import { PropTypes } from 'prop-types';
import Spinner from './../../Utilites/Loader/Spinner';
import { useState } from "react";
import { useEffect } from "react";

const SideFilterComponent = ({limit,sort,selectedCategories,PriceLowerThan,handleLimit,handleSort,handlePriceLowerThan,handleChackedCategories}) => {
  const [data,isLoading]=CategorySliderLogic()
  const [screenResize, setScreenResize] = useState('')
  const [openSideFilter, setOpenSideFilter] = useState(null)


  const hadleResize=()=>{
      setScreenResize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize',hadleResize)
    hadleResize()
    return() =>window.removeEventListener('resize',hadleResize)
  }, [])
  useEffect(() => {
  if (screenResize>1200) {
    setOpenSideFilter(true)
  }else{
    setOpenSideFilter(null)

  }
  }, [screenResize])
  
  
  return (
    <>
   
   <div  className={`side-filter-icon ${screenResize>1200||screenResize===''?'d-none':openSideFilter&&screenResize<1200?'d-none':'d-flex'} `} onClick={()=>setOpenSideFilter(true)} >
    <i className="fa-solid fa-bars fs-4 "></i>
   </div>
    <div   className={`${screenResize > 1200 ? 'd-block' : openSideFilter===null&&screenResize<1200 ? 'd-none':openSideFilter ? 'side-filter-container-open ' : 'side-filter-container-close '} 
  } rounded-3 ${screenResize < 1200 ? 'bg-white shadow px-2 py-3' : ''} `}>
    {screenResize<1200?<div className="d-flex justify-content-between align-items-center">
    {!isLoading?<p className="fw-bold ">Categories</p>:''} 
    <i className="fa-solid fa-circle-xmark fs-3 " style={{cursor:'pointer'}} onClick={()=>setOpenSideFilter(false)}></i>
    </div>:!isLoading?<p className="fw-bold ">Categories</p>:'' }
    
    {data?.data?.data ?<label className="category-container d-flex align-items-center flex-wrap my-3 " style={{fontSize:'15px'}}>
  <input  type="checkbox" value='0' onChange={handleChackedCategories} />
  <div className="checkmark mx-1"  />
  All
</label> : <Spinner/>}
    {data?data?.data?.data?.map((category,index)=>{
        const isChecked = selectedCategories.includes(category?._id);
 return <label className="category-container d-flex align-items-center flex-wrap my-3 " style={{fontSize:'15px'}} key={index}>
  <input  type="checkbox" value={category?._id} onChange={handleChackedCategories}  checked={isChecked}/>
  <div className="checkmark mx-1 "  />
  {category?.name}
</label>
    }):''}
    <hr />
    {/* sort */}
    <p className="fw-bold">Sort by</p>
  <select  className="select mt-3 px-2 mb-1  mb-3" onChange={handleSort} value={sort}>
     <option value="">random</option>
     <option value="+price">price: from low to high</option>
     <option value="-price">price: from high to low</option>
     <option value="-ratingsAverage">top rated</option>
     <option value="-sold">best seller</option>
     </select>
     <hr/>
     {/* price */}
     <p className="fw-bold">Price </p>
    <div className="form-group d-flex flex-wrap  align-items-center ">
    <label htmlFor="lower">Lower than: </label>
     <input id="lower" type="text" inputMode="numeric" pattern="[0-9]*"  className="form-control ms-1" style={{width:'72px'}}    
    value={PriceLowerThan}
    onChange={handlePriceLowerThan}
    />
    </div>
    <hr />
    {/* limit */}
<div >
<p className="fw-bold ">Product per page: </p>
    <select  className="select  px-2" onChange={handleLimit}  value={limit}>
     <option value="40">40</option>
     <option value="25">25</option>
     <option value="15">15</option>
     </select>
</div>
    
   
     </div>
    </>
  )
  }

SideFilterComponent.propTypes = {
  limit: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
  PriceLowerThan: PropTypes.string.isRequired,
  selectedCategories: PropTypes.array.isRequired,
  handleLimit: PropTypes.func.isRequired,
  handleSort: PropTypes.func.isRequired,
  handleChackedCategories: PropTypes.func.isRequired,
  handlePriceLowerThan: PropTypes.func.isRequired,
};
export default SideFilterComponent

