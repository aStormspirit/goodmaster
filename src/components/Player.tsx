import React from "react";
import thrid from "@/assets/3.png";
import Image from "next/image";

const Video = () => {
  return (
    <div className="z-10 w-full basis-[80%] flex min-h-[720px]" id="video2">
      <div className="basis-[60%] border-[20px] border-white relative">
        <Image src={thrid} fill alt="video" style={{ objectFit: "cover" }} />
      </div>
      <div className="basis-[40%] border-t-[20px] border-b-[20px] border-white flex flex-col gap-16">
        <div className="text-white text-4xl font-normal leading-loose border-r-[20px] border-white basis-[50%] p-16">
          Видео
          <br />о нашей работе
        </div>
        <div className="basis-[40%] w-full flex justify-end">
          <div
            className="border-[20px] border-white h-full w-[40%] flex justify-center items-center"
            id="video__button2"
          >
            <div id="triangle" className="origin-center rotate-90"></div>
          </div>
        </div>
        <div className="border-r-[20px] border-white basis-[15%]"></div>
      </div>
    </div>
  );
};

const Player = () => {
  return (
    <section className="bg-indigo-900 relative">
      <div className="grid grid-cols-12 grid-rows-2 h-full absolute h-full w-full top-0">
        <div className="bg-white col-start-1 col-end-7 row-start-2 row-end-3 z-0"></div>
      </div>
      <div className="container mx-auto px-16 h-full flex flex-col justify-between">
        <div className="text-4xl leading-10 text-white py-12">
          Почему мы
          <br />
          <span className="font-bold">хорошо работаем?</span>
        </div>
        <Video />
        <div className="text-indigo-900 z-10 text-4xl leading-10 pt-10">
          Как мы
          <span className="font-bold"> работаем?</span>
        </div>
      </div>
    </section>
  );
};

export default Player;

{
  /* <>
<div className="justify-center items-start text-4xl leading-10 text-white max-md:pr-5 max-md:pl-8 col-start-1 col-end-7 row-start-1 row-end-7 ">
        <div className="lg:pl-[16rem] max-lg:pt-4">
          {" "}
          Почему мы
          <br />
          <span className="font-bold">хорошо работаем?</span>
        </div>
      </div>
      <section className="col-start-2 col-end-13 row-start-3 row-end-12 z-[1] pl-[7%] pr-[13%] max-lg:col-start-1 max-lg:col-end-12">
        <Video />
      </section>
      <div className="bg-white flex justify-center items-end col-start-1 col-end-7 row-start-7 row-end-13">
        <div className="text-indigo-900 text-[40px] font-normal font-['Montserrat'] leading-[48px] max-lg:pl-[7%]">
          Как мы
          <span className="font-bold"> работаем?</span>
        </div>
      </div>
</> */
}
