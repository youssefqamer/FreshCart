import ChangePasswordLogic from "../../Logic/profile/ChangePasswordLogic"


const ChangeUserPasswordComponent = () => {
  const [formik,isLoading]=ChangePasswordLogic()
  
  return (
    <>
       <form onSubmit={formik.handleSubmit} className="my-2">
        <p className="fw-bolder">Chnage your password :</p>
        <input name="currentPassword" type="password" className={`form-control mt-2 ${
      formik.errors.currentPassword && formik.touched.currentPassword ? 'is-invalid' : formik.values.currentPassword && !formik.errors.currentPassword ? 'is-valid' :formik.values.currentPassword&&formik.errors.currentPassword?'is-invalid':''}`} placeholder="Current Password" style={{maxWidth:'300px'}} value={formik.values.currentPassword} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
   {formik.errors.currentPassword && formik.touched.currentPassword ? 
  <div className="mt-1 alert alert-danger p-1" style={{maxWidth:'300px'}}>{formik.errors.currentPassword}</div>
: null}
        <input name="password" type="password" className={`form-control mt-2 ${
      formik.errors.password && formik.touched.password ? 'is-invalid' : formik.values.password && !formik.errors.password ? 'is-valid' :formik.values.password&&formik.errors.password?'is-invalid':''}`} placeholder="password" style={{maxWidth:'300px'}} value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.errors.password && formik.touched.password ? 
  <div className="mt-1 alert alert-danger p-1" style={{maxWidth:'300px'}}>{formik.errors.password}</div>
: null}

        <input name="rePassword" type="password" className={`form-control mt-2 ${
      formik.errors.rePassword && formik.touched.rePassword ? 'is-invalid' : formik.values.rePassword && !formik.errors.rePassword ? 'is-valid' :formik.values.rePassword&&formik.errors.rePassword?'is-invalid':''}`} placeholder="Confirm password" style={{maxWidth:'300px'}} value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
         {formik.errors.rePassword && formik.touched.rePassword ? 
  <div className="mt-1 alert alert-danger p-1" style={{maxWidth:'300px'}}>{formik.errors.rePassword}</div>
: null}
   
        <button  type="submit" className={`btn btn-secondary my-2 ${isLoading?'disabled':''}` }  disabled={Object.keys(formik.errors).length > 0 || !formik.dirty || !formik.isValid}>{isLoading?<i className="fa-solid fa-spinner fa-spin  "></i>:'Chnage password'}</button>
</form>
    
    </>
  )
}

export default ChangeUserPasswordComponent