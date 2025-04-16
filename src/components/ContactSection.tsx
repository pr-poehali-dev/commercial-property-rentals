import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="bg-estate-DEFAULT py-16 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">ОСТАВЬТЕ ЗАЯВКУ</h2>
            <div className="w-24 h-1 bg-estate-accent mb-8"></div>
            <p className="mb-8 text-gray-300">
              НАШ СПЕЦИАЛИСТ С ВАМИ СВЯЖЕТСЯ И ДАСТ БОЛЕЕ ПОДРОБНУЮ ИНФОРМАЦИЮ
            </p>
            
            <form className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white">ФИО *</Label>
                <Input 
                  id="name" 
                  type="text" 
                  className="bg-estate-DEFAULT/50 border-estate-DEFAULT/80 text-white placeholder:text-gray-400"
                  placeholder="Введите ваше имя"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-white">Телефон *</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  className="bg-estate-DEFAULT/50 border-estate-DEFAULT/80 text-white placeholder:text-gray-400"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-white">E-mail</Label>
                <Input 
                  id="email" 
                  type="email" 
                  className="bg-estate-DEFAULT/50 border-estate-DEFAULT/80 text-white placeholder:text-gray-400"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-white">Сообщение</Label>
                <Textarea 
                  id="message" 
                  className="bg-estate-DEFAULT/50 border-estate-DEFAULT/80 text-white placeholder:text-gray-400 resize-none"
                  placeholder="Ваше сообщение"
                  rows={4}
                />
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" className="mt-1 border-estate-accent" />
                <Label htmlFor="terms" className="text-sm text-gray-300">
                  Я соглашаюсь с политикой конфиденциальности. Персональные данные, указанные в данной форме будут использованы только для связи с вами.
                </Label>
              </div>
              
              <Button className="bg-estate-accent hover:bg-estate-accent/90 text-white px-8 py-6 w-full md:w-auto">
                ОТПРАВИТЬ
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="bg-estate-DEFAULT/80 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-8">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-estate-accent mr-4 mt-1" />
                  <div>
                    <p className="font-bold">Телефон</p>
                    <a href="tel:+74957920809" className="text-gray-300 hover:text-white">+7 (495) 792-08-09</a>
                    <a href="tel:+74954299990" className="block text-gray-300 hover:text-white">+7 (495) 429-99-90</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-estate-accent mr-4 mt-1" />
                  <div>
                    <p className="font-bold">Email</p>
                    <a href="mailto:info@komvid.ru" className="text-gray-300 hover:text-white">info@komvid.ru</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-estate-accent mr-4 mt-1" />
                  <div>
                    <p className="font-bold">Адрес</p>
                    <p className="text-gray-300">г. Москва, ул. Профсоюзная, д. 93, к. 4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;