import { useEffect } from "react";
import VerifyCodeLogic from "../../Logic/ForgotPassword/VerifyCodeLogic"
import styles from './ForgotPasswordPage.module.css'

const VerifyCodePage = () => {
    const [formik,handleInputChange,handleInputKeyDown,inputRefs,isLoading]=VerifyCodeLogic()
    useEffect(() => {
        inputRefs.current[0]?.focus();
      }, []);
  return (
    <>
<div className={styles.container}>
  <div className={styles.heading}>Verify code</div>
  <form  className={styles.form} onSubmit={formik.handleSubmit}>
<div className="password">
            {[...Array(6)].map((_, index) => (
            <input
            ref={(ref) => (inputRefs.current[index] = ref)}
              key={index}
              maxLength={1}
              className="verify-input "
              name={`resetCode[${index}]`}
              type="tel"
              value={formik.values.resetCode[index] || ''}
            onChange={(event) => {
                formik.handleChange(event);
                handleInputChange(event, index);
              }}
              onKeyDown={(event) => handleInputKeyDown(event, index)}
            />
          ))}
</div>
<button  type="submit" className={`btn ${styles.resetButton}  m-auto w-75 mt-5 mb-5 ${isLoading?'disabled':''}`}>{isLoading?<i className="fa-solid fa-spinner fa-spin  "></i>:'Verify'}</button>
</form>
        </div>
    </>
  )
}

export default VerifyCodePage