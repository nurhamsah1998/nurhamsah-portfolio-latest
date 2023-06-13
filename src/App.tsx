import React from "react";
import ContactMe from "Screen/ContactMe";
import Footer from "Screen/Footer";
import LogoProject from "Screen/LogoProject";
import Project from "Screen/Project";
import AboutMe from "./Screen/AboutMe";
import Header from "./Screen/Header";
import Drawers from "./Screen/Drawers";
import Skill from "./Screen/Services";
import Services from "./Screen/Services";

function App() {
  /// https://stackoverflow.com/a/51828976/18038473
  const servicesRef: React.LegacyRef<HTMLDivElement> | undefined =
    React.useRef(null);
  const projectRef: React.LegacyRef<HTMLDivElement> | undefined =
    React.useRef(null);

  const handleClickServices = () => {
    /// https://stackoverflow.com/a/52528619/18038473
    servicesRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleClickApp = () => {
    /// https://stackoverflow.com/a/52528619/18038473
    projectRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <>
      <Drawers
        handleClickApp={handleClickApp}
        handleClickServices={handleClickServices}
      >
        <div className="">
          <Header />
          <div className="grid gap-24">
            <div id="#services" className="px-3 main md:p-20 ">
              <Services serviceRef={servicesRef} />
            </div>
            <div className="px-3 md:p-20 ">
              <Project projectRef={projectRef} />
            </div>
            <div className="px-3 md:p-20">
              <LogoProject />
            </div>
            <div className="px-3 md:p-20">
              <ContactMe />
            </div>
            <Footer />
          </div>
        </div>
      </Drawers>
    </>
  );
}

export default App;
