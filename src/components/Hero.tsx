
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-50 to-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Аренда коммерческой недвижимости для вашего бизнеса
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Широкий выбор помещений разного типа и назначения в лучших локациях города. Выгодные условия и индивидуальный подход к каждому клиенту.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Смотреть предложения</Button>
              <Button size="lg" variant="outline">Получить консультацию</Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[500px] aspect-video overflow-hidden rounded-xl">
            <img
              alt="Современное офисное здание"
              className="object-cover w-full h-full"
              src="/placeholder.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
