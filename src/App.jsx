/* eslint-disable no-unused-vars */
import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Featured from "./components/Featured";
import Eyes from "./components/Eyes";
import Reviews from "./components/Reviews";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import PresentProject from "./components/PresentProject";

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen bg-whites">
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Reviews />
      <PresentProject />
      <Footer />
    </div>
  );
};

export default App;
