import MasterLayout from './Components/MasterLayout/MasterLayout';
import HomePage from './Pages/HomePage/HomePage';
import ProtectedRoute from './Utilites/ProtectedRoute/ProtectedRoute';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import NotFoundpage from './Pages/NotFoundpage/NotFoundpage';
import CartPage from './Pages/CartPage/CartPage';
import Addressespage from './Pages/Addresses/Addressespage';
import ProfliePage from './Pages/Profile/ProfliePage';
import AddAddressPage from './Pages/Addresses/AddAddressPage';
import ForgotPasswordPage from './Pages/ForgotPassword/ForgotPasswordPage';
import VerifyCodePage from './Pages/ForgotPassword/VerifyCodePage';
import ResetPasswordPage from './Pages/ForgotPassword/ResetPasswordPage';
import FavoritePage from './Pages/Favorite/FavoritePage';
import PaymentMethodPage from './Pages/Payment/PaymentMethodPage';
import {  Suspense, lazy } from 'react';
import Loader from './Utilites/Loader/Loader';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
const ProductsPage=lazy(()=>import('./Pages/Products/ProductsPage'))
const BrandsPage=lazy(()=>import('./Pages/BrandsPage/BrandsPage'))
const CategoriesPage=lazy(()=>import('./Pages/Categories/CategoriesPage'))
const UserAllOrdersPage=lazy(()=>import('./Pages/AllOrders/UserAllOrdersPage'))
const ProductDetailsPage=lazy(()=>import('./Pages/Products/ProductDetailsPage'))
function App() {
let routers=createBrowserRouter([
  {path:'/FreshCart/' ,element:<MasterLayout/>,children:[
    {index:true,element:<ProtectedRoute><HomePage /></ProtectedRoute>},
    {path:'/FreshCart/register',element:<RegisterPage/>},
    {path:'/FreshCart/login',element:<LoginPage/>},
    {path:'/FreshCart/forgotPassword',element:<ForgotPasswordPage/>},
    {path:'/FreshCart/verifyCode',element:<VerifyCodePage/>},
    {path:'/FreshCart/resetPassword',element:<ResetPasswordPage/>},
    {path:'/FreshCart/brands',element:<ProtectedRoute><Suspense fallback={<Loader/>}><BrandsPage/></Suspense></ProtectedRoute>},
    {path:'/FreshCart/categories',element:<ProtectedRoute><Suspense fallback={<Loader/>}><CategoriesPage/></Suspense></ProtectedRoute>},
    {path:'/FreshCart/cart',element:<ProtectedRoute><CartPage/></ProtectedRoute>},
    {path:'/FreshCart/products',element:<ProtectedRoute><Suspense fallback={<Loader/>}><ProductsPage/></Suspense></ProtectedRoute>},
    {path:'/FreshCart/productDetails/:id',element:<ProtectedRoute><Suspense fallback={<Loader/>}><ProductDetailsPage/></Suspense></ProtectedRoute>},
    {path:'/FreshCart/paymentMethod',element:<ProtectedRoute><PaymentMethodPage/></ProtectedRoute>},
    {path:'/FreshCart/allorders',element:<ProtectedRoute><Suspense fallback={<Loader/>}><UserAllOrdersPage/></Suspense></ProtectedRoute>},
    {path:'/FreshCart/profile',element:<ProtectedRoute><ProfliePage/></ProtectedRoute>},
    {path:'/FreshCart/favorite',element:<ProtectedRoute><FavoritePage/></ProtectedRoute>},
    {path:'/FreshCart/address',element:<ProtectedRoute><Addressespage/></ProtectedRoute>},
    {path:'/FreshCart/add-address',element:<ProtectedRoute><AddAddressPage/></ProtectedRoute>},
    {path:'*',element:<NotFoundpage/>},
  ]}
  ])
  return (
    <>
    <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
