import ForgotPasswordLogic from "../../Logic/ForgotPassword/ForgotPasswordLogic"
import styles from './ForgotPasswordPage.module.css'

const ForgotPasswordPage = () => {
    const [formik,isLoading,emailMsgError]=ForgotPasswordLogic()
  return (
    <>
<div className={styles.container}>
  <div className={styles.heading}>Reset Password</div>
  <form  className={styles.form} onSubmit={formik.handleSubmit}>
        <input type="email" name="email" value={formik.values.email} placeholder="enter your email"   className={`form-control shadow-none ${styles.input} ${
      formik.errors.email && formik.touched.email ? 'is-invalid' : formik.values.email && !formik.errors.email ? 'is-valid' :formik.values.email&&formik.errors.email?'is-invalid':''}`}
        onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.email&&formik.touched.email?<div className="mt-1 alert alert-danger p-1">{formik.errors.email}</div>:''}
        {emailMsgError?<div className="mt-1 alert alert-danger p-1">{emailMsgError}</div>:''}
        <button className={`btn ${styles.resetButton} m-auto d-block w-100 my-3 ${isLoading?'disabled':''}`} disabled={Object.keys(formik.errors).length > 0 || !formik.dirty || !formik.isValid}>{isLoading?<i className="fa-solid fa-spinner fa-spin  "></i>:'Send code'}</button>
    </form>
   </div>
    
    
    </>
  )
}

export default ForgotPasswordPage