import React from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Button } from './ui/button';

const ContactForm = () => {
  return (
    <section className="bg-estate-DEFAULT py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="hidden md:block">
            {/* Пустая колонка для соответствия макету */}
          </div>
          
          <div className="bg-estate-DEFAULT text-white rounded-md p-8">
            <h2 className="text-2xl font-bold mb-6">ОСТАВЬТЕ ЗАЯВКУ</h2>
            <p className="text-gray-300 text-sm mb-6">
              НАШ СПЕЦИАЛИСТ С ВАМИ СВЯЖЕТСЯ И ДАСТ БОЛЕЕ ПОДРОБНУЮ ИНФОРМАЦИЮ
            </p>
            
            <form className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-gray-300 text-sm mb-1 block">ФИО *</Label>
                <Input 
                  id="name" 
                  type="text" 
                  className="bg-transparent border-gray-700 text-white placeholder:text-gray-500"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-gray-300 text-sm mb-1 block">Телефон *</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  className="bg-transparent border-gray-700 text-white placeholder:text-gray-500"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-gray-300 text-sm mb-1 block">E-mail</Label>
                <Input 
                  id="email" 
                  type="email" 
                  className="bg-transparent border-gray-700 text-white placeholder:text-gray-500"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-gray-300 text-sm mb-1 block">Сообщение</Label>
                <Textarea 
                  id="message" 
                  className="bg-transparent border-gray-700 text-white placeholder:text-gray-500 resize-none"
                  rows={4}
                />
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" className="mt-1 data-[state=checked]:bg-estate-accent border-estate-accent" />
                <Label htmlFor="terms" className="text-xs text-gray-400">
                  Я соглашаюсь с <a href="#" className="text-estate-accent">политикой конфиденциальности</a>. 
                  Персональные данные, указанные в данной форме будут использованы только для связи с вами.
                </Label>
              </div>
              
              <Button className="bg-transparent border border-estate-accent hover:bg-estate-accent text-white w-full">
                ОТПРАВИТЬ
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;