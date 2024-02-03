import { useFormik } from 'formik'
import { useEffect, useRef } from 'react';
import UsePostData from '../../Hooks/UsePostData';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const VerifyCodeLogic = () => {
    const navigate=useNavigate()
    const inputRefs = useRef(Array(6).fill(null));
 const formik=useFormik({
    initialValues:{
        resetCode:'',
    },
    onSubmit:(values)=>{
        verifyCodeMutation.mutate(values);
        console.log(values);
    }
 })
 const handleInputChange = (event, index) => {
    const value = event.target.value;
    const nextIndex = index + 1;
    const prevIndex = index - 1;

    if (value) {
        if (nextIndex < inputRefs.current.length) {
          inputRefs.current[nextIndex]?.focus();
        }
      } else {
        if (prevIndex >= 0 && !formik.values.resetCode[prevIndex]) {
          return; 
        }
    
        if (index > 0) {
          inputRefs.current[prevIndex]?.focus();
        }
      }
    
  };
  const handleInputKeyDown = (event, index) => {
    if (event.key === 'Backspace' && !event.target.value && index > 0) {
        inputRefs.current[index - 1]?.focus();
        formik.setFieldValue(
          `resetCode`,
          formik.values.resetCode.map((value, i) => (i === index || i === index - 1 ? '' : value))
        );
      }
  };
  const verifyCodeMutation=useMutation(async (values)=>{
    return UsePostData(`/api/v1/auth/verifyResetCode`,{
        resetCode:values.resetCode.join('')
    })
  })
  const {data,isLoading,error}=verifyCodeMutation

  useEffect(() => {
    if (data) {
        if (data?.data?.status==='Success') {
            navigate('/FreshCart/resetPassword')
        }else if(data?.response?.data?.statusMsg==='fail'){
          console.log(error);
            toast.error('Reset code is invalid or has expired')
        }
    }
  }, [data,error])
  useEffect(() => {
    if (formik?.values?.resetCode?.length===6 &&!formik?.values?.resetCode?.includes('')) {
      verifyCodeMutation.mutate(formik?.values)
    }
  }, [formik.values.resetCode])
  
 
 return[formik,handleInputChange,handleInputKeyDown,inputRefs,isLoading]

}

export default VerifyCodeLogic