
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactSection = () => {
  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Связаться с нами</h2>
              <p className="text-gray-500">
                Оставьте заявку или свяжитесь с нами любым удобным способом, и мы поможем подобрать идеальное помещение для вашего бизнеса
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Адрес</h3>
                  <p className="text-sm text-gray-500">г. Москва, ул. Ленина, д. 100, офис 314</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Телефон</h3>
                  <p className="text-sm text-gray-500">+7 (999) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-gray-500">info@nedvizhimost-pro.ru</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 p-6 border rounded-lg">
            <div className="space-y-2">
              <h3 className="text-xl font-medium">Оставить заявку</h3>
              <p className="text-sm text-gray-500">
                Заполните форму, и наш специалист свяжется с вами в ближайшее время
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Input placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <Input placeholder="Телефон" type="tel" />
                </div>
              </div>
              <div className="space-y-2">
                <Input placeholder="Email" type="email" />
              </div>
              <div className="space-y-2">
                <Textarea placeholder="Опишите, какое помещение вам необходимо" rows={4} />
              </div>
              <Button className="w-full">Отправить заявку</Button>
              <p className="text-xs text-gray-500 text-center">
                Нажимая на кнопку, вы соглашаетесь с нашей политикой обработки персональных данных
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
