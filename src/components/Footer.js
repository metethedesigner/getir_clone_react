import Menu from 'components/ui/Menu';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import {FiGlobe} from 'react-icons/fi';

export default function Footer() {

  const menus = [
    {
      title: 'Getir\'i Keşfedin',
      items: [
        {
          title: 'Hakkımızda'
        },
        {
          title: 'Kariyer'
        },
        {
          title: 'İletişim'
        },
        {
          title: 'COVID-19 Duyuru'
        },
        {
          title: 'Sosyal Sorumluluk Projeleri'
        }
      ]
    },
    {
      title: 'Yardıma mı ihtiyacınız var?',
      items: [
        {
          title: 'Sıkça Sorulan Sorular'
        },
        {
          title: 'Kişisel Verilerin Korunması'
        },
        {
          title: 'Gizlilik Politikası'
        },
        {
          title: 'Kullanım Koşulları'
        },
        {
          title: 'Çerez Politikası'
        }
      ]
    },
    {
      title: 'İş Ortağımız Olun',
      items: [
        {
          title: 'Bayimiz Olun'
        },
        {
          title: 'Deponuzu Kiralayın'
        },
        {
          title: 'GetirYemek Restoranı Olun'
        },
        {
          title: 'GetirÇarşı İşletmesi Olun'
        },
        {
          title: 'Zincir Restoranlar'
        }
      ]
    }
  ]


  return (
    <div className='bg-white mt-10'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 pt-10 gap-y-6 justify-center text-center md:text-left'>
          <section>
            <nav className='grid gap-y-4 font-semibold justify-center md:justify-start'>
              <h6 className='text-md text-primary-brand-color'>Getir'i indirin!</h6>

              <a href="#">
                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"/>
              </a>
              <a href="#">
                <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"/>
              </a>
              <a href="#">
                <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"/>
              </a>
            </nav>
          </section>
          {menus.map((menu, index) => <Menu key={index} {...menu} /> )}
        </div>
        <div className='flex flex-col md:flex-row gap-y-4 justify-between items-center border-t border-gray-300 mt-6 py-6'>
          <div className='text-xs text-gray-700 flex gap-x-8'>
            &copy; 2021 Getir
            <a href="#" className='text-primary-brand-color hover:underline'>Bilgi Toplumu Hizmetleri</a>
          </div>
          <nav className='flex gap-x-3 items-center'>
            <a href="#" className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700">
              <FaFacebook size={20}/>
            </a>
            <a href="#" className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700">
              <FaTwitter size={20}/>
            </a>
            <a href="#" className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-700">
              <FaInstagram size={20}/>
            </a>
            <a href="#" className='transition-colors h-2 flex items-center px-2 text-sm gap-x-2 text-gray-600 hover:bg-purple-50 hover:text-purple-700'>
              <FiGlobe size={18}/>
              Türkçe (TR)
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
