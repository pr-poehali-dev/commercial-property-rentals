import React from 'react';

interface PropertyTypeProps {
  title: string;
  image: string;
}

const PropertyType: React.FC<PropertyTypeProps> = ({ title, image }) => {
  return (
    <div className="relative group cursor-pointer">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute bottom-0 left-0 right-0 text-center py-3 text-white uppercase font-medium">
        {title}
      </div>
    </div>
  );
};

const PropertyTypes = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <PropertyType 
            title="Офисы" 
            image="/placeholder.svg" 
          />
          <PropertyType 
            title="Машиноместа" 
            image="/placeholder.svg" 
          />
          <PropertyType 
            title="Торговые помещения" 
            image="/placeholder.svg" 
          />
          <PropertyType 
            title="ПСН" 
            image="/placeholder.svg" 
          />
          <div className="hidden md:block">
            {/* Пустая ячейка для соответствия макету */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;