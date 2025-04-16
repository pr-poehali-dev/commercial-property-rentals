
import { Building, MapPin, Ruler, Tag } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

const offers = [
  {
    id: 1,
    title: "Офис в бизнес-центре 'Престиж'",
    type: "Офис",
    address: "ул. Ленина, 45",
    area: 120,
    price: 1200,
    isTop: true,
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Торговое помещение в ТЦ 'Европейский'",
    type: "Торговая площадь",
    address: "пр. Мира, 76",
    area: 85,
    price: 2400,
    isTop: false,
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Склад класса А в логистическом парке",
    type: "Склад",
    address: "Промышленная зона, 12",
    area: 450,
    price: 650,
    isTop: false,
    image: "/placeholder.svg"
  }
];

const PropertyOffers = () => {
  return (
    <section id="offers" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Актуальные предложения</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ознакомьтесь с нашими лучшими предложениями аренды коммерческой недвижимости
            </p>
          </div>
        </div>
        
        <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <Card key={offer.id} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative">
                <img 
                  src={offer.image} 
                  alt={offer.title} 
                  className="object-cover w-full h-48"
                />
                {offer.isTop && (
                  <Badge className="absolute top-2 right-2 bg-primary">
                    Топ предложение
                  </Badge>
                )}
              </div>
              <CardHeader className="p-4">
                <h3 className="text-lg font-bold">{offer.title}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <Building className="w-4 h-4 mr-1" />
                  <span>{offer.type}</span>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0 space-y-3">
                <div className="flex items-center text-sm">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{offer.address}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Ruler className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{offer.area} м²</span>
                </div>
                <div className="flex items-center text-sm font-bold">
                  <Tag className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{offer.price} ₽/м² в месяц</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full">Подробнее</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Button variant="outline" size="lg">Смотреть все предложения</Button>
        </div>
      </div>
    </section>
  );
};

export default PropertyOffers;
