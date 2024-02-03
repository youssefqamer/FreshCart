import Slider from "react-slick";
import CategorySliderLogic from "../../Logic/CategorySlider/CategorySliderLogic"
import Spinner from "../../Utilites/Loader/Spinner";

const CategoriesSliderComponent = () => {
    const [data,isLoading]=CategorySliderLogic()
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 2,
        autoplay:true,
        autoplaySpeed:3000,
        draggable:true,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
              }
            },
          ]
      };
  return (
    <>
    {!isLoading?<Slider {...settings}>
      {data?.data?.data?.map((image,index)=><div key={index}>
        <img style={{cursor:'grab',height:300}} className="w-100" key={index} src={image.image} alt="" />
        
      </div>)}
      </Slider>:<Spinner/>}
    
    </>
  )
}

export default CategoriesSliderComponent