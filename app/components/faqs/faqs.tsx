"use client";
import React, { useState } from "react";
import Section from "../common/section";
import bg from "/public/assets/roadmap/faq-bg.svg";
import TitleHeading from "../common/title-heading";
import { DownArrow, UpArrow } from "@/app/svg";
import { faqData } from "./data";

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split the faqData into two halves
  const midIndex = Math.ceil(faqData.length / 2);
  const firstHalf = faqData.slice(0, midIndex);
  const secondHalf = faqData.slice(midIndex);

  return (
    <div
      id="faq"
      className="bg-cover bg-center lg:min-h-screen bg-no-repeat lg:py-10 py-5 lg:px-10"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <TitleHeading>FAQ</TitleHeading>

      <Section>
        <div className="grid grid-cols-1 xl:grid-cols-2 items-baseline gap-6">
          {/* First Half of FAQs */}
          <div className="flex flex-col gap-4">
            {firstHalf.map((item, index) => (
              <div
                key={index}
                className="faqs bg-red-500 px-4 py-3 shadow-lg rounded-md break-inside-avoid"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left flex justify-between items-center font-avon lg:text-lg text-base font-[400] text-transparent bg-clip-text bg-gradient-to-b from-[#E4D9BD] to-[#AA8246] rounded-md uppercase"
                >
                  {item.question}
                  <span className="text-xl">
                    {openIndex === index ? <UpArrow /> : <DownArrow />}
                  </span>
                </button>
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    openIndex === index
                      ? "max-h-screen opacity-100 py-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="w-full text-left flex justify-between items-center lg:text-base text-sm font-[500] text-[#FFF1DE]">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Half of FAQs */}
          <div className="flex flex-col gap-4">
            {secondHalf.map((item, index) => (
              <div
                key={index}
                className="faqs px-4 py-3 shadow-lg break-inside-avoid"
              >
                <button
                  onClick={() => toggleAccordion(midIndex + index)} // Adjust the index for the second half
                  className="w-full text-left flex justify-between items-center font-avon lg:text-lg text-base font-[400] text-transparent bg-clip-text bg-gradient-to-b from-[#E4D9BD] to-[#AA8246] uppercase"
                >
                  {item.question}
                  <span className="text-xl">
                    {openIndex === midIndex + index ? (
                      <UpArrow />
                    ) : (
                      <DownArrow />
                    )}
                  </span>
                </button>
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    openIndex === midIndex + index
                      ? "max-h-screen opacity-100 py-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="w-full text-left flex justify-between items-center lg:text-base text-sm font-[500] text-[#FFF1DE]">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FAQs;
