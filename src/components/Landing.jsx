/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Landing = () => {
  return <div data-scroll data-scroll-section data-scroll-speed=".2" className="w-full bg-whites pt-1 pb-0">
      <div className="textstruct mt-52 px-20">
        {["we create", "eye opening", "presentations"].map((item, index) =>
          <div key={index} className="masker ">
            <div className="w-fit flex items-end overflow-hidden">
              {index === 1 &&
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="w-[9vw] rounded-md mr-[1vw]  h-[5.7vw] -top-[.8vw] bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] relative "
                />}
              <h1 className="uppercase pt-[3vw] font-foundersgrotesk text-[8.5vw] text-[#1c1c1c] leading-[.5] font-bold">
                {item}
              </h1>
            </div>
          </div>
        )}
      </div>
      <div className="border-t-[1px] border-[#777777] mt-32 flex justify-between items-center">
        {["For public and private companies", "From the first pitch to IPO"].map(
          (item, index) =>
            <p
              className="text-[#1f1f1f] py-7 px-20 text-xl font-sans"
              key={index}
            >
              {item}
            </p>
        )}
        <div className="start flex px-16 gap-2 items-center">
          <div className="px-5 py-3 font-medium border-[1px] cursor-pointer border-[#777777] text-sm capitalize rounded-full">
            START THE PROJECT
          </div>
          <div className="h-12 w-12 rounded-full border-[1px] cursor-pointer border-[#777777] flex items-center justify-center">
            <MdArrowOutward className="h-6 w-8" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-16">
        <span className="text-[1.25rem] font-neuemontreal font-light text-[#6b6b6b]">
          Scroll down
        </span>
      </div>
    </div>;
};

export default Landing;
