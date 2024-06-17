"use client";

import Image from "next/image";
import first from "@/assets/1.png";
import second from "@/assets/2.png";
import third from "@/assets/3.png";
import fourth from "@/assets/4.png";
import fifth from "@/assets/5.png";
import sixth from "@/assets/6.png";
import seventh from "@/assets/7.png";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const Photo = ({ setShow, image }: any) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-20"
      onClick={() => setShow(false)}
    >
      <div className="border-[20px] border-indigo-900">
        <Image src={image} alt="Image" width={816} height={374} className="" />
      </div>
    </div>
  );
};

const Photos = () => {
  const [show, setShow] = useState<boolean>(false);
  const [image, setImage] = useState<any>(null);

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <section className="flex bg-[#FFFFFF] py-10 justify-center">
      {show && <Photo setShow={setShow} image={image} />}
      <div
        className={`flex flex-col gap-10 items-center max-md:gap-2 max-lg:gap-4 container mx-auto px-16 ${
          inView ? "opacity-100 duration-300" : "opacity-0 duration-300"
        }`}
        ref={ref}
      >
        <div className="flex gap-10 max-md:gap-2 max-lg:gap-4">
          <div id="imageWrapper">
            <Image
              src={first}
              alt="Image"
              id="imageBackground"
              width={1304}
              height={374}
              onClick={(e) => {
                setShow(!show);
                setImage(first);
              }}
            />
          </div>
          <div id="imageWrapper">
            <Image
              src={second}
              alt="Image"
              id="imageBackground"
              width={816}
              height={374}
              onClick={(e) => {
                setShow(!show);
                setImage(second);
              }}
            />
          </div>
        </div>
        <div className="flex gap-10 max-md:gap-2 max-lg:gap-4">
          <div className="flex gap-10 flex-col max-md:gap-2 max-lg:gap-4">
            <div id="imageWrapper">
              <Image
                src={third}
                alt="Image"
                id="imageBackground"
                width={820}
                height={374}
                onClick={(e) => {
                  setShow(!show);
                  setImage(third);
                }}
              />
            </div>
            <div id="imageWrapper">
              <Image
                src={fifth}
                alt="Image"
                id="imageBackground"
                width={820}
                height={374}
                onClick={(e) => {
                  setShow(!show);
                  setImage(fifth);
                }}
              />
            </div>
          </div>
          <div className="flex">
            <div id="imageWrapper" className="flex">
              <Image
                src={fourth}
                alt="Image"
                id="imageBackground"
                width={1306}
                height={750}
                onClick={(e) => {
                  setShow(!show);
                  setImage(fourth);
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-10 max-md:gap-2 max-lg:gap-4">
          <div id="imageWrapper">
            <Image
              src={sixth}
              alt="Image"
              id="imageBackground"
              width={1024}
              height={374}
              onClick={(e) => {
                setShow(!show);
                setImage(sixth);
              }}
            />
          </div>
          <div id="imageWrapper">
            <Image
              src={seventh}
              alt="Image"
              id="imageBackground"
              width={1100}
              height={374}
              onClick={(e) => {
                setShow(!show);
                setImage(seventh);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photos;
