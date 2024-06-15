import Image, { StaticImageData } from "next/image";
import right from "@/assets/right.svg";
import Link from "next/link";

const Card = ({
  image,
  title,
  desc,
  className,
  id,
}: {
  image: StaticImageData;
  title: string;
  desc: string;
  className?: string;
  id: number;
}) => {
  return (
    <div className={`h-[483px] ${className}`}>
      <div className="flex flex-col justify-center text-base text-white h-full">
        <div
          className="flex flex-col px-5 pt-5 pb-10 w-full bg-indigo-900 border-2 border-white border-solid h-full justify-between"
          id="card"
        >
          <div className="h-[222px] relative" id="image">
            <Image
              src={image}
              alt="image"
              fill
              priority={true}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <div className="mt-5 font-medium leading-[130%] text-xl">
              {title}
            </div>
            <div className="mt-4 font-light leading-5 overflow-hidden h-[119px] relative">
              <div
                className="absolute h-full w-full bg-gradient-to-t from-indigo-900"
                id="background"
              ></div>
              {desc}
            </div>
          </div>
          <Link
            href={`/products/${id}`}
            className="w-full h-14 bg-white flex justify-around items-center cursor-pointer z-20"
          >
            <div className=" text-indigo-900 text-base font-bold leading-tight">
              от 20.000 ₽
            </div>
            <div className="">
              <Image src={right} alt="right" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
