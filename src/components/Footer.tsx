import Image from "next/image";
import logo from "@/assets/logo.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white flex justify-center">
      <div className="container mx-auto p-16">
        <div className="flex">
          <Link href={"/"}>
            <Image src={logo} alt="Good Master" width={100} height={100} />
          </Link>
          <div className="flex flex-col ml-10 w-full">
            <div className="self-start font-medium max-md:ml-1 text-xl">
              Натяжные потолки
            </div>
            <div className="flex gap-5 mt-6 font-light max-lg:flex-wrap text-lg">
              <Link href={"/"} className="basis-[14%]">
                Главная
              </Link>
              <Link href={"/catalog"} className="basis-[14%]">
                Каталог
              </Link>
              <Link href={"/portfolio"} className="basis-[14%]">
                Портфолио
              </Link>
              <Link href={"/potolok"} className="basis-[14%]">
                Умный потолок
              </Link>
              <Link href={"/services"} className="basis-[14%] text-center">
                Услуги
              </Link>
              <Link href={"/reviews"} className="basis-[14%] text-center">
                Отзывы
              </Link>
              <Link href={"/contacts"} className="basis-[14%] text-end">
                Контакты
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-16 w-full font-light max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex-auto">©Good Master 2024</div>
          <div className="flex-auto text-right underline">
            Политика конфиденциальности
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
