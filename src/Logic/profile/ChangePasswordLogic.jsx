import { useFormik } from "formik"
import { useMutation } from "react-query";
import * as Yup from 'yup';
import UseUPdateData from './../../Hooks/UseUPdateData';
import { useEffect } from "react";
import toast from "react-hot-toast";

const ChangePasswordLogic = () => {
    const validationSchema = Yup.object({
        currentPassword:Yup.string().matches(/^[A-Za-z][0-9]{5,8}$/,'Password should start with  letter then 5 numbers').required('Password is required'),
        password:Yup.string().matches(/^[A-Za-z][0-9]{5,8}$/,'Password should start with  letter then 5 numbers').required('Password is required'),
        rePassword:Yup.string().oneOf([Yup.ref('password')],'Confirm password should match password ').required('Confirm password is required'),
      });
let formik=useFormik({
    initialValues:{
        currentPassword:"",
        password:"",
        rePassword:""
    },validationSchema,
    onSubmit:(values)=>{
        updateUserPassMutation.mutate(values)
    }
})
const updateUserPassMutation=useMutation(async()=>{
    return UseUPdateData(`/api/v1/users/changeMyPassword`,{
        currentPassword:formik.values.currentPassword,
        password:formik.values.password,
        rePassword:formik.values.rePassword,
    })
})
const {data,isLoading,error}=updateUserPassMutation
useEffect(() => {
  if (!isLoading) {
    if (data?.message==='success') {
        localStorage.setItem('token',data?.token)
        toast.success('Password changed successfully')
       formik.resetForm()
       
    }else if(error){
        toast.error(error?.response?.data?.errors?.msg)
    }
  }
}, [isLoading])

return[formik,isLoading]
}

export default ChangePasswordLogic