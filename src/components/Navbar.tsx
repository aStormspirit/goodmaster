"use client";

import logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex w-full justify-center">
      <div className="flex items-center justify-between container mx-auto px-16 py-10">
        <Image src={logo} alt="Logo" />
        <div className="flex items-center justify-end flex-1">
          <ul className="flex gap-5 text-base font-light leading-4 text-white max-md:flex-wrap text-xl">
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
