import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroForm from "../common/form/hero-form";

const socialLinks = [
  { src: "/assets/telegram.png", href: "#", alt: "Telegram" },
  { src: "/assets/social/2.png", href: "#", alt: "Join X" },
  { src: "/assets/social/3.png", href: "#", alt: "Audit" },
  { src: "/assets/social/4.png", href: "#", alt: "KYC" },
];

const headings = ["Build your Empire", "in the world of", "crypto legends!"];

const HeroSection = () => {
  const containerShadowStyle = {
    filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.6))",
  };

  return (
    <div className="w-full h-auto 2xl:h-auto bg-cover bg-left bg-no-repeat lg:bg-[url('/assets/main-hero-image.webp')] ">
      <div
        className="w-full h-full flex flex-col-reverse lg:flex-row bg-no-repeat bg-contain bg-[url('/assets/hero-image-mobile.png')] lg:bg-none"
        style={{
          backgroundPosition: "70% 100%",
        }}
      >
        <div className="xl:w-3/4 md:h-full  ">
          <div className="w-full 2xl:px-16 lg:px-10 px-4 pb-12 lg:py-20">
            <h1
              data-aos="zoom-in"
              className="text-gradient uppercase font-avon xl:w-4/5  2xl:w-3/4 w-full 2xl:text-7xl lg:px-4 xxl:text-[4rem] xl:text-6xl md:text-5xl text-[34px] lg:text-left text-center "
              data-text="Build your Empire in the world of crypto legends"
              style={containerShadowStyle}
            >
              {headings.map((heading, index) => (
                <span key={index} className="text-gradient ">
                  {heading}

                  <br />
                </span>
              ))}
            </h1>
          </div>
          <div className="w-full flex flex-col justify-end pt-40 md:pt-28 xxl:pt-28 2xl:pt-32 items-end">
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              className="grid grid-cols-2 lg:grid-cols-1"
            >
              {socialLinks.map((link, index) => (
                <Link key={index} href={link.href}>
                  <Image
                    src={link.src}
                    alt={link.alt}
                    width={250}
                    height={250}
                    className="hover:grayscale-[1] hover:contrast-150 hover:brightness-[0.5] contrast-100 grayscale-0 brightness-100 transition-all duration-300"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full 2xl:w-1/3 xl:w-2/5 h-full px-0 lg:pr-10 lg:pl-0 2xl:pl-4 overflow-x-hidden">
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            className="relative w-full h-full z-10 md:z-0 overflow-hidden"
          >
            <img
              src="/assets/hero-form-bg.webp"
              alt="Background"
              className="absolute top-0 left-0 w-full h-[110%] md:h-[150%] object-cover md:object-cover lg:object-cover"
            />
            <HeroForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
