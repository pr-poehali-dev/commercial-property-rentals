
import { Building, Factory, HomeIcon, Store } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const propertyTypes = [
  {
    title: "Офисы",
    description: "Современные офисные помещения класса A, B и B+ в центре города и деловых районах",
    icon: Building,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500"
  },
  {
    title: "Торговые площади",
    description: "Помещения для магазинов и шоурумов в локациях с высоким трафиком посетителей",
    icon: Store,
    bgColor: "bg-green-50",
    iconColor: "text-green-500"
  },
  {
    title: "Склады",
    description: "Складские помещения разной площади с удобной транспортной доступностью",
    icon: Factory,
    bgColor: "bg-amber-50",
    iconColor: "text-amber-500"
  },
  {
    title: "Многофункциональные помещения",
    description: "Универсальные пространства для различных видов коммерческой деятельности",
    icon: HomeIcon,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-500"
  }
];

const PropertyTypes = () => {
  return (
    <section id="property-types" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Типы помещений</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Выберите оптимальный тип помещения для вашего бизнеса
            </p>
          </div>
        </div>
        <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-4">
          {propertyTypes.map((type, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
              <CardHeader className={`${type.bgColor} p-6`}>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4">
                  <type.icon className={`w-6 h-6 ${type.iconColor}`} />
                </div>
                <CardTitle>{type.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <CardDescription className="text-sm">{type.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;
