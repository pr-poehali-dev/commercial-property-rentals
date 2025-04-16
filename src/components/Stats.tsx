import React from 'react';

const Stats = () => {
  return (
    <section className="bg-estate-DEFAULT py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="text-7xl font-bold text-white mb-2">21</div>
            <div className="text-estate-accent font-bold text-2xl mb-1">год</div>
            <div className="text-sm text-gray-300">
              в коммерческой<br />недвижимости
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-7xl font-bold text-white mb-2">20+</div>
            <div className="text-estate-accent font-bold text-2xl mb-1">АРЕНДАТОРОВ</div>
            <div className="text-sm text-gray-300">
              и торговых сетей<br />сотрудничают с нами
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-7xl font-bold text-white mb-2">4000+</div>
            <div className="text-estate-accent font-bold text-2xl mb-1">КВАДРАТНЫХ МЕТРОВ</div>
            <div className="text-sm text-gray-300">
              коммерческой недвижимости<br />в собственности
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;