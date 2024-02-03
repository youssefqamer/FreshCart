import sliderImage1 from '../../assets/images/slider-image-1.jpeg'
import sliderImage2 from '../../assets/images/slider-image-2.jpeg'
import sliderImage3 from '../../assets/images/slider-image-3.jpeg'
import blog1 from '../../assets/images/blog-img-1.jpeg'
import blog2 from '../../assets/images/blog-img-2.jpeg'
import Slider from 'react-slick'
const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000,
    arrows:false,
  }
  return (
   <>
   <div className="container-fluid my-5">
    <div className="row gx-0">
      <div className="col-md-9">
        <Slider {...settings}>
        <img height={400} src={sliderImage1} alt=""  className='w-100'/>
        <img height={400} src={sliderImage2} alt=""  className='w-100'/>
        <img height={400} src={sliderImage3} alt=""  className='w-100'/>
   
      </Slider>
      </div>
      <div className="col-md-3">
      <img height={200} src={blog1} alt=""  className='w-100'/>
      <img height={200} src={blog2} alt=""  className='w-100'/>

      </div>
    </div>
   </div>
   
   
   </>
  )
}

export default MainSlider