import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-estate-DEFAULT/70 to-estate-DEFAULT/40">
        <img 
          src="https://cdn.poehali.dev/files/818c95d5-5219-4646-8fc0-dca414377146.jpg" 
          alt="Коммерческая недвижимость" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="relative h-full container mx-auto flex flex-col justify-center text-white">
        <h1 className="text-4xl font-bold max-w-2xl mb-4">
          "КОМВИД" - СОБСТВЕННИК КОММЕРЧЕСКОЙ НЕДВИЖИМОСТИ
        </h1>
        <div className="w-24 h-1 bg-estate-accent mb-6"></div>
        <p className="text-xl max-w-2xl">
          Ваш надежный партнер в сфере коммерческой недвижимости с индивидуальным подходом к каждому клиенту
        </p>
      </div>
    </section>
  );
};

export default Hero;