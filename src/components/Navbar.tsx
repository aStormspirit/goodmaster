"use client";

import logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SimpleLineIconsMenu({ fill }: any) {
  return (
    <div className="lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="45px"
        height="45px"
        viewBox="0 0 1024 1024"
      >
        <path
          fill={`${fill}`}
          d="M27 193.6c-8.2-8.2-12.2-18.6-12.2-31.2s4-23 12.2-31.2S45.6 119 58.2 119h912.4c12.6 0 23 4 31.2 12.2s12.2 18.6 12.2 31.2s-4 23-12.2 31.2s-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2m974.8 285.2c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2s-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 522.6 14.8 510s4-23 12.2-31.2s18.6-12.2 31.2-12.2h912.4c12.6 0 23 4 31.2 12.2m0 347.4c8.2 8.2 12.2 18.6 12.2 31.2s-4 23-12.2 31.2s-18.6 12.2-31.2 12.2H58.2c-12.6 0-23-4-31.2-12.2S14.8 870 14.8 857.4s4-23 12.2-31.2S45.6 814 58.2 814h912.4c12.6 0 23 4.2 31.2 12.2"
        ></path>
      </svg>
    </div>
  );
}

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex w-full justify-center">
      <div className="flex items-center justify-between container mx-auto px-16 py-10">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="Logo"
            className="max-lg:w-[60px] max-lg:h-[60px]"
          />
        </Link>
        <div className="flex items-center justify-end flex-1">
          <SimpleLineIconsMenu fill="#ffffff" />
          <ul className="flex gap-5 text-base font-light leading-4 text-white max-md:flex-wrap text-xl max-lg:text-base max-lg:hidden">
            <li>
              {" "}
              <Link
                className={`${pathname === "/" ? "font-bold" : ""}`}
                href="/"
              >
                Главная
              </Link>
            </li>
            <li>
              {" "}
              <Link
                className={`${pathname === "/catalog" ? "font-bold" : ""}`}
                href="/catalog"
              >
                Каталог
              </Link>
            </li>
            <li>
              {" "}
              <Link
                className={`${pathname === "/portfolio" ? "font-bold" : ""}`}
                href="/portfolio"
              >
                Портфолио
              </Link>
            </li>
            <li>
              {" "}
              <Link
                className={`${pathname === "/potolok" ? "font-bold" : ""}`}
                href="/potolok"
              >
                Умный потолок
              </Link>
            </li>
            <li>
              <Link
                className={`${pathname === "/services" ? "font-bold" : ""}`}
                href="/services"
              >
                Услуги
              </Link>
            </li>
            <li>
              {" "}
              <Link
                className={`${pathname === "/reviews" ? "font-bold" : ""}`}
                href="/reviews"
              >
                Отзывы
              </Link>
            </li>
            <li>
              {" "}
              <Link
                className={`${pathname === "/contacts" ? "font-bold" : ""}`}
                href="/contacts"
              >
                Контакты
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
