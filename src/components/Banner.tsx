import Image from "next/image";
import banner from "@/assets/home.png";
import Button2 from "./Button2";

export const Banner = () => {
  return (
    <>
      <div className="relative">
        <Image src={banner} alt="banner" fill style={{ objectFit: "cover" }} />
      </div>
      <div className="relative">
        <div className="w-full flex h-full absolute top-0 z-0">
          <div className="bg-indigo-900 w-1/2 h-full"></div>
          <div className="bg-white w-1/2 h-full"></div>
        </div>
        <div className="container mx-auto px-16 h-full flex">
          <div className="basis-1/2 w-full text-white py-16 z-10">
            <p className="text-4xl leading-10">Пожалуйста,</p>
            <p className="font-bold text-4xl leading-10 ">звоните.</p>
            <p className="text-2xl font-normal leading-loose my-6">
              Вам ответит Илья
            </p>
            <Button2
              variant="secondary"
              className={"bg-white w-[80%] px-16 py-4 text-indigo-900"}
              text={"+7 (904) 305-45-43"}
            />
          </div>
          <div className="basis-1/2 text-indigo-900 py-16 z-10 pl-24">
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
    </>
  );
};

export default Banner;

{
  /* <div className="flex max-md:flex-col max-md:gap-0">
<div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full bg-indigo-900">
  <div className="flex flex-col grow items-start pl-[17rem] py-20 w-full text-4xl leading-10 text-white max-md:px-5 max-md:max-w-full">
    <div className="max-md:mr-2 max-md:max-w-full">Пожалуйста,</div>
    <div className="mt-4 font-bold max-md:mr-2 max-md:max-w-full">
      звоните.
    </div>
    <div className="mt-10 text-2xl leading-8 max-md:mr-2 max-md:max-w-full">
      Вам ответит Илья
    </div>
    <div className="justify-center items-center px-16 py-5 mt-7 max-w-full text-xl font-medium leading-7 text-center text-indigo-900 bg-white w-[448px] max-md:px-5 max-md:mr-2">
      +7 (904) 305-45-43
    </div>
  </div>
</div>
<div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
  <div className="flex flex-col grow items-start px-20 py-20 w-full text-4xl leading-10 text-indigo-900 bg-white max-md:px-5 max-md:max-w-full">
    <div className="max-md:max-w-full">Расчет проекта,</div>
    <div className="mt-2 font-bold max-md:max-w-full">бесплатно.</div>
    <div className="mt-10 text-2xl leading-8 max-md:max-w-full">
      Поможем и подскажем
    </div>
    <div className="justify-center items-center px-16 py-5 mt-7 max-w-full text-xl font-medium text-center text-white bg-indigo-900 w-[445px] max-md:px-5">
      Оставить заявку
    </div>
  </div>
</div>
</div> */
}
