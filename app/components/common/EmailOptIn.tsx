"use client";

import { useState, useEffect } from "react";
import CustomInput from "./custom-input";
import SimpleButton from './simple-button';


const EmailOptIn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000); 

    return () => clearTimeout(timer); 
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
        <div className="relative">
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
          <button
            onClick={handleClose}
            className="absolute top-4 right-6 text-sm text-[#EED199]"
          >
            ✕
          </button>
        </div>
      </div>
    )
  );
};

export default EmailOptIn;
