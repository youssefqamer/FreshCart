import { Link, NavLink, useNavigate } from "react-router-dom"
import logo from '../../assets/images/freshcart-logo.svg'
import {  useEffect, useState } from "react"
import LoginLogic from "../../Logic/Login/LoginLogic"
import GetUserCartLogic from "../../Logic/Cart/GetUserCartLogic"
const Navbar = () => {
  const [,,,numOfCartItems]=GetUserCartLogic(localStorage.getItem('token'))
    const [,,,userToken]=LoginLogic()
  const [token,setToken]=useState(userToken|| '')
  const [userName,setUserName]=useState('')
  const [screenSize,setScreenSize]=useState(null)
  const navigate=useNavigate()
useEffect(() => {
    if (localStorage.getItem('token')){
        setToken(localStorage.getItem('token'))
       
      let userData=(JSON.parse(localStorage.getItem('userData')))
      setUserName(userData?.name)
    }
  }, [localStorage.getItem('token')])

const logOut=()=>{
  localStorage.removeItem('token')
  localStorage.removeItem('userData')
  setToken('')
  setUserName('')
  navigate('/FreshCart/login')
  window.location.reload()
}
const hadleResize=()=>{
  setScreenSize(window.innerWidth)
}
useEffect(() => {
  window.addEventListener('resize',hadleResize)
  hadleResize()
  return() =>window.removeEventListener('resize',hadleResize)
}, [screenSize])

  return (
   <>
  <nav className="navbar navbar-expand-xl navbar-light bg-light">
  <div className="container-fluid px-5 ">
    <Link className="navbar-brand" to='/'>
      <img src={logo} alt="FreshCart" />
    </Link>
    <button className="navbar-toggler d-xl-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="collapsibleNavId">
      {token? <ul className="navbar-nav me-auto mt-2 mt-lg-0  ">
        <li className="nav-item">
          <NavLink className={({ isActive}) => {
    return isActive ? "text-main nav-link fw-bold" : 'nav-link';
  }} to='/FreshCart/'>Home</NavLink>
        </li>

        <li className="nav-item text-white-50">
          <NavLink className={({ isActive}) => {
    return isActive ? " nav-link text-main fw-bold" : 'nav-link';
  }} to='/FreshCart/products'>Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({ isActive}) => {
    return isActive ? "text-main nav-link fw-bold" : 'nav-link';
  }} to='/FreshCart/brands'>Brands</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({ isActive}) => {
    return isActive ? "text-main nav-link fw-bold" : 'nav-link';
  }} to='/FreshCart/categories'>Categories</NavLink>
        </li>
        <li className="nav-item cart ">
          <NavLink className={({ isActive}) => {
    return isActive ? "text-main nav-link fw-bold" : 'nav-link';
  }} to='/FreshCart/cart'>
          <span className='position-relative px-xl-2'>Cart <i className="fa-solid fa-cart-plus "></i>
          <span className=' px-2 mb-5 rounded-2 bg-main text-white cart-badge'>{numOfCartItems||0}</span> 
          </span>
          </NavLink>
        </li>
      
      
      </ul>:""}
     
      <ul className={`navbar-nav ${screenSize>1200?'align-items-center':''} ms-auto    mt-2 mt-lg-0`} >
      <li className="nav-item">
        <i className="fab fa-facebook mx-1"></i>
        <i className="fab fa-twitter mx-1"></i>
        <i className="fab fa-instagram mx-1"></i>
        <i className="fab fa-tiktok mx-1"></i>
        <i className="fab fa-linkedin mx-1"></i>
        <i className="fab fa-youtube mx-1"></i>
        </li>
      {token?  <li className="nav-item px-1 dropdown">     
         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         <div style={{width:'38px',height:'38px',borderRadius:'50%',backgroundColor:'green',cursor:'pointer'}} className=" text-white fw-bold d-flex justify-content-center align-items-center ">{userName?.split('').slice(0,1).join('')}
          </div>
</a>

 <ul className="dropdown-menu p-2" aria-labelledby="navbarDropdown">
 <li className="nav-item user-info" >
          <NavLink className={({ isActive}) => {
    return isActive ? "text-main nav-link fw-bold" : 'nav-link';
  }} to='/FreshCart/profile'>Profile</NavLink>
        </li>
 <li className="nav-item user-info" >
          <NavLink className={({ isActive}) => {
    return isActive ? "text-main nav-link fw-bold" : 'nav-link';
  }} to='/FreshCart/favorite'>Favorite</NavLink>
        </li>
 <li className="nav-item user-info" >
          <NavLink className={({ isActive}) => {
    return isActive ? "text-main nav-link fw-bold" : 'nav-link';
  }} to='/FreshCart/address'>Addresses</NavLink>
        </li>
 <li className="nav-item user-info" >
          <NavLink className={({ isActive}) => {
    return isActive ? "text-main nav-link fw-bold" : 'nav-link';
  }} to='/FreshCart/allorders'>My orders</NavLink>
        </li>
</ul>

        
        </li>:''}
        {token? <li className="nav-item">
        <Link onClick={logOut}  className="nav-link  " aria-current="page" ><button className="Btn">
  <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
  
  <div className="text">Logout</div>
</button>
</Link>
        </li>:<>

        <li className="nav-item">
          <NavLink className={({ isActive}) => {
    return isActive ? "text-main nav-link fw-bold" : 'nav-link';
  }} to='/FreshCart/register'>Signup</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className={({ isActive}) => {
    return isActive ? "text-main nav-link fw-bold" : 'nav-link';
  }} to='/FreshCart/login'>Login</NavLink>
        </li>
        </>}
      </ul>
    
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar