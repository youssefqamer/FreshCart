import { useFormik } from 'formik'
import UsePostDataToken from '../../Hooks/UsePostDataToken'
import { useMutation } from 'react-query'
import * as Yup from 'yup';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const AddAddressLogic = () => {
  const navigate=useNavigate()
    const validateSchema = Yup.object({
        name: Yup.string().min(2,"min length 2 letters").max(10,'max length 10 letters').required('Home is required'),
        details: Yup.string().min(2,"min length 2 letters").required('Details is required'),
        phone:Yup.string().matches(/^01[0-9]{9}$/,'must start with 01 then 9 numbers').required('Phone is required'),
        city: Yup.string().min(2,"min length 2 letters").required('City is required'),
      });
    const formik=useFormik({
        initialValues:{
            "name": "",
            "details": "",
            "phone": "",
            "city": ""
        },validationSchema:validateSchema,
        onSubmit: (values) => {
            addAddress.mutate(values)
            }
     })
  
     const addAddress = useMutation(async (values) => {
       
        return UsePostDataToken('/api/v1/addresses', values)
      });
     const {data,isLoading}=addAddress
     useEffect(() => {
     if (data) {
      if (data.status==='success') {
        toast.success('Address added succefully')
        setTimeout(() => {
          navigate('/FreshCart/address')
        }, 1000);
      }
     }
     }, [data])
     
     return[formik,data,isLoading]
}

export default AddAddressLogic