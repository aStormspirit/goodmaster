"use client";

import logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex w-full justify-center p-10">
      <div className="flex items-center justify-between w-3/4">
        <Image src={logo} alt="Logo" />
        <div className="flex items-center justify-end flex-1">
          <ul className="flex gap-5 px-5 text-base font-light leading-4 text-white max-md:flex-wrap text-xl">
            <Link className={`${pathname === "/" ? "font-bold" : ""}`} href="/">
              Главная
            </Link>
            <Link
              className={`${pathname === "/catalog" ? "font-bold" : ""}`}
              href="/catalog"
            >
              Каталог
            </Link>
            <Link
              className={`${pathname === "/portfolio" ? "font-bold" : ""}`}
              href="/portfolio"
            >
              Портфолио
            </Link>
            <Link
              className={`${pathname === "/potolok" ? "font-bold" : ""}`}
              href="/potolok"
            >
              Умный потолок
            </Link>
            <Link
              className={`${pathname === "/services" ? "font-bold" : ""}`}
              href="/services"
            >
              Услуги
            </Link>
            <Link
              className={`${pathname === "/reviews" ? "font-bold" : ""}`}
              href="/reviews"
            >
              Отзывы
            </Link>
            <Link
              className={`${pathname === "/contacts" ? "font-bold" : ""}`}
              href="/contacts"
            >
              Контакты
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
