import React from "react";
import { LOGOPROJECT } from "Var/logo";
import Marquee from "react-fast-marquee";

function LogoProject() {
  return (
    <div className="realtive overflow-hidden">
      <p className=" text-3xl font-bold text-center md:mb-20 mb-10">
        My Logo Design
      </p>
      <div className="hidden xl:block">
        <Marquee>
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
      </div>
      <div className="flex flex-wrap gap-5 xl:hidden justify-around items-center">
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
