"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./how-to-buy.css";
import Image from "next/image";
import TitleHeading from "../common/title-heading";

export default function HowToBuy() {
  const slides = [
    { image: "/assets/how-to-buy/p1.svg" },
    { image: "/assets/how-to-buy/p2.svg" },
    { image: "/assets/how-to-buy/p3.svg" },
    { image: "/assets/how-to-buy/p4.svg" },
  ];

  return (
    <div id="connect-wallet" className="carousel-container py-20 px-4 sm:px-0">
      <TitleHeading>HOW TO BUY</TitleHeading>

      <div className="w-full flex justify-center items-center relative">
        <div className="swiper-button-prev" id="prevButton"></div>
        <div className="swiper-button-next" id="nextButton"></div>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          navigation={{
            prevEl: "#prevButton",
            nextEl: "#nextButton",
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 100,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 200,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.image}>
              <Image
                src={slide.image}
                alt="Step"
                width={900}
                height={700}
                className="backdrop-blur-lg md:backdrop-blur-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
