import React from 'react';

const AboutCompany = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold mb-6 text-estate-DEFAULT">О КОМПАНИИ</h2>
            
            <p className="mb-4">
              <span className="font-bold">"КОМВИД"</span> специализируется на управлении собственной коммерческой недвижимостью разного целевого назначения.
            </p>
            
            <p className="mb-4">
              Многолетний опыт работы, сплоченная команда специалистов и безупречная репутация - все это помогает оказывать нашим клиентам профессиональные услуги по <span className="font-bold">аренде коммерческой недвижимости</span>, а также <span className="font-bold">аренде и продаже машиномест</span>.
            </p>
          </div>
          
          <div className="md:col-span-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-estate-DEFAULT rounded-md p-4 flex flex-col items-center justify-center text-white aspect-square">
                <div className="mb-2">
                  <img src="/placeholder.svg" alt="Высокий потолок" className="h-16 opacity-70" />
                </div>
                <p className="text-sm text-center uppercase">Высокий потолочный тренинг</p>
              </div>
              
              <div className="bg-estate-DEFAULT rounded-md p-4 flex flex-col items-center justify-center text-white aspect-square">
                <div className="mb-2">
                  <img src="/placeholder.svg" alt="Отдельный вход" className="h-16 opacity-70" />
                </div>
                <p className="text-sm text-center uppercase">Отдельный вход</p>
              </div>
              
              <div className="bg-estate-DEFAULT rounded-md p-4 flex flex-col items-center justify-center text-white aspect-square">
                <div className="mb-2">
                  <img src="/placeholder.svg" alt="Удобная парковка" className="h-16 opacity-70" />
                </div>
                <p className="text-sm text-center uppercase">Наличие парковки от метро</p>
              </div>
              
              <div className="bg-estate-DEFAULT rounded-md p-4 flex flex-col items-center justify-center text-white aspect-square">
                <div className="mb-2">
                  <img src="/placeholder.svg" alt="Первая линия" className="h-16 opacity-70" />
                </div>
                <p className="text-sm text-center uppercase">Первая линия</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;