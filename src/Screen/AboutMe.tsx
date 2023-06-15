import React from "react";

function AboutMe({ aboutMeRef }: { aboutMeRef?: any }) {
  return (
    <div ref={aboutMeRef} className=" w-full">
      <div className=" relative">
        {/* <div className=" left-[60%] ABOUTME_ANIM top-0 absolute w-[100px] h-[100px] bg-slate-500 rounded-full" />
        <div className=" left-[20%] md:left-[30%] ABOUTME_ANIM_2 top-10 absolute w-[50px] h-[50px] bg-slate-300 rounded-full" />
        <div className=" md:left-[33%] left-[20%] ABOUTME_ANIM_1 top-[80%] absolute w-[30px] h-[30px] bg-slate-400 rounded-full" /> */}
        <div
          className="mx-auto w-[300px] h-[300px] rounded-full"
          style={{
            backgroundImage: "url(/profile_low_size_transparent.png)",
            backgroundPosition: "42% 45%",
          }}
        />
      </div>
      <p className=" text-3xl font-bold text-center md:mb-5 mb-5 mt-3">
        AboutMe
      </p>
      <p className=" text-xl text-center mx-auto mt-5">
        Hello, my name is Nurhamsah, nice to meet you. Very happy with writing
        code and designing a brand logo and I am interested in new knowledge
        about programming or designers in today's all-digital era. I hope that
        when you see my profile, you are interested in working with me.
      </p>
    </div>
  );
}

export default AboutMe;
