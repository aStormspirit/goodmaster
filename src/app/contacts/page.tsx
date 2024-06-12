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
      <section className="bg-indigo-900 flex justify-center pb-32 max-lg:pb-16">
        <div className="w-3/4 p-8 max-lg:min-h-screen">
          <div className="flex gap-20 h-full max-lg:flex-col">
            <div className="basis-2/6">
              <h1 className="text-white text-4xl font-normal font-['Montserrat'] leading-10 mb-10">
                Контакты
              </h1>
              <div className="mb-8">
                <h2 className="text-white text-2xl font-normal font-['Montserrat'] leading-loose mb-2">
                  Номер телефона
                </h2>
                <div className="min-h-[55px] bg-white bg-opacity-10 flex justify-center items-center">
                  <p className="text-white text-xl font-medium font-['Montserrat'] leading-relaxed">
                    +7 (904) 305-45-43
                  </p>
                </div>
              </div>
              <div className="mb-8">
                <h2 className="text-white text-2xl font-normal font-['Montserrat'] leading-loose mb-2">
                  Адрес
                </h2>
                <div className="min-h-[55px] bg-white bg-opacity-10 flex justify-center items-center">
                  <div className="text-center text-white text-xl font-medium font-['Montserrat'] leading-relaxed">
                    СПБ, Василевский остров
                  </div>
                </div>
              </div>
              <div className="">
                <h2 className="text-white text-2xl font-normal font-['Montserrat'] leading-loose mb-2">
                  Соц сети
                </h2>
                <div className="flex gap-2 w-full">
                  <div className="basis-1/2 min-h-[55px] bg-white bg-opacity-10 flex justify-center items-center">
                    <div className="text-white text-xl font-medium font-['Montserrat'] leading-relaxed">
                      YouTube
                    </div>
                  </div>
                  <div className="basis-1/2 min-h-[55px] bg-white bg-opacity-10 flex justify-center items-center">
                    <div className="text-white text-xl font-medium font-['Montserrat'] leading-relaxed">
                      VK
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-4/6 h-full">
              <div className="border-2 border-white h-full relative">
                <Image
                  src={map}
                  alt="map"
                  fill
                  style={{ objectFit: "cover", padding: "2%" }}
                />
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
