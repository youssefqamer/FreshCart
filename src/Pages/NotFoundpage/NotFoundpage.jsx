import notFound from '../../assets/images/error-page-not-found-vector-27898543.jpg'
const NotFoundpage = () => {
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center  m-auto'>
      <img src={notFound} alt="Page not found " className='w-75'/>
    </div>
  )
}

export default NotFoundpage