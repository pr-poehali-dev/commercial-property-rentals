import React from 'react';
import { Card, CardContent } from './ui/card';
import { Check, Clock, Award, ThumbsUp } from 'lucide-react';

interface AdvantageProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AdvantageCard: React.FC<AdvantageProps> = ({ icon, title, description }) => {
  return (
    <Card className="border-none shadow-lg bg-white h-full">
      <CardContent className="p-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 text-estate-accent">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-4">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const Advantages = () => {
  const advantages = [
    {
      icon: <Clock className="h-12 w-12" />,
      title: "Работаем с 2002 года",
      description: "Более 20 лет опыта на рынке коммерческой недвижимости"
    },
    {
      icon: <Check className="h-12 w-12" />,
      title: "Прозрачные условия",
      description: "Никаких скрытых платежей и комиссий, честные условия сотрудничества"
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: "Собственные объекты",
      description: "Мы собственники недвижимости, поэтому можем предложить лучшие условия"
    },
    {
      icon: <ThumbsUp className="h-12 w-12" />,
      title: "Индивидуальный подход",
      description: "Подберем оптимальное решение под ваши потребности и бюджет"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Наши преимущества</h2>
        <div className="accent-line mx-auto"></div>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Почему клиенты выбирают "КОМВИД" для решения задач в сфере коммерческой недвижимости
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <AdvantageCard key={index} {...advantage} />
          ))}
        </div>

        <div className="mt-16 bg-estate-DEFAULT text-white p-8 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center py-6 border-b md:border-b-0 md:border-r border-white/20">
            <div className="text-6xl font-bold text-estate-accent">21</div>
            <div className="text-xl mt-2">год</div>
            <div className="text-sm text-gray-300">в коммерческой недвижимости</div>
          </div>
          
          <div className="text-center py-6 border-b md:border-b-0 md:border-r border-white/20">
            <div className="text-6xl font-bold text-estate-accent">20+</div>
            <div className="text-xl mt-2">арендаторов</div>
            <div className="text-sm text-gray-300">и торговых сетей сотрудничают с нами</div>
          </div>
          
          <div className="text-center py-6">
            <div className="text-6xl font-bold text-estate-accent">4000+</div>
            <div className="text-xl mt-2">квадратных метров</div>
            <div className="text-sm text-gray-300">коммерческой недвижимости в собственности</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;