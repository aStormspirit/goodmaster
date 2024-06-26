import React from "react";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Photos from "../ui/Photos";
import Header from "@/components/Header";
import bg2 from "@/assets/bg2.jpeg";

const portfolio = () => {
  return (
    <>
      <Header
        image={bg2}
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
              Мы не боимся показать свою работу,так как считаем её качественной
              и достойной внимания.
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
      <section className="bg-white">
        <div className="flex flex-col items-center">
          <div className="container mx-auto px-16 py-12 max-lg:py-2">
            <span className="text-indigo-900 text-4xl font-normal leading-10 max-lg:text-2xl">
              Наше{" "}
            </span>
            <span className="text-indigo-900 text-4xl font-bold leading-10 max-lg:text-2xl">
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
