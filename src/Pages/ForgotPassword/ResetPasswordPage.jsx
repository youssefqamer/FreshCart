import ResetPasswordLogic from "../../Logic/ForgotPassword/ResetPasswordLogic"

import styles from './ForgotPasswordPage.module.css'

const ResetnewPasswordPage = () => {
  const [formik,isLoading]=ResetPasswordLogic()

  return (
    <>
     <div className={styles.container}>
  <div className={styles.heading}>Change Password</div>
  <form  className={styles.form} onSubmit={formik.handleSubmit}>
      <div className="form-group mb-2">
    <input type="password" id="newPassword" placeholder="New Password"  className={`form-control shadow-none ${styles.input} ${
      formik.errors.newPassword && formik.touched.newPassword ? 'is-invalid' : formik.values.newPassword && !formik.errors.newPassword ? 'is-valid' :formik.values.newPassword&&formik.errors.newPassword?'is-invalid':''}`} name="newPassword" value={formik.values.newPassword} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
    {formik.errors.newPassword && formik.touched.newPassword ? 
  <div className="mt-1 alert alert-danger p-1">{formik.errors.newPassword}</div>
: null}
      </div>
      <div className="form-group mb-2">
    <input type="password" id="confirmPassword" placeholder="Confirm Password"  className={`form-control shadow-none ${styles.input} ${
      formik.errors.confirmPassword && formik.touched.confirmPassword ? 'is-invalid' : formik.values.confirmPassword && !formik.errors.confirmPassword ? 'is-valid' :formik.values.confirmPassword&&formik.errors.confirmPassword?'is-invalid':''}`} name="confirmPassword" value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
    {formik.errors.confirmPassword && formik.touched.confirmPassword ? 
  <div className="mt-1 alert alert-danger p-1">{formik.errors.confirmPassword}</div>
: null}
      </div>
      <button  type="submit" className={`btn ${styles.resetButton} w-50 d-block m-auto ${isLoading?'disabled':''}` }  disabled={Object.keys(formik.errors).length > 0 || !formik.dirty || !formik.isValid}>{isLoading?<i className="fa-solid fa-spinner fa-spin  "></i>:'Save'}</button>

      </form>

    </div>
    </>
  )
}

export default ResetnewPasswordPage