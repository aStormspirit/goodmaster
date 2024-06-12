import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "../ui/Hero";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Photos from "../ui/Photos";

const portfolio = () => {
  return (
    <>
      <div className="w-full bg-[url('/bg2.jpeg')] bg-cover bg-center">
        <Navbar />
        <Hero
          title={
            <>
              <span>Показываем</span>
              <br />
              <span className="font-bold">как мы работаем</span>
            </>
          }
          description={
            <>
              <div className="mt-12 max-md:mt-10">
                Мы не боимся показать свою работу,так как считаем её
                качественной и достойной внимания.
              </div>
              <div className="mt-7">
                Наши мастера не только установят вам потолки, но и помогут
                определиться с дизайнерским решением - мы подберем вам цвет
                полотна, светильники, установим шинопроводы или теневые профили,
                все исходя из вашего интерьера и ваших пожеланий!
              </div>
            </>
          }
        />
      </div>
      <section className="bg-white pt-20">
        <div className="flex flex-col items-center">
          <div className="w-3/4 ml-8">
            <span className="text-indigo-900 text-4xl font-normal font-['Montserrat'] leading-10">
              Наше{" "}
            </span>
            <span className="text-indigo-900 text-4xl font-bold font-['Montserrat'] leading-10">
              портфолио
            </span>
          </div>
          <Photos />
        </div>
      </section>
      <Banner />
      <Footer />
    </>
  );
};

export default portfolio;
