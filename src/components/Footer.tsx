import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-estate-DEFAULT text-white pt-16 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-10 w-1 bg-estate-accent mr-2"></div>
              <div className="text-2xl font-bold">КОМВИД</div>
            </div>
            <p className="mb-6 text-gray-300 text-sm">
              Компания специализируется на управлении собственной коммерческой недвижимостью разного целевого назначения.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase">Каталог</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Аренда офисов</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Аренда складов</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Аренда торговых площадей</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Продажа коммерческой недвижимости</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Продажа машиномест</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase">Сотрудничество</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Арендаторам</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Партнерам</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Инвесторам</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Вакансии</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-estate-accent mr-3 mt-1" />
                <div>
                  <a href="tel:+74957920809" className="text-white hover:text-estate-accent">+7 (495) 792-08-09</a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-estate-accent mr-3 mt-1" />
                <div>
                  <a href="mailto:info@komvid.ru" className="text-white hover:text-estate-accent">info@komvid.ru</a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-estate-accent mr-3 mt-1" />
                <div>
                  <p>г. Москва, ул. Профсоюзная, д. 93, к. 4</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-700 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>Обращаем Ваше внимание на то, что информация и приведенные цены размещенные на данном интернет-сайте, носят исключительно информационный характер и ни при каких обстоятельствах не являются публичной офертой.</p>
            <p className="mt-4 md:mt-0">© 2023 КОМВИД</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;