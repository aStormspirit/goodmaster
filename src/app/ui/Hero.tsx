import Button2 from "@/components/Button2";
import React from "react";

const Hero = ({ title, description }: any) => {
  return (
    <section className="relative h-[600px] flex max-lg:h-auto">
      <div className="bg-indigo-900 max-md:px-5 absolute top-0 w-1/2 h-full max-lg" />
      <div className="z-10 container mx-auto px-16 grid grid-cols-12 max-lg:flex max-lg:flex-col">
        <div className="flex flex-col mt-24 col-start-1 col-end-6 text-white">
          <div className="text-4xl leading-10">{title}</div>
          <div className="text-xl">{description}</div>
        </div>

        <div className="flex flex-col text-indigo-900 max-md:px-5 col-start-8 col-end-13 justify-end">
          <div className="bg-white mb-[50px] p-10">
            <div className="text-2xl leading-7 max-md:max-w-full">
              Расчет проекта
              <span className="font-bold text-indigo-900"> бесплатно</span>
            </div>
            <div className="mt-5 text-base font-light leading-5 max-md:max-w-full text-lg">
              Оставьте заявку на бесплатный замер,посчитаем и подготовим проект
              бесплатно.
            </div>
            <Button2
              variant="primary"
              className={
                "justify-center items-center px-16 py-5 mt-5 font-medium leading-6"
              }
              text="Оставить заявку"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
