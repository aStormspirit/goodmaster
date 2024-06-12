import React from "react";
import ImageSlider from "./ImageSlider";
import Info from "./Info";

const InfoBlock = () => {
  return (
    <section className="bg-indigo-900 grid grid-cols-12 pl-[13.5%] pr-[13.5%] gap-[4%] pb-[10%] pt-[5%]">
      <div className="col-start-1 col-end-13">
        <div className="mb-[5%]">
          <div>
            <p className="text-white text-5xl font-normal leading-10 mb-4">
              Преимущества
              <br />
            </p>
            <p className="text-white text-5xl font-bold leading-10">
              умных потолков
            </p>
          </div>
        </div>
        <div className="flex gap-12 max-lg:flex-col">
          <div className="basis-1/2 lg:min-h-[650px]">
            <ImageSlider />
          </div>
          <div className="flex items-end flex-col justify-between basis-1/2 max-lg:gap-4">
            <Info />
            <Info />
            <Info />
            <Info />
            <div className="flex w-full items-end  w-full justify-between">
              <div className="flex flex-col h-full justify-center text-base leading-5 text-white w-[45%]">
                <div className="justify-center h-full w-full bg-indigo-900 border-2 border-white border-solid text-center flex flex-col text-lg">
                  <p className="font-light">Стоимость услуги</p>
                  <p className="text-lg font-semibold">от 20.000 ₽</p>
                </div>
              </div>
              <div className="flex flex-col justify-center text-lg font-semibold leading-5 text-indigo-900 whitespace-nowrap basis-1/2">
                <div className="justify-center items-center px-16 py-9 w-full bg-white text-center text-xl">
                  Заказать
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoBlock;
