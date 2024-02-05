import { useFormik } from 'formik'
import { useMutation } from 'react-query';
import * as Yup from 'yup';
import UsePostData from '../../Hooks/UsePostData';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ForgotPasswordLogic = () => {
    const navigate=useNavigate()
    const [emailMsgError, setEmailMsgError] = useState('')
    const validateSchema=Yup.object({
        email:Yup.string().email("Email is not valid").required('Email is required')
    })
    const formik=useFormik({
        initialValues:{
            email:'',
        },validationSchema:validateSchema,
        onSubmit:(values)=>{
            forgotPasswordMuaton.mutate(values)
        }
    })

    const forgotPasswordMuaton=useMutation(async(values)=>{
        try {
            setEmailMsgError('')
            return UsePostData(`/api/v1/auth/forgotPasswords`, values);
          } catch (error) {
            
           return error
         
          }    })
    const {data,isLoading,error}=forgotPasswordMuaton
    useEffect(() => {
  if (data) {
    if (data?.data?.statusMsg==='success') {
        localStorage.setItem('userEmail',formik.values.email)
        navigate('/FreshCart/verifyCode')
    }else{
        setEmailMsgError(data?.response?.data?.message);
    }
}
    }, [data,error])
   
    return[formik,isLoading,emailMsgError]
}

export default ForgotPasswordLogic