/* eslint-disable no-unused-vars */
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const About = () => {
  return <div data-scroll data-scroll-section data-scroll-speed="-.2" className="h-fit w-full py-20 rounded-3xl bg-[#CCEA69] relative bottom-0">
      <div className="w-[85%] px-16 py-12">
        <h2 className="w-full font-light  text-[3.6vw] font-neuemontreal leading-[3.7vw]">
          Ochi is a strategic partner for fast-grow­ing tech businesses that need to <span className="border-b-[3px] border-black">raise funds </span>, <span className="border-b-[3px] border-black">sell products,</span> <span className="border-b-[3px] border-black">ex­plain com­plex ideas</span>, and <span className="border-b-[3px] border-black">hire great peo­ple</span>.
        </h2>
      </div>
      <div className="w-full border-b-[1px] border-[#777777] py-5" />
      <div className="texts flex w-full px-16 py-5 justify-arround">
        <div className="heading w-2/4 h-auto ">
          <h1 className="text-xl font-neuemontreal text-[#2d2d2d]">
            What you can expect:
          </h1>
        </div>
        <div className="midText w-1/4 flex flex-col">
          <p className="text-2xl font-neuemontreal text-[#2d2d2d] font-light  text-start p-5 py-0">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </p>
          <p className="text-2xl font-neuemontreal text-[#2d2d2d] font-light  text-start p-5 py-5">
            We believe the mix of strategy and design (with a bit of coffee)
            is what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className="endText flex flex-col p-24 px-32">
          <h1 className="text-2xl font-light text-[#2d2d2d] font-neuemontreal ">
            S :
          </h1>
          <ul className="py-3 text-2xl font-neuemontreal text-[#2d2d2d] flex flex-col gap-1 capitalize tracking-wide font-extralight">
            {["Instagram", "Behance", "Facebook", "Linkedin"].map(
              (items, index) =>
                <li className="" key={index}>
                  <a href="/">
                    {items}
                  </a>
                </li>
            )}
          </ul>
        </div>
      </div>
      <div className="w-full border-b-[1px] border-[#777777] py-5" />
      <div className="approch flex justify-around">
        <div className="w-2/4 px-16 py-5">
          <h1 className="text-7xl font-neuemontreal">Our approach:</h1>
          <button className="group border px-8 py-2 border-black rounded-full translate-y-5 uppercase bg-zinc-800 hover:bg-black duration-150 ease-in-out text-white text-xl flex gap-6 items-center pr-3">
            Reed More
            <span>
              <MdArrowOutward className="h-full w-16 p-4 self-end duration-300 ease-in scale-[.2] bg-white group-hover:bg-white group-hover:text-black group-hover:scale-100 rounded-full" />
            </span>
          </button>
        </div>
        <div className="w-[55vw] h-[70vh] p-10 items-center justify-center pb-0">
          <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="our Arrroach" className="w-full h-full rounded-2xl object-cover object-center hover:scale-[1.05] duration-500" />
        </div>
      </div>
    </div>;
};

export default About;
