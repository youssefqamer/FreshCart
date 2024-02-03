import AddAddressLogic from "../../Logic/Address/AddAddressLogic"


const AddAddressComponent = () => {
    const [formik,data,isLoading]=AddAddressLogic()
    
  return (
    <>
     <div className='mx-auto bg-light p-5 mt-2'>
        <form onSubmit={formik.handleSubmit}>
   <div className="form-group mb-3">
      <label htmlFor="home">Home</label>
      <input type="text" id="home" className={`form-control ${formik.errors.name&&formik.touched.name?'is-invalid':formik.values.name&&!formik.errors.name?'is-valid':formik.values.name&&formik.errors.name?'is-invalid':''}`} name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.errors.name&&formik.touched.name?<div className="mt-1 alert alert-danger p-1">{formik.errors.name}</div>
: null}
    </div>
   <div className="form-group mb-3">
      <label htmlFor="details">Details</label>
      <input type="text" id="details" className={`form-control ${formik.errors.details&&formik.touched.details?'is-invalid':formik.values.details&&!formik.errors.details?'is-valid':formik.values.details&&formik.errors.details?'is-invalid':''}`} name="details" value={formik.values.details} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.errors.details&&formik.touched.details?<div className="mt-1 alert alert-danger p-1">{formik.errors.details}</div>
: null}
    </div>
    <div className="form-group mb-3">
      <label htmlFor="phone">Phone</label>
      <input type="tel" id="phone" className={`form-control ${formik.errors.phone&&formik.touched.phone?'is-invalid':formik.values.phone&&!formik.errors.phone?'is-valid':formik.values.phone&&formik.errors.phone?'is-invalid':''}`} name="phone" value={formik.values.phone} onChange={formik.handleChange}  onBlur={formik.handleBlur}/>
      {formik.errors.phone&&formik.touched.phone?<div className="mt-1 alert alert-danger p-1">{formik.errors.phone}</div>
: null}
    </div>
    <div className="form-group mb-3">
      <label htmlFor="city">City</label>
      <input type="text" id="city" className={`form-control ${formik.errors.city&&formik.touched.city?'is-invalid':formik.values.city&&!formik.errors.city?'is-valid':formik.values.city&&formik.errors.city?'is-invalid':''}`} name="city" value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.errors.city&&formik.touched.city?<div className="mt-1 alert alert-danger p-1">{formik.errors.city}</div>
: null}
    </div>
    <button className={`btn w-100 text-white bg-main ${isLoading?'disabled':''}`} disabled={Object.keys(formik.errors).length > 0 || !formik.dirty || !formik.isValid}>{isLoading?<i className="fa-solid fa-spinner fa-spin  "></i>:'Add address'}</button>
   </form>
        </div>
    
    </>
  )
}

export default AddAddressComponent