function AboutMe({
  aboutMeRef,
}: {
  aboutMeRef?: React.LegacyRef<HTMLDivElement> | undefined;
}) {
  return (
    <div ref={aboutMeRef} className=" w-full">
      <div className=" relative">
        {/* <div className="left-0 right-0 bottom-0 w-full h-full flex justify-center items-start absolute">
          <div className="w-[290px] h-[290px] rounded-full ANIMATION_BG blur-xl bg-slate-300 "></div>
        </div> */}
        <div className=" bg-transparent w-[360px] overflow-hidden h-[360px] relative flex justify-center items-center rounded-full mx-auto">
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
      <p className=" text-md text-center mx-auto mt-5  max-w-sm md:max-w-3xl">
        Hello my friends, introduce my name is Nurhamsah, usually called nur, I
        am a passionate and experienced software engineer with over 3 years of
        expertise in developing dynamic web and mobile applications. My core
        skills include React.js, Next.js, React Native, Node.js, and Nest.js,
        where I specialize in building efficient, scalable, and user-friendly
        solutions. In addition to my software engineering skills, I am also a
        creative logo designer with professional experience in designing logos
        for various clients, turning ideas into impactful visual identities. My
        design work has not only been a personal passion but also a source of
        income, with a proven track record in delivering high-quality logos. I
        also have experience in 3D modeling using Blender, further enhancing my
        creative skill set and allowing me to bring ideas to life in unique and
        innovative ways. I am always excited to take on new challenges,
        combining my technical and creative abilities to deliver exceptional
        results.
      </p>
    </div>
  );
}

export default AboutMe;
