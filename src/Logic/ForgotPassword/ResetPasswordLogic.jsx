import { useFormik } from "formik"
import { useMutation } from "react-query";
import * as Yup from 'yup';
import UseUPdateData from "../../Hooks/UseUPdateData";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const ResetPasswordLogic = () => {
    const navigate=useNavigate()
    const validationSchema=Yup.object({
        newPassword:Yup.string().matches(/^[A-Za-z][0-9]{5,8}$/,'Password should start with  letter then 5 numbers').required('Password is required'),
        confirmPassword:Yup.string().oneOf([Yup.ref('newPassword')],'Confirm password should match password ').required('Confirm password is required'),
    })
    let formik=useFormik({
        initialValues:{
            newPassword:"",
            confirmPassword:"",
        },validationSchema,
        onSubmit:(values)=>{
            resetPasswordMutation.mutate(values)
        }
      })
      const resetPasswordMutation=useMutation(async(values)=>{
        try {
            return await UseUPdateData(`/api/v1/auth/resetPassword`, {
              email: localStorage.getItem('userEmail'),
              newPassword: values.newPassword,
            });
          } catch (error) {
            throw error.response?.data?.message || error.message;
          }
      })
      const {data,isLoading}=resetPasswordMutation
      useEffect(() => {
      if (data) {
        if (data?.token) {
            toast.success('Password saved successfully')
            localStorage.removeItem('userEmail')
            navigate('/FreshCart/login')
        } else if (data?.response?.data?.statusMsg==='fail'){
          toast.error(data?.response?.data?.message)
        }
    
      }   
      }, [isLoading])
      
      return[formik,isLoading]
}

export default ResetPasswordLogic