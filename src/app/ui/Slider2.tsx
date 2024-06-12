"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Card from "@/components/Card";
import { card } from "@/constants";
import Button from "@/components/Button";

export function Slider2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [elements, setElements] = useState(
    card.slice(currentIndex, currentIndex + 5)
  );

  const prevCard = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
    setElements(card.slice(currentIndex, currentIndex + 5));
  };

  const nextCard = () => {
    if (currentIndex === card.length - 6) return;
    setCurrentIndex(currentIndex + 1);
    setElements(card.slice(currentIndex, currentIndex + 5));
  };

  function setCols(id: number) {
    switch (id) {
      case 0:
        return "col-start-2 col-end-4";
      case 1:
        return "col-start-4 col-end-6";
      case 2:
        return "col-start-6 col-end-8";
      case 3:
        return "col-start-8 col-end-10";
      case 4:
        return "col-start-11 col-end-13 lg:relative lg:left-[30%]";
    }
  }

  return (
    <section className="bg-[#2D3686] justify-center pb-32 relative">
      <div className="absolute h-full w-full bg-gradient-to-l from-indigo-900 z-10 to-10%" />
      <div className="flex flex-col items-center">
        <div className="w-3/4 z-20">
          <div className="flex justify-center items-center px-16 py-14 text-4xl leading-10 text-white max-md:px-5">
            <div className="flex gap-5 w-full max-md:flex-wrap max-md:max-w-full max-md:justify-center max-md:gap-10">
              <div className="flex-auto max-md:text-center">
                Готовые решения
                <br />
                <span className="font-bold">«под ключ»</span>
              </div>
              <div className="flex items-center gap-5">
                <Button className="p-4" onClick={() => prevCard()} />
                <Button
                  className="p-4"
                  rotate={180}
                  onClick={() => nextCard()}
                />
              </div>
            </div>
          </div>
        </div>
        <motion.div
          className="grid grid-cols-12 gap-5 pl-[8%] max-lg:flex max-lg:flex-col max-lg:px-[25%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {elements.map((element, index) => (
            <motion.div
              key={element.id}
              variants={{
                initial: { x: 100 },
                animate: { x: 0, transition: { duration: 0.5 } },
                exit: { x: -100, transition: { duration: 0.5 } },
              }}
              initial="initial"
              animate="animate"
              exit="exit"
              className={setCols(index)}
            >
              <Card
                image={element.image}
                title={element.title}
                desc={element.description}
                id={element.id}
                className={index === 4 ? "relative" : ""}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
