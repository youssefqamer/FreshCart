import { useFormik } from "formik"
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import UsePostData from "../../Hooks/UsePostData";
import GetUserCartLogic from "../Cart/GetUserCartLogic";

const LoginLogic = () => {

  const [errorMsg,setErrorMsg]=useState('')
  const [userToken, setUserToken] = useState(localStorage.getItem('token') ||'');
  const [,,,,,,,getUserCart]=GetUserCartLogic()
   
     const navigate=useNavigate()
    const validateSchema = Yup.object({
      email:Yup.string().email('Email is not valid').required('Email is required'),
      password:Yup.string().matches(/^[A-Za-z][0-9]{5,8}$/,'Password should start with  letter then 5 numbers').required('Password is required'),
    });
    let formik=useFormik({
      initialValues:{
        email:"",
        password:"",
      },validationSchema:validateSchema,
      onSubmit:(values)=>{
        signInMutation.mutate(values)
      }
    })



    const queryClient=useQueryClient()

    const signInMutation = useMutation(async (values) => {
        setErrorMsg('')
        return UsePostData('/api/v1/auth/signin', values)
        
      });
      const {data,isLoading}=signInMutation
    useEffect(() => {
     if (signInMutation.isLoading===false) {
        if (data?.data?.message==='success') {
          
            if (data?.data?.token) {
                localStorage.setItem('token',data?.data?.token)
                setUserToken(data?.data?.token)
                localStorage.setItem('userData',JSON.stringify(data?.data?.user))
                  navigate('/FreshCart/')
                  queryClient.invalidateQueries('cart');
                  getUserCart();
            }
        }else if (data?.response?.data?.statusMsg==='fail') {
          setErrorMsg(data?.response?.data?.message)
      }
     }
    }, [signInMutation])
  return [formik,errorMsg,isLoading,userToken]
}
export default LoginLogic