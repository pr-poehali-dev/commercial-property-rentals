
import { Building } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building className="w-6 h-6 text-primary-foreground" />
              <span className="text-xl font-bold">НедвижимостьПро</span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              Профессиональный подход к аренде коммерческой недвижимости для вашего бизнеса с 2005 года
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Меню</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-foreground">Главная</a></li>
              <li><a href="#property-types" className="hover:text-primary-foreground">Типы помещений</a></li>
              <li><a href="#offers" className="hover:text-primary-foreground">Предложения</a></li>
              <li><a href="#advantages" className="hover:text-primary-foreground">Преимущества</a></li>
              <li><a href="#partners" className="hover:text-primary-foreground">Партнеры</a></li>
              <li><a href="#contacts" className="hover:text-primary-foreground">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm">
              <li>г. Москва, ул. Ленина, 100</li>
              <li>Офис 314</li>
              <li>+7 (999) 123-45-67</li>
              <li>info@nedvizhimost-pro.ru</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Время работы</h3>
            <ul className="space-y-2 text-sm">
              <li>Пн-Пт: 9:00 - 19:00</li>
              <li>Сб: 10:00 - 17:00</li>
              <li>Вс: выходной</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 НедвижимостьПро. Все права защищены.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-primary-foreground">Политика конфиденциальности</a>
            <a href="#" className="text-sm hover:text-primary-foreground">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
