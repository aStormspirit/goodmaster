"use client";

import React, { useState } from "react";
import Image from "next/image";
import slide1 from "@/assets/slide1.png";
import slide2 from "@/assets/1.png";
import slide3 from "@/assets/2.png";
import slide4 from "@/assets/3.png";

import Button from "@/components/Button";

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const [slides, setSlides] = useState([
    slide1,
    slide2,
    slide3,
    slide4,
    slide1,
    slide2,
    slide3,
    slide4,
  ]);

  const prevCard = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };

  const nextCard = () => {
    if (index === slides.length - 1) return;
    setIndex(index + 1);
  };

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex relative basis-[90%]">
        <Image
          alt="Image"
          fill
          src={slides[index]}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex mt-[20px] justify-between max-h-[60px] basis-1/5">
        <Button
          className="w-[60px] flex justify-center items-center"
          onClick={() => prevCard()}
        />
        <div className="flex gap-2 ml-2">
          {slides.map((slide, i) => (
            <div
              key={i}
              id={`${index == i ? "" : "imageWrapper2"}`}
              className={`relative w-[60px] h-[60px] ${
                index == i ? "border-2" : ""
              }`}
            >
              <Image
                id={`${index == i ? "" : "imageBackground"}`}
                alt="Image"
                fill
                style={{ objectFit: "cover" }}
                src={slide}
              />
            </div>
          ))}
        </div>
        <Button
          className="w-[60px] flex justify-center items-center origin-center rotate-180"
          onClick={() => nextCard()}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
