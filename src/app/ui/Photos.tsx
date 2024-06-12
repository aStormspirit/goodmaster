import Image from "next/image";
import first from "@/assets/1.png";
import second from "@/assets/2.png";
import third from "@/assets/3.png";
import fourth from "@/assets/4.png";
import fifth from "@/assets/5.png";
import sixth from "@/assets/6.png";
import seventh from "@/assets/7.png";

const Photos = () => {
  return (
    <section className="flex bg-[#FFFFFF] py-10 justify-center">
      <div className="w-3/4 flex flex-col gap-10 items-center max-md:gap-2 max-lg:gap-4 pl-[1%] pr-[1%]">
        <div className="flex gap-10 max-md:gap-2 max-lg:gap-4">
          <div>
            <Image src={first} alt="Image" width={1304} height={374} />
          </div>
          <div>
            <Image src={second} alt="Image" width={816} height={374} />
          </div>
        </div>
        <div className="flex gap-10 max-md:gap-2 max-lg:gap-4">
          <div className="flex gap-10 flex-col max-md:gap-2 max-lg:gap-4">
            <Image src={third} alt="Image" width={820} height={374} />
            <Image src={fifth} alt="Image" width={820} height={374} />
          </div>
          <div className="flex">
            <Image src={fourth} alt="Image" width={1306} height={750} />
          </div>
        </div>
        <div className="flex gap-10 max-md:gap-2 max-lg:gap-4">
          <div>
            <Image src={sixth} alt="Image" width={1024} height={374} />
          </div>
          <div>
            <Image src={seventh} alt="Image" width={1100} height={374} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photos;
