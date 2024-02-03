import googlePlay from '../../assets/images/google play.webp'
import appStore from '../../assets/images/App store.png'
import amazon from '../../assets/images/Amazon-Pay-1.png.webp'
import paypal from '../../assets/images/بيبال-paypal-3.png'
import masterCard from '../../assets/images/png-clipart-logo-debit-mastercard-graphics-debit-card-mastercard-text-orange.png'
const Footer = () => {
  return (
    <footer className="position-static  bg-main-light py-3 mt-4" >
      <div className="container-fluid  p-5 ">
   
    <h5>Get the FreshCart app</h5>
    <p className="text-muted mb-2">We will send you a link, open it on your phone to download the app</p>
    <div className="row mb-5 gy-2">
      <div className="col-md-9">
      <input type="email" className="form-control" />
      </div>
      <div className="col-md-3 ">
      <button className="btn bg-main text-white">Share App Link</button>
      </div>
    </div>
    <div className="row  text-center ">
      <div className="col-md-8">
        <div className='d-flex flex-wrap  align-items-center'>
      <p className='mt-2'>Payment partners</p>
      <img src={amazon} alt=""  className='ms-1' style={{width:'40px'}}/>
      <img src={paypal} alt=""  className='ms-1' style={{width:'40px'}}/>
      <img src={masterCard} alt=""  className='ms-1' style={{width:'40px'}}/>
        </div>
      </div>
      <div className="col-md-4">
    <div className="d-flex flex-wrap align-items-center">

    <h6 className='me-1 mt-2'>Get delivers with FreshCart</h6>
    <div>
    <img src={googlePlay} alt="" style={{width:'65px'}}/>
    <img src={appStore} alt="" style={{width:'65px'}}/>
    </div>
    </div>
      </div>
    </div>
      <hr />
    </div>
    
    </footer>
  )
}
export default Footer