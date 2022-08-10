import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Banners from 'api/banners.json';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

function NextBtn ({ onClick }) {
	return (
		<button className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`} onClick={onClick}>
			<IoIosArrowForward size={22} />
		</button>
	)
}

function PrevBtn ({ onClick }) {
	return (
		<button className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`} onClick={onClick}>
			<IoIosArrowBack size={22} />
		</button>
	)
}

export default function Campaignes() {

  const [banners, setBanners] = useState([]);

  useEffect(() =>{
    setBanners(Banners)
  },[])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 750,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: true,
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
    responsive: [
      {
          breakpoint: 1280,
          settings: {
              slidesToShow: 3,
          }
      },
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 2,
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              arrows: false
          }
      }
  ]
};


  return (
    <div className='container mx-auto md:py-8'>
      <h3 className="hidden md:block text-sm font-semibold mb-3">Kampanyalar</h3>
      <Slider {...settings}>
          {banners.length && banners.map((banner, index) => (
            <div key={banner.id}>
              <picture className='block md:px-2'>
                <img src={banner.image} className="md:rounded-lg"/>
              </picture>
            </div>
          ))}
        </Slider>
    </div>
  )
}
