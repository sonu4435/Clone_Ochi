/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import image1 from "../assets/William-Barnes.png";
import image2 from "../assets/review2.png";
import image3 from "../assets/review3.png";
import image4 from "../assets/review4.png";
import image5 from "../assets/review5.png";

import image1_2 from "../assets/logo001.svg";
import image2_2 from "../assets/logo002.svg";
import image3_2 from "../assets/logo003.png";
import { MdArrowOutward } from "react-icons/md";

const Reviews = () => {
  const [showClientDetails, setShowClientDetails] = useState(
    Array(5).fill(false) // Assuming there are 2 clients initially, modify this array according to your actual number of clients
  );

  const objOfItems = [
    {
      workName: "Karman Ventures",
      clientName: "William Barnes",
      image: image1,
      buttons: ["INVESTOR DECK", "SALES DECK"],
      desc: "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5"
    },
    {
      workName: "Planetly",
      clientName: "Nina Walloch",
      image: image2,
      buttons:["Agency", "Big News Deck", "Branded Template", "Investor Deck","Product Presentation", "Sales Deck", "Startup pitch"],
      desc: "Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our presentation decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership."
    },
    {
      workName: "Workiz Easy",
      clientName: "Tomer Levy",
      image: image3,
      buttons: ["INVESTOR DECK", "SALES DECK"],
      desc: "OCHI brought a certain level of professionalism into our presentations that we were lacking before. When I showed our management and HR teams the presentations OCHI developed, they were amazed — the final product was exactly what we needed to create a better experience for new employees and our clients."
    },
    {
      workName: "Black Book",
      clientName: "Jaci Smith",
      image: image5,
      buttons: ["REVIEW", "STARTUP PITCH"],
      desc: "They nailed what our product was all about. We found their ability to workshop all the angles and take on feedback was great and it shows in the final product. Everything moved with a milestone dynamic brief via Notion which was handy to track progress. We’re very happy with the process and the final product. All was handled well and professionally."
    },
    {
      workName: "Trawa Energy",
      clientName: "David Budde",
      image: image4,
      buttons: ["BRANDING", "INVESTOR DECK", "STARTUP PITCH"],
      desc: "We were surprised by the accuracy with which Ochi Design nailed the overall design language that perfectly aligned with our personal preferences and the vision that we have for our young company."
    }
  ];

  const toggleClientDetails = (index) => {
    const newShowClientDetails = Array(objOfItems.length).fill(false);
    newShowClientDetails[index] = true;
    setShowClientDetails(newShowClientDetails);
  };

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1"className="h-auto w-full bg-whites py-20 pb-0">
      <h1 className="text-7xl font-neuemontreal border-b-[1px] px-16 border-[#7777] pb-10">
        Clients&apos; reviews
      </h1>
      <div className="reviews w-full h-auto">
        {objOfItems.map((items, index) => (
          <div
            className="single-client  px-16 py-5 h-auto w-full border-b-[1px] border-[#7777] pb-5"
            key={index}
          >
            <div className="items flex items-center justify-between">
              <h1 className="text-[2.2vh] w-full font-medium tracking-wide font-neuemontreal">
                {items.workName}
              </h1>
              {showClientDetails[index] && (
                <h1 className="text-[2.2vh] w-full font-medium tracking-wide font-neuemontreal capitalize">
                  services:
                </h1>
              )}
              <h1 className="text-[2.2vh] w-full font-medium tracking-wide font-neuemontreal">
                {items.clientName}
              </h1>
              <h1
                className="text-[2.2vh] font-medium tracking-wide font-neuemontreal cursor-pointer"
                onClick={() => toggleClientDetails(index)}
              >
                READ
              </h1>
            </div>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: showClientDetails[index] ? "auto" : 0 }}
              transition={{ duration: 0.5 }}
              className="clientDetails"
            >
              {showClientDetails[index] && (
                <div className="client flex items-center">
                  <div className="clientProfile w-3/4 relative left-[30%] ">
                    {items.buttons?.map((Item, index) => (
                      <div
                        className="py-2 group flex gap-3 items-center w-fit"
                        key={index}
                      >
                        <button className="button1  py-3 text-black font-neuemontreal border-[1px] border-[#000] text-[1rem] w-fit rounded-full px-10 hover:bg-black hover:text-white duration-500 ease-in-out">
                          {Item}
                        </button>
                        <MdArrowOutward className="h-10 w-10 opacity-0 bg-black border-[1px] rounded-full text-white p-2 group-hover:opacity-100 duration-700 ease-in-out" />
                      </div>
                    ))}
                  </div>
                  <div className="w-1/2 h-auto px-20 overflow-hidden py-10">
                    <img
                      src={items.image}
                      alt="reviews"
                      className="h-32 w-32 object-cover rounded-xl object-center"
                    />
                    <div className="desc py-10">
                      <p className="text-xl">{items.desc}</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
      <div className="w-full h-screen bg-whites flex items-center gap-5 pb-20 px-16">
      <div className="cardcontainer w-1/2">
        <div className="card relative w-full h-[50vh] bg-[#004C42] rounded-xl ">
          <img src={image1_2} alt="logo" className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]" />
          <button className="absolute bottom-5 left-5 font-bold text-xl text-[rgb(205,235,105)] border-[1px] px-6 py-3 rounded-full border-[rgb(205,235,105)]">
            &copy;2019–2022
          </button>
        </div>
      </div>
      <div className="cardcontainer flex w-1/2 gap-5">
        <div className="card relative w-1/2 h-[50vh] bg-[#202120] rounded-xl">
          <img src={image2_2} alt="logo" className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]" />
          <button className="absolute bottom-5 left-5 font-bold text-xl text-white uppercase border-[1px] px-6 py-3 rounded-full border-[rgb(255,255,255)]">
            Rating 5.0 on Clutch
          </button>
        </div>
        <div className="card relative w-1/2 h-[50vh] bg-[#202120] rounded-xl">
          <img width="102" height="104" src={image3_2} alt="logo" className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]" />
          <button className="absolute bottom-5 left-5 font-bold text-xl text-white uppercase border-[1px] px-6 py-3 rounded-full border-[rgb(255,255,255)]">
            Rating 5.0 on Clutch
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Reviews;
