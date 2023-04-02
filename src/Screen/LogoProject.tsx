import React from "react";
import { LOGOPROJECT } from "Var/logo";

function LogoProject() {
  return (
    <div>
      <p className=" text-3xl font-bold text-center mb-20">My Logo Design</p>
      <div className="flex flex-wrap gap-10 justify-center items-center">
        {LOGOPROJECT.map((x: any, y: any) => (
          <img
            key={y}
            className=" w-[20%] aspect-square object-contain duration-150"
            src={x}
          />
        ))}
      </div>
    </div>
  );
}

export default LogoProject;
