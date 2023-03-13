import { useState } from "react";
import { logo, menu, close } from "../../assets";
import { navLinks } from "../../constants";
import Image from "next/image";
import Link from "next/link";

export type NavBarProps = {
  title?: string;
};

export const NavBar = (): JSX.Element => {
  const [toggle, setToggle] = useState(false);
  const OnChange = () => setToggle((prev) => !prev);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link href={"/"}>
        <Image src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      </Link>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((link, index) => (
          <li
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-secondary ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
            key={link.id}
          >
            <a href={`#${link.id}`} >{link.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt={toggle ? "close" : "menu"}
          className="w-[25px] h-[25px] object-contain"
          onClick={OnChange}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((link, index) => (
              <li
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } `}
                key={link.id}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
