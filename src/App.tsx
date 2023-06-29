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
  const logoRef: React.LegacyRef<HTMLDivElement> | undefined =
    React.useRef(null);
  const aboutMeRef: React.LegacyRef<HTMLDivElement> | undefined =
    React.useRef(null);

  const handleClickAboutMe = () => {
    /// https://stackoverflow.com/a/52528619/18038473
    aboutMeRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
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
  const handleClickLogo = () => {
    /// https://stackoverflow.com/a/52528619/18038473
    logoRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <>
      <Drawers
        handleClickApp={handleClickApp}
        handleClickServices={handleClickServices}
        handleClickLogo={handleClickLogo}
        handleClickAboutMe={handleClickAboutMe}
      >
        <div className="">
          <Header />
          <div className="grid gap-24">
            <div className="px-3 md:p-20 ">
              <AboutMe aboutMeRef={aboutMeRef} />
            </div>
            <div className="px-3 md:p-20 ">
              <Services serviceRef={servicesRef} />
            </div>
            <div className="px-3 md:p-20 ">
              <Project projectRef={projectRef} />
            </div>
            <div className="px-3 md:p-20">
              <LogoProject logoRef={logoRef} />
            </div>
            <div className="px-3 md:p-20">
              <ContactMe />
            </div>
            <Footer />
          </div>
        </div>
      </Drawers>
      <div className="absolute bottom-0 right-0 left-0 p-5 flex md:justify-start justify-center ">
        <p className="bg-slate-300 text-slate-700 shadow-lg animate-pulse inline font-bold py-2 px-5 rounded-md ">
          Under Development stage 95%
        </p>
      </div>
    </>
  );
}

export default App;
