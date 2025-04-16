import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { MapPin, Home, ArrowRight } from 'lucide-react';

interface PropertyProps {
  id: number;
  title: string;
  address: string;
  area: number;
  price: number;
  priceUnit: string;
  type: string;
  image: string;
}

const PropertyCard: React.FC<PropertyProps> = ({ 
  id, title, address, area, price, priceUnit, type, image 
}) => {
  return (
    <Card className="property-card h-full flex flex-col">
      <div className="relative h-56">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4 bg-estate-accent text-white px-3 py-1 text-sm rounded">
          {type}
        </div>
      </div>
      <CardContent className="flex-grow p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{address}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <Home className="h-4 w-4 mr-2" />
          <span className="text-sm">{area} м²</span>
        </div>
        <div className="text-estate-DEFAULT font-bold text-xl">
          {price.toLocaleString('ru-RU')} ₽{priceUnit}
        </div>
      </CardContent>
      <CardFooter className="border-t p-6">
        <Button className="w-full bg-estate-DEFAULT text-white hover:bg-estate-accent flex items-center justify-center gap-2">
          Подробнее <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const PropertyOffers = () => {
  const properties: PropertyProps[] = [
    {
      id: 1,
      title: "Офис с отделкой, 100 м²",
      address: "г. Москва, ул. Профсоюзная, д. 93, к. 4",
      area: 100,
      price: 25000,
      priceUnit: "/мес",
      type: "Аренда",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Склад класса B+, 500 м²",
      address: "г. Москва, ул. Ленинская Слобода, д. 19",
      area: 500,
      price: 350000,
      priceUnit: "/мес",
      type: "Аренда",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Торговое помещение, 80 м²",
      address: "г. Москва, ул. Кутузовский проспект, д. 45",
      area: 80,
      price: 15000000,
      priceUnit: "",
      type: "Продажа",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Актуальные предложения</h2>
        <div className="accent-line mx-auto"></div>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Мы предлагаем широкий выбор коммерческой недвижимости разного целевого назначения в собственность и аренду
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map(property => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-estate-accent hover:bg-estate-accent/90 text-white px-6 py-3 text-lg">
            Смотреть все предложения
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertyOffers;