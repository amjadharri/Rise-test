"use client";

import CustomButton from "@/app/components/common/custom-button";
import Image from "next/image";
import { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import LanguageSelector from "../../common/language-selector";

const Navbar = () => {
  const leftLinks = [
    { title: "Game", href: "#game" },
    { title: "Token Info", href: "#tokenomics" },
    { title: "WhitePaper", href: "#white-paper" },
  ];

  const rightLinks = [
    { title: "FAQ", href: "#faq" },
    { title: "Connect Wallet", href: "#connect-wallet" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("ENG");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="w-full bg-[#1a1408] border-b-[1px] shadow-lg border-[#E4D9BD] border-opacity-30 z-50 sticky top-0">
      <div className="w-full h-[70px] flex items-center">
        <div className="hidden lg:flex w-1/2 justify-end gap-10 xl:gap-16 xxl:gap-20 items-center pr-10 ">
          {leftLinks.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="flex items-center justify-center gap-2 text-gradient hover:text-gray-200 hover:bg-gray-700 transition-all duration-300 cursor-pointer font-semibold"
            >
              {link.title}
            </a>
          ))}
        </div>

        <div className="relative  flex justify-center items-center flex-grow ml-7 lg:ml-0">
          <div className="absolute bottom-[-30px] lg:bottom-[-70px] z-[-1] w-[180px] h-48 rounded-b-full bg-[#1a1408]" />
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={150}
            height={150}
            priority
            className="relative z-10 mb-[-10px] lg:mb-[-50px]"
          />
        </div>

        <div className="hidden lg:flex w-1/2 justify-start gap-10 xl:gap-16 xxl:gap-20 items-center pl-10">
          {rightLinks.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="flex items-center justify-center gap-2 text-gradient hover:text-gray-200 hover:bg-gray-700 transition-all duration-300 cursor-pointer font-semibold text-nowrap"
            >
              {link.title}
            </a>
          ))}
          <div className="relative flex items-center gap-4">
            <CustomButton label="Buy" />
            <LanguageSelector
              currentLang={selectedLang}
              onLanguageChange={setSelectedLang}
              className="absolute right-0 top-0 z-10"
            />
          </div>
        </div>

        <div className="flex lg:hidden justify-end items-center gap-5 w-full pr-2">
          <CustomButton label="Buy" className="mr-2" />
          <button
            onClick={toggleMenu}
            className="text-[#E4D9BD] border-2 border-[#E4D9BD] rounded-full p-2"
          >
            <RiMenu4Line size={24} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute right-0 max-w-xl px-14 py-8 flex flex-col items-center bg-[#130e08] z-40 border-l-[1px] border-r-[1px] border-b-[1px] border-[#E4D9BD] border-opacity-50">
          {leftLinks.concat(rightLinks).map((link, index) => (
            <div
              key={index}
              className="py-4 cursor-pointer text-gradient font-semibold hover:text-gray-200"
            >
              {link.title}
            </div>
          ))}

          <div className="py-4">
            <LanguageSelector
              currentLang={selectedLang}
              onLanguageChange={setSelectedLang}
            />
          </div>

          <div className="flex gap-10 mt-5">
            <Image
              src={"/assets/mobile-x-image.svg"}
              alt="x"
              width={40}
              height={40}
            />
            <Image
              src={"/assets/mobile-telegram-image.svg"}
              alt="x"
              width={40}
              height={40}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
