import React from "react";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Video from "../ui/Video";
import ImageSlider from "../ui/ImageSlider";

const Audio = () => {
  return (
    <div className="relative flex-col justify-start items-start inline-flex min-w-[506px] min-h-[119px] border-2 border-white mb-10">
      <div className="bg-indigo-900">
        <div className="p-4">
          <div className="text-white text-base font-normal font-Montserrat leading-tight mb-2">
            Металлострой, ул. Полевая, д. 8
          </div>
          <div className="bg-white min-h-[55px] min-w-[466px]">
            <div className="flex items-center p-4 gap-4">
              <div>
                <svg
                  width="15"
                  height="17"
                  viewBox="0 0 15 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Polygon 1"
                    d="M15 8.5L2.10379e-07 17L9.53674e-07 -6.55493e-07L15 8.5Z"
                    fill="#2D3686"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-indigo-900 text-base font-normal font-Montserrat leading-tight">
                  00:05
                </p>
                <progress
                  value="23"
                  max="100"
                  className="w-[303px] h-[3px]"
                ></progress>
                <p className="text-indigo-900 text-base font-normal font-Montserrat leading-tight">
                  01:20
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const revies = () => {
  return (
    <>
      <div className="bg-indigo-900">
        <Navbar />
      </div>
      <section className="bg-indigo-900 flex justify-center p-10">
        <div className="w-3/4">
          <div className="flex max-lg:flex-col">
            <div className="basis-1/2">
              <h1 className="text-white text-4xl font-normal font-Montserrat leading-10 mb-10">
                Аудио отзывы
              </h1>
              <div>
                <Audio />
                <Audio />
                <Audio />
                <Audio />
              </div>
            </div>
            <div className="basis-1/2">
              <div className="flex mb-10 justify-between">
                <div className="text-white text-4xl font-normal font-Montserrat leading-10">
                  Видео отзывы
                </div>
                <div className="flex gap-6">
                  <Button className="p-2" />
                  <Button className="p-2" rotate={180} />
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <Video />
                <Video />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-indigo-900 flex justify-center p-10">
        <div className="w-3/4">
          <div>
            <h2 className="text-white text-4xl font-normal font-Montserrat leading-10 mb-[40px]">
              Текстовые отзывы
            </h2>
          </div>
          <div className="">
            <div className="border-2 border-white p-4 flex gap-4">
              <div className="basis-1/2">
                <ImageSlider />
              </div>
              <div className="basis-1/2">
                <div className="flex flex-col justify-between h-full">
                  <div className="text-white text-lg font-medium font-Montserrat leading-snug">
                    Установка потолков в СПБ, ул. Днепровская, д. 65
                  </div>
                  <div className="flex">
                    <div className="">
                      <div className=" text-white text-base font-light font-Montserrat leading-tight">
                        Срок исполнени
                      </div>
                      <div className=" text-white text-lg font-medium font-Montserrat leading-snug">
                        8 дней
                      </div>
                    </div>
                    <div className="">
                      <div className=" text-white text-base font-light font-Montserrat leading-tight">
                        Бюджет работы
                      </div>
                      <div className=" text-white text-lg font-medium font-Montserrat leading-snug">
                        97 000 ₽
                      </div>
                    </div>
                  </div>

                  <div className="bg-white bg-opacity-10 basis-5/6">
                    <div className="text-white text-base font-medium font-Montserrat leading-tight">
                      Отзыв клиента:{" "}
                    </div>
                    <div className="">
                      <span className="text-white text-base font-light font-Montserrat leading-tight">
                        В приобретенной квартире начал делать ремонт. Причем
                        потребовался капитальный. Накопил для этой цели
                        необходимую сумму. И занялся сразу поиском компании,
                        которая занимается изготовлением и установкой натяжных
                        потолков. Обратился по итогу в компанию "Невадо".
                        Связался без проблем с менеджером, который все объяснил
                        подробно. Заключили договор. Понравилось как аккуратно
                        произвели установку и причем достаточно оперативно.
                        Никаких косяков я и не увидел. Ребята профессионалы.
                        Отметить могу также стоимость. Она вышла вполне
                        адекватная. Так что компанию могу лишь порекомендовать.
                        Все отлично.
                        <br />
                      </span>
                    </div>
                    <div>
                      <span className="text-white text-base font-medium font-Montserrat leading-tight">
                        Седов Артем
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Banner />
      <Footer />
    </>
  );
};

export default revies;
