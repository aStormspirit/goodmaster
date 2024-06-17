import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Photos from "./ui/Photos";
import Slider3 from "./ui/Slider3";
import Header from "@/components/Header";
import Player from "@/components/Player";

export default function Home() {
  return (
    <>
      <Header />
      <Player />
      <Photos />
      <Slider3 />
      <Banner />
      <Footer />
    </>
  );
}
