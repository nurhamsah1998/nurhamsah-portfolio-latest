import { ContactMe } from "./Footer";
import HeaderIcon from "assets/SVG/HeaderIcon";

function Header() {
  return (
    <div className=" h-[100vh] w-full grid items-center md:px-0 px-3">
      <div className="flex relative justify-evenly items-center">
        <div className=" text-center md:text-left z-[20]">
          <p className="  font-bold">Hello my name is,</p>
          <p className=" text-3xl font-bold">Nurhamsah</p>
          <p className=" text-xl">I'am Software Engineer and Designer</p>
          <div className="loaders flex justify-center md:justify-start">
            <div className="words">
              <span className="word text-3xl"></span>
              <span className="word text-3xl">React JS</span>
              <span className="word text-3xl">Next JS</span>
              <span className="word text-3xl">React Native</span>
              <span className="word text-3xl">Designer</span>
            </div>
          </div>
          <div className="mt-5 gap-5 flex justify-center md:justify-start">
            <button
              className="btn"
              onClick={() => {
                window.location.href = "https://wa.me/081213221343";
              }}
            >
              Get in Touch
            </button>
            <button
              className="btn btn-outline"
              onClick={() => {
                window.location.href = "/resume-nurhamsah.pdf";
              }}
            >
              Resume
            </button>
          </div>
          <div className="flex justify-center md:justify-start mt-5 gap-4 mb-5 md:mb-0">
            {ContactMe.map((x: any, y: number) => (
              <button
                onClick={() => {
                  window.location.href = x.url;
                }}
                key={y}
              >
                {x.icon}
              </button>
            ))}
          </div>
        </div>
        <div className="md:relative absolute md:blur-none blur-md">
          <div className="HEADER_ANIMATION relative z-10 flex justify-center items-center ">
            <div className="w-[200px] block md:hidden h-[200px] rounded-full bg-slate-200" />
            <div className="hidden md:block">
              <HeaderIcon size={400} />
            </div>
          </div>
          <div className="HEADER_ANIMATION_FLY_GUY absolute  -top-10 -left-10">
            <div className=" w-48 h-48 bg-slate-300 rounded-full"></div>
          </div>
          <div className="HEADER_ANIMATION_FLY_GUY_2 absolute  -top-5 right-5">
            <div className=" w-32 h-32 bg-slate-400 rounded-full"></div>
          </div>
          <div className="HEADER_ANIMATION_FLY_GUY_1 absolute  -bottom-10 -left-10">
            <div className="w-20 h-20 bg-slate-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
