import React from "react";
import { LOGOPROJECT } from "Var/logo";
import Marquee from "react-fast-marquee";

function LogoProject() {
  return (
    <div className="realtive overflow-hidden">
      <p className=" text-3xl font-bold text-center md:mb-20 mb-10">
        My Logo Design
      </p>
      <div>
        <Marquee className="bg-red-800">
          {LOGOPROJECT.map((x: any, y: any) => (
            <div className="bg-green-400">
              <img key={y} className="w-[230px]" src={x} />
            </div>
          ))}
        </Marquee>
      </div>
      <div className="flex flex-wrap gap-5 md:gap-20 justify-center items-center"></div>
    </div>
  );
}

export default LogoProject;
