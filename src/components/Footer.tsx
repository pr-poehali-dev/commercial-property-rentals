import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-estate-DEFAULT py-6 border-t border-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="mb-4 md:mb-0">
            <a href="/" className="flex items-center">
              <img 
                src="/logo-b.svg" 
                alt="КОМВИД" 
                className="h-10 mr-2"
              />
            </a>
          </div>
          
          <div className="flex flex-wrap gap-x-8 gap-y-2 mb-4 md:mb-0">
            <a href="#" className="text-gray-300 hover:text-white text-sm uppercase">Каталог</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm uppercase">Сотрудничество</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm uppercase">Вакансии</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm uppercase">Команда</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm uppercase">Контакты</a>
          </div>
          
          <div className="flex flex-col space-y-2">
            <a href="tel:+74957920809" className="text-white">+7 (495) 792-08-09</a>
            <a href="tel:+74954299990" className="text-white">+7 (495) 429-99-90</a>
            <a href="mailto:info@komvid.ru" className="text-white">info@komvid.ru</a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 text-xs text-gray-400">
          <div className="mb-4">
            <p>Обращаем Ваше внимание на то, что информация и приведенные цены размещенные на данном интернет-сайте, носят исключительно информационный характер и ни при каких обстоятельствах не являются публичной офертой, определяемой положением статьи 437 Гражданского кодекса Российской Федерации.</p>
          </div>
          
          <div className="flex justify-between items-center">
            <p>2023 © КОМВИД</p>
            <p>г. Москва, ул. Профсоюзная, д. 93, к. 4</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;