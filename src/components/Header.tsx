import React from "react";
import Navbar from "./Navbar";
import Hero from "@/app/ui/Hero";

const Header = () => {
  return (
    <div className="w-full bg-[url('/background.png')] bg-no-repeat bg-cover min-h-[715px]">
      <Navbar />
      <Hero
        title={
          <>
            <span>Натяжные потолки</span>
            <br />
            <span className="font-bold">«под ключ»</span>
          </>
        }
        description={
          <>
            <div className="mt-12 max-md:mt-10">
              Натяжные потолки, которые мы создаем для вас - это продуманный
              дизайн, который подойдет именно для вашей квартиры/вашего дома.
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
  );
};

export default Header;
