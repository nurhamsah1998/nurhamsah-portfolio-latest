import React from "react";
import HeaderIcon from "assets/SVG/HeaderIcon";
import FlyGuy from "assets/SVG/FlyGuy";
function Header() {
  return (
    <div className=" h-[100vh] w-full grid items-center">
      <div className="flex justify-evenly items-center">
        <div>
          <p className=" text-3xl font-bold">Nurhamsah</p>
          <p className=" text-xl">I'am Frontend Developer and Designer</p>
          <p className=" text-xl">
            ReactJS | NextJS | ReactNative | NodeJS | Figma
          </p>
          <button className="btn mt-3">Get in Touch</button>
        </div>
        <div className="relative">
          <div className="HEADER_ANIMATION relative z-10 ">
            <HeaderIcon size={200} />
          </div>
          <div className="HEADER_ANIMATION_FLY_GUY absolute  -top-10 -left-10">
            <div className="w-20 h-20 bg-slate-300 rounded-full"></div>
          </div>
          <div className="HEADER_ANIMATION_FLY_GUY absolute  -top-5 right-5">
            <div className="w-5 h-5 bg-slate-600 rounded-full"></div>
          </div>
          <div className="HEADER_ANIMATION_FLY_GUY_1 absolute  -bottom-10 -left-10">
            <div className="w-20 h-20 bg-slate-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
