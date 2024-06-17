"use client";

import Card from "@/components/Card";
import { useState } from "react";
import { card } from "@/constants";

import Button from "@/components/Button";

const Slider = () => {
  const [index, setIndex] = useState(0);

  let data = card.filter((item, i) => i > index && i < index + 6);

  const prevCard = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };

  const nextCard = () => {
    if (index === card.length - 6) return;
    setIndex(index + 1);
  };
  return (
    <section className="bg-[#2D3686] justify-center pb-32">
      <div className="flex flex-col items-center">
        <div className="w-3/4">
          <div className="flex justify-center items-center px-16 py-14 text-4xl leading-10 text-white max-md:px-5">
            <div className="flex gap-5 w-full max-md:flex-wrap max-md:max-w-full max-md:justify-center max-md:gap-10">
              <div className="flex-auto max-md:text-center">
                Готовые решения
                <br />
                <span className="font-bold">«под ключ»</span>
              </div>
              <div className="flex items-center gap-5">
                <Button onClick={() => prevCard()} />
                <Button rotate={180} onClick={() => nextCard()} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-10 max-md:flex-wrap max-md:max-w-full md:pl-16 md:pr-16 w-3/4 justify-between relative">
          {data.map((item, id) => (
            <Card
              key={id}
              title={item.title}
              desc={item.desc}
              image={item.image}
              id={item.id}
              className={
                id === 4
                  ? "md:absolute md:top-0 md:left-[105%] hidden md:block"
                  : ""
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
