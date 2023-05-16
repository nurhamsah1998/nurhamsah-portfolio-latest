import React from "react";
import { LOGOPROJECT } from "Var/logo";
import Marquee from "react-fast-marquee";

function LogoProject() {
  const widthContainer = window.innerWidth || 300;
  return (
    <div className="p-0">
      <p className=" text-3xl font-bold text-center md:mb-20 mb-10">
        My Logo Design
      </p>
      {/* <div className={`hidden xl:block w-1/3`}>
        <Marquee className={`bg-red-500 `}>
          {LOGOPROJECT.map((x: any, y: any) => (
            <div className="">
              <img
                key={y}
                className="w-[230px] p-5 grayscale hover:grayscale-0"
                src={x}
              />
            </div>
          ))}
        </Marquee>
      </div> */}
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {LOGOPROJECT.map((x: any, y: any) => (
          <div className="">
            <img
              key={y}
              className="w-[130px]  grayscale hover:grayscale-0"
              src={x}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-5 md:gap-20 justify-center items-center"></div>
    </div>
  );
}

export default LogoProject;
