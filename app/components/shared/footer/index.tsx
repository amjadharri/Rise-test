"use client";

import Image from "next/image";
import CustomInput from "../../common/custom-input";
import SimpleButton from "../../common/simple-button";
import DownloadBtns from "../../common/download-btns";

export default function Footer() {
  return (
    <footer>
      <div
        className="relative w-full xl:min-h-screen py-10 bg-opacity-10 bg-no-repeat bg-cover flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/assets/footer-bg.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#20150b] via-transparent to-[#20150b] opacity-80 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#20150b] via-transparent to-[#20150b] opacity-80 pointer-events-none"></div>

        <div className="relative z-10 w-full flex flex-col items-center">
          <div className="flex justify-center items-center px-2">
            <div className="lg:min-w-[30rem] lg:max-w-[30rem] px-6 py-4 md:px-14 md:py-8 bg-[#20150b]/60 rounded-xl border border-[#EED199] border-opacity-70 flex flex-col gap-2">
              <CustomInput
                label="Subscribe For Contests, Airdrops and updates!"
                labelClassName="text-xs"
                inputClassName="focus:border-2 border-[#EED199] border-opacity-70"
                onChange={(value) => console.log(value)}
                placeholder="Enter your email address"
              />
              <SimpleButton
                label="Subscribe"
                radialColor1="#54442c"
                radialColor2="#211811"
              />
            </div>
          </div>

          <div className="mt-5 flex justify-center items-center gap-14">
            <Image
              src={"/assets/mobile-x-image.svg"}
              alt="telegram"
              width={60}
              height={60}
            />
            <Image
              src={"/assets/mobile-telegram-image.svg"}
              alt="telegram"
              width={60}
              height={60}
            />
          </div>

          <DownloadBtns />

          <div className="flex justify-center items-center gap-14 text-gradient font-semibold  text-sm lg:text-lg">
            <h4>Privacy & Policies</h4>
            <h4>Terms & Conditions</h4>
          </div>

          <div className="px-4 md:px-20 lg:px-40 md:max-w-7xl">
            <h4 className="my-5 text-center text-[#fff1de] text-shadow-effect-para text-xs lg:text-md">
              This memecoin project is for entertainment and speculative
              purposes only. It does not represent a traditional investment and
              carries a high level of risk, including the potential loss of all
              funds. This project is not affiliated with any financial
              institutions, and no warranties or guarantees are provided
              regarding its value or future performance. Participants should
              conduct their own research and consult with a financial advisor
              before engaging. By participating, you acknowledge that you
              understand and accept these risks.
            </h4>
            <h4 className="text-center text-[#fff1de] text-shadow-effect-para text-md">
              @copyright 2024 All rights reserved by TheRiseOfMemes
            </h4>
          </div>
        </div>
      </div>
    </footer>
  );
}
