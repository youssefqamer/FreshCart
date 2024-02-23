import { useEffect, useState } from "react"

const SideFilterLogic = () => {
    const [limit,setLimit]=useState(sessionStorage.getItem('limit')||'40')
    const [sort,setSort]=useState(sessionStorage.getItem('sortBy')||'')
    const [selectedCategories,setSelectedCategories]=useState(sessionStorage.getItem('categories')?sessionStorage.getItem('categories').split(","):[]) 
    const [categoryQueryString, setCategoryQueryString] = useState("");
  
    let [PriceLowerThan,setPriceLowerThan]=useState(sessionStorage.getItem('priceLowerThan')||'')
  
    let priceLowerThanString=''
    if (PriceLowerThan===0||PriceLowerThan==='') {
      priceLowerThanString=''
    }else{
      priceLowerThanString=`&price[lte]=${PriceLowerThan}`
    } 
  

    const [page, setPage] = useState(1)
    const handlePageChange=(value)=>{
        setPage(value)
      }
    const handleLimit=(e)=>{
        sessionStorage.setItem('limit',e.target.value)
        setLimit(e.target.value)
      }
      const handleSort=(e)=>{
        sessionStorage.setItem('sortBy',e.target.value)
        setSort(e.target.value)
      }
      useEffect(() => {
        // Retrieve the value from session storage
        const savedValue = sessionStorage.getItem("priceLowerThan");
        if (savedValue) {
          setPriceLowerThan(savedValue);
        }
      }, []);
      const handlePriceLowerThan = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, ""); // Remove any non-numeric characters
            setPriceLowerThan(value);
          
        sessionStorage.setItem("priceLowerThan", value);
      };
    
      const handleChackedCategories=(e)=>{
        if (e.target.value==='0') {
          setSelectedCategories([])
        }else if (e.target.checked) {
          setSelectedCategories((prevState)=>[...prevState,e.target.value])
          
        }else if (!e.target.checked) {
          setSelectedCategories((prevSelectedCategories) =>
          prevSelectedCategories.filter((category) => category !== e.target.value)
        );
        }
      }
      useEffect(() => {
        sessionStorage.setItem('categories',selectedCategories)
      }, [selectedCategories])
      useEffect(() => {
        setCategoryQueryString(selectedCategories?.map((categoryId) => `category[in]=${categoryId}`).join("&"));
        sessionStorage.setItem("checkedCategories", categoryQueryString);
      }, [selectedCategories, categoryQueryString]);
      return[limit,sort,priceLowerThanString,PriceLowerThan,selectedCategories,page,categoryQueryString,handlePageChange,handleLimit,handleSort,handlePriceLowerThan,handleChackedCategories]
}

export default SideFilterLogic