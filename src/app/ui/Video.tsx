import React from "react";
import Image from "next/image";
import tre from "@/assets/3.png";

const Video = () => {
  return (
    <div className="border-2 border-white flex p-5">
      <div className="basis-4/5">
        <Image src={tre} alt="Image" />
      </div>
      <div className="flex flex-col items-center justify-between ml-5">
        <p className="text-white font-normal text-lg leading-tight">
          Металлострой,ул. Полевая,
          <br />
          д.8
        </p>
        <div className="border-2 border-white w-full h-1/2 flex justify-center items-center">
          <svg
            width="32"
            height="37"
            viewBox="0 0 32 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Polygon 1"
              d="M32 18.5L2.89589e-07 37L1.90735e-06 -1.39839e-06L32 18.5Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Video;
