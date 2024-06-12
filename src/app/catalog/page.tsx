import React from "react";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import { card } from "@/constants";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

const catalog = () => {
  return (
    <div className="bg-indigo-900">
      <Navbar />
      <div className="text-white text-4xl font-normal font-['Montserrat'] leading-10 flex justify-center">
        <h1 className="w-3/4 p-8">Каталог</h1>
      </div>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-4 w-3/4 pb-48 md:grid-cols-2 sm:grid-cols-1 gap-16 justify-items-center p-[2%]">
          {card.map((item, id) => {
            return (
              <Card
                key={id}
                title={item.title}
                desc={item.description}
                image={item.image}
                id={item.id}
                className=""
              />
            );
          })}
        </div>
      </div>
      <Banner />
      <Footer />
    </div>
  );
};

export default catalog;
