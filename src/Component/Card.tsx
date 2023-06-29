import React from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";

function Card({
  hoverText,
  btnHover,
  coverContent,
  bgcolorHover = "bg-green-500",
  bgcolorCover = "bg-blue-700",
  tech,
  tag,
  name,
  order,
  link,
  tools,
}: {
  order?: boolean;
  hoverText?: string;
  tag?: string;
  btnHover: string;
  tech?: string;
  coverContent?: JSX.Element;
  bgcolorHover?: string;
  bgcolorCover?: string;
  name?: string;
  link?: string | any;
  tools?: any[];
}) {
  const navigation: NavigateFunction = useNavigate();
  return (
    <div className=" grid md:flex justify-between">
      <div
        className={`w-1/2 ${order ? "order-2" : "order-1"} hidden md:block `}
      >
        <p className=" text-3xl font-bold">{name}</p>
        <p className="mt-2 text-md ">{tag}</p>
        <div className="flex gap-3 mt-3 justify-start flex-wrap">
          {tools?.map((item, index) => (
            <p
              key={index}
              className=" bg-slate-600 py-1 px-3 rounded-full text-white text-sm"
            >
              {item}
            </p>
          ))}
        </div>
        <button
          onClick={() => (window.location.href = link)}
          disabled={!Boolean(link)}
          className="btn mt-5"
        >
          {Boolean(link) ? "Learn More" : "On going"}
        </button>
      </div>
      <div
        className={`max-w-[420px] shadow-lg h-full md:h-80 relative rounded-2xl overflow-hidden ${
          !order ? "order-2" : "order-1"
        }`}
      >
        <div
          className={`absolute w-full  scale-[3] hover:scale-[1] top-0 duration-200 opacity-0 hover:opacity-100 h-full ${bgcolorHover} text-white justify-center items-center flex`}
        >
          <div className=" w-[200px] h-[200px] HEADER_ANIMATION absolute bg-slate-100 opacity-[0.2] top-[-20%] left-[-20%] rounded-full"></div>
          <div className=" w-[200px] h-[200px] HEADER_ANIMATION absolute bg-slate-100 opacity-[0.2] bottom-[-30%] right-[-10%] rounded-full"></div>
          <div className=" w-[50px] h-[50px] HEADER_ANIMATION absolute bg-slate-100 opacity-[0.2] top-[5%] right-[10%] rounded-full"></div>
          <div className=" w-[130px] h-[130px] HEADER_ANIMATION absolute bg-slate-100 opacity-[0.2] bottom-[5%] left-[5%] rounded-full"></div>
          <div className="text-center p-3 z-10 ">
            <p className=" text-xl font-thin">{hoverText}</p>
            {/* <div className="mt-2 font-bold">
              <p className=" text-md">{tech}</p>
            </div> */}
            <button
              disabled={!Boolean(link)}
              onClick={() => (window.location.href = link)}
              className="btn visible md:hidden mt-3"
            >
              {btnHover}
            </button>
          </div>
        </div>
        <div
          className={`w-full ${bgcolorCover} text-white  justify-center items-center flex`}
        >
          {coverContent}
        </div>
      </div>
    </div>
  );
}

export default Card;
