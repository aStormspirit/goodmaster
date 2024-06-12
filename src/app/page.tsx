import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Hero from "./ui/Hero";
import Photos from "./ui/Photos";
import Video from "./ui/Video";
import { Slider2 } from "./ui/Slider2";

export default function Home() {
  return (
    <>
      <div className="w-full bg-[url('/background.png')] bg-no-repeat bg-cover">
        <Navbar />
        <Hero
          title={
            <>
              <span>Натяжные потолки</span>
              <br />
              <span className="font-bold">«под ключ»</span>
            </>
          }
          description={
            <>
              <div className="mt-12 max-md:mt-10">
                Натяжные потолки, которые мы создаем для вас - это продуманный
                дизайн, который подойдет именно для вашей квартиры/вашего дома.
              </div>
              <div className="mt-7">
                Наши мастера не только установят вам потолки, но и помогут
                определиться с дизайнерским решением - мы подберем вам цвет
                полотна, светильники, установим шинопроводы или теневые профили,
                все исходя из вашего интерьера и ваших пожеланий!
              </div>
            </>
          }
        />
      </div>
      <section className="bg-indigo-900 grid grid-rows-12 grid-cols-12 h-[838px] gap-16 max-lg:grid-cols-2 max-lg:grid-rows-2">
        <div className="justify-center items-start text-4xl leading-10 text-white max-md:pr-5 max-md:pl-8 col-start-1 col-end-7 row-start-1 row-end-7 ">
          <div className="lg:pl-[16rem] max-lg:pt-4">
            {" "}
            Почему мы
            <br />
            <span className="font-bold">хорошо работаем?</span>
          </div>
        </div>
        <section className="col-start-2 col-end-13 row-start-3 row-end-12 z-[1] pl-[7%] pr-[13%] max-lg:col-start-1 max-lg:col-end-12">
          <Video />
        </section>
        <div className="bg-white flex justify-center items-end col-start-1 col-end-7 row-start-7 row-end-13">
          <div className="text-indigo-900 text-[40px] font-normal font-['Montserrat'] leading-[48px] max-lg:pl-[7%]">
            Как мы
            <span className="font-bold"> работаем?</span>
          </div>
        </div>
      </section>
      <Photos />
      <Slider2 />
      <Banner />
      <Footer />
    </>
  );
}
