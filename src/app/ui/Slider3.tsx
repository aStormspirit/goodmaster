"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { card } from "@/constants";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { useRef } from "react";

function Slider3() {
  const ref = useRef<any>(null);

  const handleNextSlide = () => {
    ref.current.slickNext();
  };

  const handlePrevSlide = () => {
    ref.current.slickPrev();
  };

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="bg-[#2D3686] justify-center pb-32 relative overflow-hidden">
      <div className="absolute h-full bg-gradient-to-r z-10 from-indigo-900 rotate-180 w-[10%] right-0" />

      <div className="container mx-auto px-16 z-20 relative">
        <div className="w-full z-20">
          <div className="flex justify-center items-center py-14 text-4xl leading-10 text-white max-md:px-5">
            <div className="flex gap-5 w-full max-md:flex-wrap max-md:max-w-full max-md:justify-center max-md:gap-10">
              <div className="flex-auto max-md:text-center">
                Готовые решения
                <br />
                <span className="font-bold">«под ключ»</span>
              </div>
              <div className="flex items-center gap-5">
                <Button className="p-4" onClick={handlePrevSlide} />
                <Button
                  className="p-4 origin-center rotate-180"
                  onClick={handleNextSlide}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slider-container relative left-[12%]">
        <Slider {...settings} ref={ref}>
          {card.map((item) => {
            return (
              <div key={item.id} className="">
                <Card {...item} className="mr-24" />
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

export default Slider3;
