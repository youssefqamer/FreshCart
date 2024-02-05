import { Link } from 'react-router-dom';
import LoginLogic from './../../Logic/Login/LoginLogic';
import styles from './LoginPage.module.css'
const LoginPage = () => {
  const [formik,errorMsg,isLoading]=LoginLogic()

  return (
    <>

<div className={styles.container}>
  <div className={styles.heading}>Sign In</div>
  <form  className={styles.form} onSubmit={formik.handleSubmit}>
  {errorMsg?<div className="mt-1 alert alert-danger p-1">{errorMsg}</div>:''}
    <input type="email" id="email"  className={`form-control shadow-none ${
      formik.errors.email && formik.touched.email ? 'is-invalid' : formik.values.email && !formik.errors.email ? 'is-valid' :formik.values.email&&formik.errors.email?'is-invalid':''} ${styles.input}`} name="email" placeholder="E-mail" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
    {formik.errors.email && formik.touched.email ? 
  <div className="mt-1 alert alert-danger p-1">{formik.errors.email}</div>
: null}

    <input type="password" id="password"  className={`form-control shadow-none  ${styles.input} ${
      formik.errors.password && formik.touched.password ? 'is-invalid' : formik.values.password && !formik.errors.password ? 'is-valid' :formik.values.password&&formik.errors.password?'is-invalid':''} `} name="password" placeholder="Password"  value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
    {formik.errors.password && formik.touched.password ? 
  <div className="mt-1 alert alert-danger p-1">{formik.errors.password}</div>
: null}
   <div className='d-flex justify-content-center align-items-center flex-wrap my-2'>
        <span className='me-1'>New to FreshCart? </span> 
        <Link to='/FreshCart/register' className=' fw-bold' style={{color:'#0aad0a'}}>Create an account</Link>
      </div>
    <Link to='/FreshCart/forgotPassword' className={`${styles.forgotPassword} fs-6` }>Forgot password ?</Link>
    <button  type="submit" className={`${styles.loginButton} btn ${isLoading?'disabled':''}` }  disabled={Object.keys(formik.errors).length > 0 || !formik.dirty || !formik.isValid}>{isLoading?<i className="fa-solid fa-spinner fa-spin  "></i>:'Login'}</button>
  </form>

</div>
  

    </>
  )
}

export default LoginPage