import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { Toaster } from "react-hot-toast"


const MasterLayout = () => {
  
  return (
    <>
    <Navbar />
    <Outlet></Outlet>
    <Toaster/>
    <Footer/>
    </>
  )
}

export default MasterLayout