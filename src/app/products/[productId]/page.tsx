import React from "react";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import { card } from "@/constants";
import InfoBlock from "@/app/ui/InfoBlock";
import Header from "@/components/Header";

const page = ({ params }: { params: { productId: string } }) => {
  const data = card[Number(params.productId)];
  return (
    <>
      <Header
        image={data.image}
        title={
          <>
            <span>{data.title}</span>
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
      <InfoBlock />
      <Banner />
      <Footer />
    </>
  );
};

export default page;
