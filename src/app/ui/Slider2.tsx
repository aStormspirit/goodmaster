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
        return "col-start-1";
      case 1:
        return "col-start-2";
      case 2:
        return "col-start-3";
      case 3:
        return "col-start-4";
      case 4:
        return "lg:relative lg:left-[30%]";
    }
  }

  return (
    <section className="bg-[#2D3686] justify-center pb-32 relative">
      <div className="absolute h-full w-full bg-gradient-to-l from-indigo-900 z-10 to-10%" />
      <div className="flex flex-col items-center container mx-auto px-16">
        <div className="w-full z-20">
          <div className="flex justify-center items-center py-14 text-4xl leading-10 text-white max-md:px-5">
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
          className="grid grid-cols-4 gap-32 max-lg:flex max-lg:flex-col max-lg:px-[25%] overflow-hidden mr-10 z-10"
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
                desc={element.desc}
                id={element.id}
                className={index === 4 ? "absolute" : ""}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
