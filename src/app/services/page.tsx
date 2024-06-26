import React from "react";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Image from "next/image";
import uslygi from "@/assets/uslugi.jpeg";
import uslugi2 from "@/assets/uslugi1.jpeg";

const Card = ({ image, desc }: { image: any; desc?: any }) => {
  return (
    <div
      className="border-2 basis-1/2 min-h-[35vw] max-lg:min-h-[75vw]"
      id="card"
    >
      <div className="p-5 flex flex-col h-full justify-between">
        <div className="relative basis-[60%] mb-4 max-lg:basis-[20%]">
          <Image
            src={image}
            alt="uslygi1"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div id="text">
          <div className="text-white text-xl text-base font-medium leading-tight">
            Ремонт пореза или порванного потолка
          </div>
          <div className="text-white relative overflow-hidden">
            <div
              className="absolute h-full w-full bg-gradient-to-t from-indigo-900"
              id="background"
            />
            В большинстве случаев можно выполнить ремонт пореза без замены
            полотна. Так же как и с порванным потолком можно установить
            заплатку, но к сожалению она смотрится не совсем эстетично. Если
            хочется получить более красивый вид, то можно перетянуть натяжной
            потолок или применить другие способы восстановления полотна.
          </div>
        </div>

        <div className="basis-[10%]">
          <div className="bg-white h-full flex justify-between items-center p-4">
            <div className="text-indigo-900 text-base font-bold">{desc}</div>
            <div className="text-indigo-900 text-base font-bold">Заказать</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const services = () => {
  return (
    <>
      <div className="bg-indigo-900">
        <Navbar />
      </div>
      <section className="bg-indigo-900 flex justify-center px-10 pt-4 pb-32">
        <div className="container mx-auto px-16">
          <div className="grid grid-cols-12 gap-4 max-md:grid-cols-2">
            <div className="col-start-1 col-end-13">
              <h1 className="text-white text-5xl font-normal  leading-10 mb-5 max-lg:text-2xl">
                Услуги
              </h1>
              <h2 className="text-white text-4xl font-semibold  leading-10 mb-12 max-lg:text-2xl">
                Ремонт натяжного потолка от порезов и протечек до электрики и
                мойки
              </h2>
            </div>
            <div className="flex col-start-1 col-end-13 max-lg:flex-col gap-16">
              <Card
                image={uslugi2}
                desc={
                  <p>
                    от 800 ₽,{" "}
                    <span className="font-medium">время работ 15-30 минут</span>
                  </p>
                }
              />
              <Card image={uslygi} desc={<p>от 1.200 ₽</p>} />
            </div>
          </div>
        </div>
      </section>
      <Banner />
      <Footer />
    </>
  );
};

export default services;
