import React from "react";
import ContactMe from "Screen/ContactMe";
import Footer from "Screen/Footer";
import LogoProject from "Screen/LogoProject";
import Project from "Screen/Project";
import AboutMe from "./Screen/AboutMe";
import Header from "./Screen/Header";
import Navbar from "./Screen/Navbar";
import Skill from "./Screen/Services";
import Services from "./Screen/Services";

function App() {
  return (
    <>
      <Navbar />
      <div className="">
        <Header />
        <div className="grid gap-24">
          <div id="#services" className="px-3 main md:p-20 ">
            <Services />
          </div>
          <div className="px-3 md:p-20 ">
            <Project />
          </div>
          <div className="px-3 md:p-20">
            <LogoProject />
          </div>
          <div className="px-3 md:p-20">
            <ContactMe />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
