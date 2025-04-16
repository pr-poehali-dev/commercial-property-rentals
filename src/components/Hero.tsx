import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[500px]">
      <div className="absolute inset-0">
        <img 
          src="https://cdn.poehali.dev/files/e538f969-780b-4d9b-9070-d559c4ba92f8.jpg" 
          alt="Коммерческая недвижимость" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="absolute inset-0 flex items-end pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-white mb-4">
              "КОМВИД" - СОБСТВЕННИК КОММЕРЧЕСКОЙ НЕДВИЖИМОСТИ
            </h1>
            <p className="text-xl text-white">
              Ваш надежный партнер в сфере коммерческой недвижимости с индивидуальным подходом к каждому клиенту
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;