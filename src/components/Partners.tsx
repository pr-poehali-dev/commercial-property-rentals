
const partners = [
  { name: "Компания 1", logo: "/placeholder.svg" },
  { name: "Компания 2", logo: "/placeholder.svg" },
  { name: "Компания 3", logo: "/placeholder.svg" },
  { name: "Компания 4", logo: "/placeholder.svg" },
  { name: "Компания 5", logo: "/placeholder.svg" },
  { name: "Компания 6", logo: "/placeholder.svg" },
];

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Наши партнеры</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Компании, которые нам доверяют и с которыми мы сотрудничаем
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-8 mt-10 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 max-w-full opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
