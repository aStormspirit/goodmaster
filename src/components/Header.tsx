import React from "react";
import Navbar from "./Navbar";
import Hero from "@/app/ui/Hero";

const Header = ({ image, title, description }: any) => {
  return (
    <div
      className="w-full min-h-[715px]"
      id="header"
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <Hero title={title} description={description} />
    </div>
  );
};

export default Header;
