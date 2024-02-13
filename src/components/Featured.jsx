/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import image1 from "../assets/feature1.png";
import image2 from "../assets/feature2.jpg";
import image3 from "../assets/feature3.jpg";
import image4 from "../assets/feature4.png";
import { MdArrowOutward } from "react-icons/md";
import { motion, useAnimation } from "framer-motion";

const Featured = () => {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation()
  ];
  const handleHover = e => {
    cards[e].start({ y: "0" });
  };
  const handleHoverEnd = e => {
    cards[e].start({ y: "100%" });
  };

  return <div data-scroll data-scroll-section data-scroll-speed=".1" className="h-auto w-full rounded-3xl bg-whites">
      <div className="heading w-full">
        <h1 className="text-[4.2rem] px-16 py-28 pb-10 font-medium tracking-wide font-neuemontreal">
          Featured projects
        </h1>
        <div className="w-full border-b-[1px] border-[#777777]" />
      </div>

      {/* First card section */}
      <div className="mainSection h-auto w-auto grid grid-cols-2 pl-10 px-16">
        <div className="cardSection h-full w-[50vw] px-10 pb-20 grid gap-5 grid-cols-2">
          <div className="flex relative justify-center flex-col w-[45vw]">
            <div className="headings py-20 pb-10 flex  gap-3 items-center">
              <div className="h-3 w-3 bg-black rounded-full" />
              <h1 className="uppercase font-neuemontreal font-medium tracking-wider text-lg absolute -z-10">
                fyde
              </h1>
            </div>
            <h1 style={{ position: "absolute", left: "100%", transform: "translate(-50%, 50%)" }} className="absolute flex text-[10vw] uppercase font-foundersgrotesk text-[rgb(205,235,105)] z-[9999] leading-none left-full top-1/2  -translate-y-1/2  -translate-x-1/2 overflow-hidden">
              {"fyde"
                .split("")
                .map((item, index) =>
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.03
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                )}
            </h1>
            <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className="h-[75vh] group w-full rounded-xl bg-red-600 hover:scale-[.96] duration-500 ease-out cursor-pointer overflow-hidden">
              <img src={image1} alt="Features 1" className="h-full w-full group-hover:scale-110 duration-300 ease-in" />
            </motion.div>
            <div className="py-8 flex items-center justify-start gap-4">
              <button className="border-[1px] rounded-full uppercase font-neuemontreal text-lg tracking-wide border-black px-5 py-2">
                audit
              </button>
              <button className="border-[1px] rounded-full uppercase font-neuemontreal text-lg tracking-wide border-black px-5 py-2">
                copywriting
              </button>
              <button className="border-[1px] rounded-full uppercase font-neuemontreal text-lg tracking-wide border-black px-5 py-2">
                sales deck
              </button>
              <button className="border-[1px] rounded-full uppercase font-neuemontreal text-lg tracking-wide border-black px-5 py-2">
                slides Design
              </button>
            </div>
          </div>
        </div>
        <div className="cardSection h-full w-[50vw] px-10 pb-20 grid gap-5 grid-cols-2">
          <div className="flex relative justify-center flex-col w-[45vw]">
            <div className="headings py-20 pb-10 flex  gap-3 items-center">
              <div className="h-3 w-3 bg-black rounded-full" />
              <h1 className="uppercase font-neuemontreal font-medium tracking-wider text-lg">
                vise
              </h1>
            </div>
            <h1 style={{ position: "absolute", left: 0, transform: "translate(-50%, 50%)" }} className="absolute flex text-[10vw] uppercase font-foundersgrotesk text-[rgb(205,235,105)] z-[9999] leading-none left-full top-1/2  -translate-y-1/2  -translate-x-1/2 overflow-hidden">
              {"vise"
                .split("")
                .map((item, index) =>
                  <motion.span
                    key={index}
                    className="inline-block"
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.03
                    }}
                  >
                    {item}
                  </motion.span>
                )}
            </h1>
            <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEnd(1)} className="h-[75vh] group w-full rounded-xl bg-red-600 hover:scale-[.96] duration-500 ease-out cursor-pointer overflow-hidden">
              <img src={image2} alt="Features 1" className="h-full w-full group-hover:scale-110 duration-300 ease-in" />
            </motion.div>
            <div className="py-8 flex items-center justify-start gap-4">
              <button className="border-[1px] rounded-full uppercase font-neuemontreal text-lg tracking-wide border-black px-5 py-2">
                agency
              </button>
              <button className="border-[1px] rounded-full uppercase font-neuemontreal text-lg tracking-wide border-black px-5 py-2">
                company presentation
              </button>
            </div>
          </div>
        </div>
        <div className="cardSection h-full w-[50vw] px-10 pb-20 grid gap-5 grid-cols-2">
          <div className="flex relative justify-center flex-col w-[45vw]">
            <div className="headings py-20 pb-10 flex  gap-3 items-center">
              <div className="h-3 w-3 bg-black rounded-full" />
              <h1 className="uppercase font-neuemontreal font-medium tracking-wider text-lg">
                trawa
              </h1>
            </div>
            <h1 style={{ position: "absolute", left: "100%", transform: "translate(-50%, 50%)" }} className="absolute flex text-[10vw] uppercase font-foundersgrotesk text-[rgb(205,235,105)] z-[9999] leading-none left-full top-1/2  -translate-y-1/2  -translate-x-1/2 overflow-hidden">
              {"trawa"
                .split("")
                .map((item, index) =>
                  <motion.span
                    key={index}
                    className="inline-block"
                    initial={{ y: "100%" }}
                    animate={cards[2]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05
                    }}
                  >
                    {item}
                  </motion.span>
                )}
            </h1>
            <motion.div onHoverStart={() => handleHover(2)} onHoverEnd={() => handleHoverEnd(2)} className="h-[75vh] group w-full rounded-xl bg-red-600 hover:scale-[.96] duration-500 ease-out cursor-pointer overflow-hidden">
              <img src={image3} alt="Features 1" className="h-full w-full group-hover:scale-110 duration-300 ease-in" />
            </motion.div>
            <div className="py-8 flex items-center justify-start gap-4">
              <button className="border-[1px] rounded-full uppercase font-neuemontreal text-lg tracking-wide border-black px-5 py-2">
                Brand identity
              </button>
              <button className="border-[1px] rounded-full uppercase font-neuemontreal text-lg tracking-wide border-black px-5 py-2">
                design research
              </button>
              <button className="border-[1px] rounded-full uppercase font-neuemontreal text-lg tracking-wide border-black px-5 py-2">
                investor deck
              </button>
            </div>
          </div>
        </div>
        <div className="cardSection h-full w-[50vw] px-10 pb-20 grid gap-5 grid-cols-2">
          <div className="flex relative justify-center flex-col w-[45vw]">
            <div className="headings py-20 pb-10 flex  gap-3 items-center">
              <div className="h-3 w-3 bg-black rounded-full" />
              <h1 className="uppercase font-neuemontreal font-medium tracking-wider text-lg">
                premium blend
              </h1>
            </div>
            <h1 style={{ position: "absolute", left: 0, transform: "translate(-50%, 50%)" }} className="absolute flex text-[10vw] uppercase font-foundersgrotesk text-[rgb(205,235,105)] z-[9999] leading-none left-full top-1/2  -translate-y-1/2  -translate-x-1/2 overflow-hidden">
              {"premium blend"
                .split("")
                .map((item, index) =>
                  <motion.span
                    key={index}
                    className="inline-block"
                    initial={{ y: "100%" }}
                    animate={cards[3]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.01
                    }}
                  >
                    {item}
                  </motion.span>
                )}
            </h1>
            <motion.div onHoverStart={() => handleHover(3)} onHoverEnd={() => handleHoverEnd(3)} className="h-[75vh] group w-full rounded-xl bg-red-600 hover:scale-[.96] duration-500 ease-out cursor-pointer overflow-hidden">
              <img src={image4} alt="Features 1" className="h-full w-full group-hover:scale-110 duration-300 ease-in" />
            </motion.div>
            <div className="py-8 flex items-center justify-start gap-4">
              <button className="border-[1px] rounded-full uppercase font-neuemontreal text-lg tracking-wide border-black px-5 py-2">
                Branded template
              </button>
            </div>
          </div>
        </div>
        {/* Repeat this structure for other card sections */}
      </div>

      <button className="group relative bottom-0 left-1/2 -translate-x-[50%] -translate-y-[50%] border px-8 py-2 w-fit h-fit border-black rounded-full uppercase bg-zinc-800 hover:bg-black duration-150 ease-in-out text-white text-xl flex gap-10 items-center pr-1">
        view case studies
        <span>
          <MdArrowOutward className="h-full w-16 p-4 self-end duration-300 ease-in scale-[.2] bg-white group-hover:bg-white group-hover:text-black group-hover:scale-100 rounded-full" />
        </span>
      </button>

      {/* Add more card sections as needed */}
    </div>;
};

export default Featured;
