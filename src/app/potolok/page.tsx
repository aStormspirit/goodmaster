import React from "react";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import InfoBlock from "@/app/ui/InfoBlock";
import bg from "@/assets/bg3.jpeg";
import Header from "@/components/Header";

const potolok = () => {
  return (
    <>
      <Header
        image={bg}
        title={
          <>
            <span>Умный потолок</span>
            <br />
            <span className="font-bold">для вашего дома</span>
          </>
        }
        description={
          <>
            <div className="mt-12 max-md:mt-10">
              Умный дом – это дом современного типа, где при помощи
              автоматизации и высокотехнологичных устройств организовано
              комфортное и безопасное проживание людей.
            </div>
            <div className="mt-7">
              Потолки от студии Good Master тоже умные и отлично встраиваются в
              систему умного дома. Большинство высокотехнологичных устройств
              системы “Умного дома” мы устанавливаем на натяжном потолке.
            </div>
          </>
        }
      />
      <InfoBlock />
      <Banner />
      <Footer />
    </>
  );
};

export default potolok;
