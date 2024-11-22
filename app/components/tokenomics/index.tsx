import React from "react";
import Section from "../common/section";
import Image from "next/image";
import img from "/public/assets/tokenss.png";
import img2 from "/public/assets/shield2.svg";

const Tokenomics = () => {
  const points = [
    { color: "#507080", title: "Rewards: 40%" },
    { color: "#4D2A46", title: "Staking & Governance: 10%" },
    { color: "#942F24", title: "Treasury: 15%" },
    { color: "#A28F1F", title: "Presale: 20%" },
    { color: "#2B2C63", title: "Management: 5%" },
    { color: "#4D7046", title: "Liquidity: 10%" },
  ];

  return (
    <Section id="tokenomics">
      <div className="xl:min-h-screen w-full lg:py-20 py-10">
        <div className="py-5">
          <h1 className="lg:text-5xl font-avon relative text-3xl py-10 uppercase font-[400] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#E4D9BD] to-[#AA8246]">
            $RISE Tokenomics
          </h1>
        </div>

        <div className="flex justify-center w-full">
          <Image
            src={img}
            alt="Tokenomics Image"
            className="w-full max-w-[600px] md:max-w-[80%] lg:block hidden lg:max-w-[80%] h-auto object-contain"
          />

          <div className="lg:hidden block relative">
            <Image
              src={img2}
              alt="Tokenomics Image"
              className="w-full max-w-[600px] md:max-w-[80%] lg:max-w-[80%] h-auto object-contain"
            />
            <div className="flex flex-col gap-5 py-4">
              {points.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className="min-w-[20px] min-h-[20px] rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <h1 className="lg:text-2xl font-avon relative text-lg uppercase font-[400] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#E4D9BD] to-[#AA8246]">
                    {item.title}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Tokenomics;
