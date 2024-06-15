import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Hero from "./ui/Hero";
import Photos from "./ui/Photos";
import Video from "./ui/Video";
import { Slider2 } from "./ui/Slider2";
import Header from "@/components/Header";
import Player from "@/components/Player";

export default function Home() {
  return (
    <>
      <Header />
      <Player />
      <Photos />
      <Slider2 />
      <Banner />
      <Footer />
    </>
  );
}
