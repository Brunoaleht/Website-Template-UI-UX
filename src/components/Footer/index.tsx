import styles from "@/styles";
import { logo } from "@/assets";
import { footerLinks, socialMedias } from "@/constants";
import Image from "next/image";
import Link from 'next/link';
export type FooterProps = {
  title?: string;
};

export const Footer = ({ title }: FooterProps) => {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className={`flex-1 w-full flex flex-col justify-start mr-10`}>
          <Image
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.title}
              className="flex-col flex ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f413fr45]">
        <p className="font-poppins font-normal text-[18px] leading-[27px] text-white">
          Copyright <span className="text-secondary text-[19px]">&#169;</span>{" "}
          2021 HooBank. All Rights Reserved.
        </p>
        <div className="md:mt-0 mt-6">
          <ul className="list-none flex flex-row">
            {socialMedias.map((socialMedia, index) => (
              <li key={socialMedia.id} className="cursor-pointer">
                <Link href={socialMedia.link} className="">
                  <Image
                    src={socialMedia.icon}
                    alt={socialMedia.id}
                    className={`w-[21px] h-[21px] object-contain ${
                      index !== socialMedias.length - 1 ? "mr-6" : "mr-0"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
