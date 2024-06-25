import Image from "next/image";
import banner from "@/assets/home.png";
import Button2 from "./Button2";
import { motion, Variants } from "framer-motion";

export const Banner = () => {
  return (
    <section>
      <div className="">
        <div className="relative h-[600px]">
          <Image
            src={banner}
            alt="banner"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="">
        <div className="relative">
          <div className="w-full flex h-full absolute top-0 z-0 max-lg:flex-col">
            <div className="bg-indigo-900 w-1/2 h-full max-lg:w-full"></div>
            <div className="bg-white w-1/2 h-full max-lg:w-full"></div>
          </div>
          <div className="container mx-auto px-16 h-full flex max-lg:flex-col">
            <div className="basis-1/2 w-full text-white py-16 z-10">
              <p className="text-4xl leading-10">Пожалуйста,</p>
              <p className="font-bold text-4xl leading-10 ">звоните.</p>
              <p className="text-2xl font-normal leading-loose my-6">
                Вам ответит Илья
              </p>
              <Button2
                variant="secondary"
                className={"bg-white lg:w-[80%] px-16 py-4 text-indigo-900"}
                text={"+7 (904) 305-45-43"}
              />
            </div>
            <div className="basis-1/2 text-indigo-900 py-16 z-10 lg:pl-24">
              <p className="text-4xl leading-10">Расчет проекта,</p>
              <p className="font-bold text-4xl leading-10">бесплатно.</p>
              <p className="text-2xl font-normal leading-loose my-6">
                Поможем и подскажем
              </p>
              <Button2
                variant="primary"
                className={"bg-indigo-900 px-16 py-4 text-white"}
                text={"Оставить заявку"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
