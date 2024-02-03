import RegisterLogic from "../../Logic/RegisterLogic/RegisterLogic"
import styles from './RegisterPage.module.css'

const RegisterPage = () => {
  const [formik,errorMsg,isLoading]=RegisterLogic()
  return (
    <>
  <div className={styles.container}>
  <div className={styles.heading}>Sign up</div>
      <form  className={` mx-auto ${styles.form}`} onSubmit={formik.handleSubmit}>
      <div className="form-group mb-2">
<input type="text" id="name" placeholder='Name' className={`form-control shadow-none ${styles.input} ${
      formik.errors.name && formik.touched.name ? 'is-invalid' : formik.values.name && !formik.errors.name ? 'is-valid' :formik.values.name&&formik.errors.name?'is-invalid':''}`} name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
  {formik.errors.name && formik.touched.name ? 
  <div className="mt-1 alert alert-danger p-1">{formik.errors.name}</div>
: null} 


      </div>
      <div className="form-group mb-2">
    <input type="email" id="email" placeholder='Email'  className={`form-control shadow-none  ${styles.input} ${
      formik.errors.email && formik.touched.email ? 'is-invalid' : formik.values.email && !formik.errors.email ? 'is-valid' :formik.values.email&&formik.errors.email?'is-invalid':''}`} name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
    {errorMsg?<div className="mt-1 alert alert-danger p-1">{errorMsg}</div>:''}
    {formik.errors.email && formik.touched.email ? 
  <div className="mt-1 alert alert-danger p-1">{formik.errors.email}</div>
: null}
      </div>
      <div className="form-group mb-2">
    <input type="password" id="password" placeholder='Password'  className={`form-control shadow-none  ${styles.input} ${
      formik.errors.password && formik.touched.password ? 'is-invalid' : formik.values.password && !formik.errors.password ? 'is-valid' :formik.values.password&&formik.errors.password?'is-invalid':''}`} name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
    {formik.errors.password && formik.touched.password ? 
  <div className="mt-1 alert alert-danger p-1">{formik.errors.password}</div>
: null}
      </div>
      <div className="form-group mb-2">
    <input type="password" id="repassword" placeholder='Confirm password'  className={`form-control shadow-none  ${styles.input} ${
      formik.errors.rePassword && formik.touched.rePassword ? 'is-invalid' : formik.values.rePassword && !formik.errors.rePassword ? 'is-valid' :formik.values.rePassword&&formik.errors.rePassword?'is-invalid':''}`} name="rePassword" value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
    {formik.errors.rePassword && formik.touched.rePassword ? 
  <div className="mt-1 alert alert-danger p-1">{formik.errors.rePassword}</div>
: null}
      </div>
      <div className="form-group mb-2">
    <input type="tel" id="phone" placeholder='Phone'  className={`form-control shadow-none  ${styles.input} ${
      formik.errors.phone && formik.touched.phone ? 'is-invalid' : formik.values.phone && !formik.errors.phone ? 'is-valid' :formik.values.phone&&formik.errors.phone?'is-invalid':''}`} name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
          {formik.errors.phone && formik.touched.phone ? 
  <div className="mt-1 alert alert-danger p-1">{formik.errors.phone}</div>
: null}
      </div>
  
      <button  type="submit" className={`btn ${styles.signupButton} d-block ms-auto ${isLoading?'disabled':''}` }  disabled={Object.keys(formik.errors).length > 0 || !formik.dirty || !formik.isValid}>{isLoading?<i className="fa-solid fa-spinner fa-spin  "></i>:'Register'}</button>

      </form>
    </div>
    
    </>
  )
}

export default RegisterPage