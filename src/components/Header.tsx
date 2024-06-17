import React from "react";
import Navbar from "./Navbar";
import Hero from "@/app/ui/Hero";
import bg from "@/assets/background.png";

const Header = () => {
  return (
    <div
      className="w-full min-h-[715px]"
      id="header"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
