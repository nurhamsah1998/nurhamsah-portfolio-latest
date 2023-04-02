import React from "react";
import HeaderIcon from "assets/SVG/HeaderIcon";

function Header() {
  return (
    <div className=" h-[100vh] w-full grid items-center">
      <div className="flex justify-evenly items-center">
        <div>
          <p className=" text-3xl font-bold">Nurhamsah</p>
          <p className=" text-xl">I'am Software Engineer and Designer</p>
          <p className=" text-xl">
            ReactJS | NextJS | ReactNative | NodeJS | Figma
          </p>
          <div className="mt-5 gap-5 flex">
            <button
              className="btn"
              onClick={() => {
                window.location.href = "https://wa.me/081213221343";
              }}
            >
              Get in Touch
            </button>
            <button
              className="btn btn-accent"
              onClick={() => {
                window.location.href = "/File/Nurhamsah _Resume.pdf";
              }}
            >
              Resume
            </button>
          </div>
        </div>
        <div className="relative ">
          <div className="HEADER_ANIMATION relative z-10 flex justify-center items-center ">
            <HeaderIcon size={400} />
            {/* <div
              className="h-[300px] w-[300px] CIRCLE_ANIMATION top-0 rounded-full absolute
          "
            >
              <div
                className="h-5 w-5 bg-green-200 rounded-full absolute
          "
              ></div>
            </div>
            <div
              className="h-[380px] w-[380px] CIRCLE_ANIMATION_1  rounded-full absolute
          "
            >
              <div
                className="h-10 w-10 bg-orange-200  rounded-full absolute
          "
              ></div>
            </div> */}
          </div>
          <div className="HEADER_ANIMATION_FLY_GUY absolute  -top-10 -left-10">
            <div className=" w-48 h-48 bg-purple-300 rounded-full"></div>
          </div>
          <div className="HEADER_ANIMATION_FLY_GUY_2 absolute  -top-5 right-5">
            <div className=" w-32 h-32 bg-pink-300 rounded-full"></div>
          </div>
          <div className="HEADER_ANIMATION_FLY_GUY_1 absolute  -bottom-10 -left-10">
            <div className="w-20 h-20 bg-indigo-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
