import React from 'react';
import { Phone, ChevronDown, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="bg-estate-DEFAULT text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <div className="flex flex-col mr-12">
            <div className="flex items-center">
              <div className="h-10 w-1 bg-estate-accent mr-2"></div>
              <div className="text-2xl font-bold">КОМВИД</div>
            </div>
            <span className="text-xs text-gray-300">коммерческая недвижимость</span>
          </div>
          
          <nav className="hidden md:flex space-x-4">
            <div className="relative group">
              <a href="#" className="flex items-center px-3 py-2 hover:text-estate-accent transition-colors">
                АРЕНДА <ChevronDown className="ml-1 h-4 w-4" />
              </a>
              <div className="absolute z-10 hidden group-hover:block bg-white text-estate-DEFAULT rounded shadow-lg py-2 w-48">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Офисы</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Склады</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Торговые помещения</a>
              </div>
            </div>
            
            <div className="relative group">
              <a href="#" className="flex items-center px-3 py-2 hover:text-estate-accent transition-colors">
                ПРОДАЖА <ChevronDown className="ml-1 h-4 w-4" />
              </a>
              <div className="absolute z-10 hidden group-hover:block bg-white text-estate-DEFAULT rounded shadow-lg py-2 w-48">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Офисы</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Склады</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Машиноместа</a>
              </div>
            </div>
            
            <a href="#" className="px-3 py-2 hover:text-estate-accent transition-colors">НАШИ ОБЪЕКТЫ</a>
            
            <div className="relative group">
              <a href="#" className="flex items-center px-3 py-2 hover:text-estate-accent transition-colors">
                О КОМПАНИИ <ChevronDown className="ml-1 h-4 w-4" />
              </a>
              <div className="absolute z-10 hidden group-hover:block bg-white text-estate-DEFAULT rounded shadow-lg py-2 w-48">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">История</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Команда</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Контакты</a>
              </div>
            </div>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <a href="tel:+74957920809" className="text-white hover:text-estate-accent flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              +7 (495) 792-08-09
            </a>
          </div>
          
          <Button variant="outline" className="border-estate-accent text-white hover:bg-estate-accent">
            ЗАКАЗАТЬ ЗВОНОК
          </Button>
          
          <a href="#" className="bg-green-600 p-2 rounded-full flex items-center justify-center">
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;