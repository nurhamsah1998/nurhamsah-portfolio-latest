import React from "react";

function AboutMe({ aboutMeRef }: { aboutMeRef?: any }) {
  const [time, setTime] = React.useState<any>(1);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev: any) => prev + 1);
    }, 1000);
    clearInterval(time);
  }, []);
  return (
    <div ref={aboutMeRef} className=" w-full">
      <div className=" relative">
        <div className=" bg-transparent w-[360px] overflow-hidden h-[360px] relative flex justify-center items-center rounded-full mx-auto">
          {/* <div className=" h-[20px] left-[50%] w-[180px] ANIMATION_ROUND z-[100] rounded-full absolute ">
            <div className="w-[20px] h-[20px] bg-slate-400 float-right rounded-full" />
          </div>
          <div className=" h-[20px] left-[50%] w-[180px] ANIMATION_ROUND1 z-[100] rounded-full absolute ">
            <div className="w-[20px] h-[20px] bg-slate-400 float-right rounded-full" />
          </div>
          <div className=" h-[20px] left-[50%] w-[180px] ANIMATION_ROUND2 z-[100] rounded-full absolute ">
            <div className="w-[20px] h-[20px] bg-slate-400 float-right rounded-full " />
          </div>
          <div className=" h-[20px] left-[50%] w-[180px] ANIMATION_ROUND3 z-[100] rounded-full absolute ">
            <div className="w-[20px] h-[20px] bg-slate-400 float-right rounded-full" />
          </div>
          <div className=" h-[20px] left-[50%] w-[180px] ANIMATION_ROUND4 z-[100] rounded-full absolute ">
            <div className="w-[20px] h-[20px] bg-slate-400 float-right rounded-full" />
          </div> */}
          <div className=" w-[330px] z-[9] h-[330px] bg-white flex justify-center items-center rounded-full">
            <div className="bg-slate-300 z-[9]  w-[310px] h-[310px]  rounded-full flex justify-center items-center">
              <div
                className=" w-[290px] h-[290px] rounded-full"
                style={{
                  backgroundImage: "url(/profile_low_size_transparent.png)",
                  backgroundPosition: "42% 45%",
                  backgroundColor: "none",
                  zIndex: 9,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <p className=" text-3xl font-bold text-center md:mb-5 mb-5 mt-5">
        AboutMe
      </p>
      <p className=" text-md text-center mx-auto mt-5 max-w-3xl">
        Hello my friends, introduce my name is Nurhamsah, usually called nur.
        For some reason, I'm very happy with this increasingly fast
        technological development, especially in the field of Software
        Engineering and Graphic Design. therefore I try to create something that
        can help people to solve problems, especially in the IT technical field.
        I hope we can work together to make this happen. sorry for too many
        words, please enjoy my sample project
      </p>
    </div>
  );
}

export default AboutMe;
