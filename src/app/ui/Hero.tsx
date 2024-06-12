import React from "react";

const Hero = ({ title, description }: any) => {
  return (
    <section className="flex lg:items-end lg:justify-between lg:flex-row flex-col">
      <div className="flex justify-center items-center pl-64 pr-32 py-20 text-base font-light leading-5 text-white bg-indigo-900 max-md:px-5">
        <div className="flex flex-col mt-4 max-w-full w-[391px]">
          <div className="text-4xl leading-10">{title}</div>
          <div className="text-xl">{description}</div>
        </div>
      </div>

      <div className="flex flex-col px-10 py-11 text-indigo-900 bg-white max-md:px-5 lg:mr-[12%] lg:mb-[4%] basis-[40%]">
        <div className="text-2xl leading-7 max-md:max-w-full">
          Расчет проекта
          <span className="font-bold text-indigo-900"> бесплатно</span>
        </div>
        <div className="mt-5 text-base font-light leading-5 max-md:max-w-full text-lg">
          Оставьте заявку на бесплатный замер,посчитаем и подготовим проект
          бесплатно.
        </div>
        <div className="justify-center items-center px-16 py-5 mt-5 text-xl font-medium leading-6 text-center text-white bg-indigo-900 max-md:px-5 max-md:max-w-full">
          Оставить заявку
        </div>
      </div>
    </section>
  );
};

export default Hero;
