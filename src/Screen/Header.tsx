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
          <div className="HEADER_ANIMATION relative z-10 flex justify-center items-center ">
            <HeaderIcon size={200} />
            <div
              className="h-[200px] w-[200px] CIRCLE_ANIMATION top-0 rounded-full absolute
          "
            >
              <div
                className="h-5 w-5 bg-slate-700 rounded-full absolute
          "
              ></div>
            </div>
            <div
              className="h-[280px] w-[280px] CIRCLE_ANIMATION_1  rounded-full absolute
          "
            >
              <div
                className="h-10 w-10 bg-slate-500  rounded-full absolute
          "
              ></div>
            </div>
          </div>
          <div className="HEADER_ANIMATION_FLY_GUY absolute opacity-[0.3]  -top-10 -left-10">
            <div className="w-20 h-20 bg-slate-300 rounded-full"></div>
          </div>
          <div className="HEADER_ANIMATION_FLY_GUY absolute opacity-[0.3]  -top-5 right-5">
            <div className="w-5 h-5 bg-slate-600 rounded-full"></div>
          </div>
          <div className="HEADER_ANIMATION_FLY_GUY_1 absolute opacity-[0.3]  -bottom-10 -left-10">
            <div className="w-20 h-20 bg-slate-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
