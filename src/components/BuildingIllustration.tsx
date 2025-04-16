import React from 'react';

const BuildingIllustration = () => {
  return (
    <section className="bg-estate-DEFAULT py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <g fill="none" stroke="#E8B75A" strokeWidth="1">
              {/* Упрощенная версия иллюстрации здания из изображения */}
              <path d="M100,250 L100,100 L200,100 L200,50 L500,50 L500,150 L700,150 L700,250 Z" />
              <path d="M100,250 L700,250" />
              <path d="M200,100 L500,100" />
              <path d="M200,150 L500,150" />
              <path d="M200,200 L500,200" />
              <path d="M500,50 L500,250" />
              <path d="M250,50 L250,250" />
              <path d="M300,50 L300,250" />
              <path d="M350,50 L350,250" />
              <path d="M400,50 L400,250" />
              <path d="M450,50 L450,250" />
              <path d="M550,150 L550,250" />
              <path d="M600,150 L600,250" />
              <path d="M650,150 L650,250" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default BuildingIllustration;