import React from "react";
import { LOGOPROJECT } from "Var/logo";

function LogoProject() {
  return (
    <div className="realtive overflow-hidden">
      <p className=" text-3xl font-bold text-center md:mb-20 mb-10">
        My Logo Design
      </p>
      <div className="flex flex-wrap gap-10 justify-center items-center">
        {LOGOPROJECT.map((x: any, y: any) => (
          <img
            key={y}
            className=" w-[39%] md:w-[25%] aspect-square object-contain duration-150"
            src={x}
          />
        ))}
      </div>
    </div>
  );
}

export default LogoProject;
