import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Image from "next/image";
import map from "@/assets/map.png";

const contacts = () => {
  return (
    <>
      <div className="bg-indigo-900">
        <Navbar />
      </div>
      <section className="bg-indigo-900 flex justify-center pb-32 lg:pt-16 max-lg:pb-16">
        <div className="container mx-auto px-16">
          <div className="flex gap-20 h-full max-lg:flex-col">
            <div className="basis-2/6">
              <h1 className="text-white text-5xl font-normal leading-10 mb-10 max-lg:text-2xl max-lg:mb-4">
                Контакты
              </h1>
              <div className="mb-8 max-lg:mb-4">
                <h2 className="text-white text-3xl font-normal leading-loose mb-2 max-lg:text-xl">
                  Номер телефона
                </h2>
                <div className="min-h-[55px] bg-white bg-opacity-10 flex justify-center items-center hover:border-2 hover:border-white duration-300 hover:bg-indigo-900 hover:bg-opacity-0">
                  <p className="text-white text-2xl font-medium leading-relaxed max-lg:text-lg">
                    +7 (904) 305-45-43
                  </p>
                </div>
              </div>
              <div className="mb-8">
                <h2 className="text-white text-3xl font-normal leading-loose mb-2 max-lg:text-lg">
                  Адрес
                </h2>
                <div className="min-h-[55px] bg-white bg-opacity-10 flex justify-center items-center hover:border-2 hover:border-white duration-300 hover:bg-indigo-900 hover:bg-opacity-0">
                  <div className="text-center text-white text-2xl font-medium leading-relaxed max-lg:text-lg">
                    СПБ, Василевский остров
                  </div>
                </div>
              </div>
              <div className="">
                <h2 className="text-white text-2xl font-normal leading-loose mb-2 max-lg:text-lg">
                  Соц сети
                </h2>
                <div className="flex gap-2 w-full">
                  <div className="basis-1/2 min-h-[55px] bg-white bg-opacity-10 flex justify-center items-center hover:border-2 hover:border-white duration-300 hover:bg-indigo-900 hover:bg-opacity-0">
                    <div className="text-white text-2xl font-medium leading-relaxed max-lg:text-lg">
                      YouTube
                    </div>
                  </div>
                  <div className="basis-1/2 min-h-[55px] bg-white bg-opacity-10 flex justify-center items-center hover:border-2 hover:border-white duration-300 hover:bg-indigo-900 hover:bg-opacity-0">
                    <div className="text-white text-2xl font-medium leading-relaxed max-lg:text-lg">
                      VK
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-4/6 h-full">
              <div className="border-2 border-white h-full relative">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A83c6099adcd17cf4f08f1c3601960267f974d3f21ffe7b41be167c38bc3f0130&amp;source=constructor"
                  width="100%"
                  height="500"
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Banner />
      <Footer />
    </>
  );
};

export default contacts;
