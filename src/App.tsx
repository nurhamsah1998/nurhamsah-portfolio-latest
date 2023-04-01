import React from "react";
import ContactMe from "Screen/ContactMe";
import Footer from "Screen/Footer";
import LogoProject from "Screen/LogoProject";
import Project from "Screen/Project";
import AboutMe from "./Screen/AboutMe";
import Header from "./Screen/Header";
import Navbar from "./Screen/Navbar";
import Skill from "./Screen/Skill";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="grid gap-24">
        <AboutMe />
        <Project />
        <LogoProject />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
