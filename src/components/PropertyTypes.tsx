import React from 'react';
import { Card, CardContent } from './ui/card';

interface PropertyTypeProps {
  title: string;
  image: string;
  className?: string;
}

const PropertyTypeCard: React.FC<PropertyTypeProps> = ({ title, image, className }) => {
  return (
    <Card className={`property-card relative group cursor-pointer ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity group-hover:opacity-75"></div>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white font-semibold uppercase text-center">
        {title}
      </div>
    </Card>
  );
};

const PropertyTypes = () => {
  const propertyTypes = [
    { 
      title: "Офисы", 
      image: "/placeholder.svg" 
    },
    { 
      title: "Склады", 
      image: "/placeholder.svg" 
    },
    { 
      title: "Машиноместа", 
      image: "/placeholder.svg" 
    },
    { 
      title: "Торговые помещения", 
      image: "/placeholder.svg" 
    },
    { 
      title: "ПСН", 
      image: "/placeholder.svg" 
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {propertyTypes.map((type, index) => (
            <div key={index} className={index === 3 || index === 4 ? "md:col-span-2" : "md:col-span-1"}>
              <PropertyTypeCard title={type.title} image={type.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;