import React, { useState } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ReactFlagsSelect from "react-flags-select";
import { FaFacebook } from "react-icons/fa";
import { useWindowWidth } from '@react-hook/window-size'

export default function HeroSection() {

  const [selected, setSelected] = useState("TR");

  const windowWidth = useWindowWidth()

  const flags = {
    US: '+1',
    DE: '+49',
    TR: '+90',
    IT: '+39',
    FR: '+33'
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 750,
    autoplaySpeed: 3500,
    cssEase: "linear"
  };

  return (
    <div className='relative before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-[full] before:z-10'>
        {windowWidth >= 768 && <Slider {...settings}>
          <div>
            <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"/>
          </div>
          <div>
            <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"/>
          </div>
        </Slider>}
        <div className='md:container flex justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20'> 
              <div className="hidden md:block">
                  <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="slider-logo" />
                  <h3 className='mt-8 text-white text-4xl font-semibold'>
                      Dakikalar içinde <br /> kapınızda
                  </h3>
              </div>

              <div className='w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6'>
                <h4 className='text-primary-brand-color text-center font-semibold mb-4'>Giriş yap veya Kayıt Ol</h4>
                
                <div className="grid gap-y-3">
                    
                    <div className="flex gap-x-2">
                        <ReactFlagsSelect
                          countries={Object.keys(flags)}
                          customLabels={flags}
                          selected={selected}
                          onSelect={code => setSelected(code)}
                          className="flag-select"
                        />
                        <label className="flex-1 relative">
                          <input required className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-primary-brand-color outline-none peer text-xs pt-2" />
                          <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-8 peer-focus:text-xs peer-focus:text-primary-brand-color peer-valid:h-8 peer-valid:text-xs peer-valid:text-primary-brand-color">Telefon Numarası</span>
                        </label>
                    </div>
                    
                      <button className="bg-brand-yellow h-12 flex items-center justify-center rounded-md w-full font-sm text-primary-brand-color font-semibold transition-colors hover:bg-primary-brand-color hover:text-brand-yellow">
                            Telefon numarası ile devam et
                      </button>

                      <div className="h-[1px] bg-gray-300"></div>

                      <button className="bg-blue-700 bg-opacity-10 h-12 px-4 flex items-center rounded-md w-full font-sm text-primary-brand-color font-semibold transition-colors hover:bg-blue-700 hover:text-white">
                            <FaFacebook size={24}/>
                            <span className="mx-auto">Facebook ile devam et</span>
                      </button>
                    </div>
                
              </div>
          </div>
    </div>
  )
}
