import { useFormik } from "formik"
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { useMutation } from "react-query";
import UsePostData from "../../Hooks/UsePostData";
import { useEffect, useState } from "react";

const RegisterLogic = () => {
  const [errorMsg,setErrorMsg]=useState('')
  const navigate=useNavigate()

  
  const validateSchema = Yup.object({
    name: Yup.string().min(2,"min length 2 letters").max(10,'max length 10 letters').required('Name is required'),
    email:Yup.string().email('Email is not valid').required('Email is required'),
    password:Yup.string().matches(/^[A-Za-z][0-9]{5,8}$/,'Password should start with  letter then 5 numbers').required('Password is required'),
    rePassword:Yup.string().oneOf([Yup.ref('password')],'Confirm password should match password ').required('Confirm password is required'),
    phone:Yup.string().matches(/^01[0-9]{9}$/,'must start with 01 then 9 numbers').required('Phone is required')
  });
  let formik=useFormik({
    initialValues:{
      name: "",
      email:"",
      password:"",
      rePassword:"",
      phone:"",
    },validationSchema:validateSchema,
    onSubmit: (values) => {
      signUpMutation.mutate(values)
      }
  
  })

  const signUpMutation = useMutation(async (values) => {
    setErrorMsg('')
    return UsePostData('/api/v1/auth/signup', values)
  });
  const {data,isLoading}=signUpMutation
useEffect(() => {
if (signUpMutation.isLoading===false) {
  if (data?.data?.message==='success') {
   navigate('/FreshCart/login')
  }else if(data?.response?.data?.statusMsg==='fail'){
    setErrorMsg(data?.response?.data?.message)
  }
}

}, [signUpMutation])



return [formik,errorMsg,isLoading]
}

export default RegisterLogic