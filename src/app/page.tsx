import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Photos from "./ui/Photos";
import Slider3 from "./ui/Slider3";
import Header from "@/components/Header";
import Player from "@/components/Player";
import bg from "@/assets/bg.jpg";

export default function Home() {
  return (
    <>
      <Header
        image={bg}
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
      <Player />
      <Photos />
      <Slider3 />
      <Banner />
      <Footer />
    </>
  );
}
