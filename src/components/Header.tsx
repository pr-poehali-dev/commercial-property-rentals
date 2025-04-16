import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="bg-estate-DEFAULT text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-12">
            <a href="/" className="flex flex-col">
              <img 
                src="/logo-b.svg" 
                alt="КОМВИД" 
                className="h-10"
              />
              <span className="text-xs text-gray-300 mt-1">коммерческая недвижимость</span>
            </a>
          </div>
          
          <nav className="hidden lg:flex space-x-8">
            <div className="relative group">
              <a href="#" className="flex items-center uppercase font-medium">
                АРЕНДА <ChevronDown className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <div className="relative group">
              <a href="#" className="flex items-center uppercase font-medium">
                ПРОДАЖА <ChevronDown className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <a href="#" className="uppercase font-medium">НАШИ ОБЪЕКТЫ</a>
            
            <div className="relative group">
              <a href="#" className="flex items-center uppercase font-medium">
                О КОМПАНИИ <ChevronDown className="ml-1 h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
        
        <div className="flex items-center">
          <a href="tel:+74957920809" className="text-white mr-4 hidden md:flex items-center">
            +7 (495) 792-08-09
          </a>
          
          <Button variant="outline" className="mr-4 border-white/20 hover:bg-transparent">
            ЗАКАЗАТЬ ЗВОНОК
          </Button>
          
          <a href="#" className="bg-green-600 p-2 rounded-full flex items-center justify-center">
            <img src="/WhatsApp.svg" alt="WhatsApp" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;