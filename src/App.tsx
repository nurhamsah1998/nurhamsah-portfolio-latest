import React from "react";
import Footer from "Screen/Footer";
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
      <AboutMe />
      <Project />
    </div>
  );
}

export default App;
