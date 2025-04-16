
import { Award, Clock, FileText, Handshake, HeartHandshake, Shield } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "Гарантия юридической чистоты",
    description: "Все помещения проходят тщательную юридическую проверку и имеют полный пакет документов"
  },
  {
    icon: Award,
    title: "Собственная недвижимость",
    description: "Мы сдаем только собственную недвижимость без посредников и дополнительных комиссий"
  },
  {
    icon: HeartHandshake,
    title: "Индивидуальный подход",
    description: "Подбираем оптимальные варианты под конкретные потребности вашего бизнеса"
  },
  {
    icon: Clock,
    title: "Быстрое заселение",
    description: "Оформление документов и заселение в кратчайшие сроки — от 24 часов"
  },
  {
    icon: FileText,
    title: "Гибкие условия договора",
    description: "Возможность корректировки условий договора под ваши потребности"
  },
  {
    icon: Handshake,
    title: "Долгосрочное сотрудничество",
    description: "Поддержка арендаторов на всех этапах сотрудничества и специальные условия для постоянных клиентов"
  }
];

const Advantages = () => {
  return (
    <section id="advantages" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Наши преимущества</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Почему стоит выбрать именно нашу компанию для аренды коммерческой недвижимости
            </p>
          </div>
        </div>
        
        <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex space-x-4 p-6 rounded-lg border border-gray-100 hover:border-primary/20 hover:bg-primary/5 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <advantage.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-medium">{advantage.title}</h3>
                <p className="text-sm text-gray-500">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
