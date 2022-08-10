import React from 'react'

export default function MobileApp() {
  return (
    <div className="bg-brand-color bg-mobile-app md:rounded-lg text-white flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="flex flex-col gap-y-3 p-10 ">
          <h3 className="text-2xl font-bold tracking-tight">Getir'i indirin!</h3>
          <p className="font-medium">İstediğiniz ürünleri dakikalar içinde kapınıza<br />getirelim.</p>
            <div className="flex flex-wrap justify-center md:flex-nowrap gap-2 mt-2">
            <a href="#" className="hover:scale-105 transition-transform">
                  <img
                    src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"/>
                </a>
                <a href="#" className="hover:scale-105 transition-transform">
                  <img
                    src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"/>
                </a>
                <a href="#" className="hover:scale-105 transition-transform">
                  <img
                    src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"/>
                </a>
            </div>
        </div>
        <div className="self-end pt-8">
					<img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png"/>
				</div>
    </div>
  )
}
