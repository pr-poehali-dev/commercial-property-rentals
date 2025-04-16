
import { Building, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center space-x-2">
          <Building className="w-6 h-6 text-primary" />
          <span className="text-xl font-bold">НедвижимостьПро</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm font-medium hover:text-primary">Главная</a>
          <a href="#property-types" className="text-sm font-medium hover:text-primary">Типы помещений</a>
          <a href="#offers" className="text-sm font-medium hover:text-primary">Предложения</a>
          <a href="#advantages" className="text-sm font-medium hover:text-primary">Преимущества</a>
          <a href="#partners" className="text-sm font-medium hover:text-primary">Партнеры</a>
          <a href="#contacts" className="text-sm font-medium hover:text-primary">Контакты</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon" className="hidden md:flex">
            <Search className="w-4 h-4" />
          </Button>
          <Button className="hidden md:flex">Связаться с нами</Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
      
      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="flex items-center justify-between h-16 px-4 border-b">
            <div className="flex items-center space-x-2">
              <Building className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">НедвижимостьПро</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          <nav className="flex flex-col p-4 space-y-4">
            <a href="#" className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md">Главная</a>
            <a href="#property-types" className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md">Типы помещений</a>
            <a href="#offers" className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md">Предложения</a>
            <a href="#advantages" className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md">Преимущества</a>
            <a href="#partners" className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md">Партнеры</a>
            <a href="#contacts" className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md">Контакты</a>
            <Button className="mt-4">Связаться с нами</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
