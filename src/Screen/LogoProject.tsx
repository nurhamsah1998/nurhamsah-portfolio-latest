import { LOGOPROJECT } from "Const";

function LogoProject({
  logoRef,
}: {
  logoRef: React.LegacyRef<HTMLDivElement> | undefined;
}) {
  return (
    <div className="p-0 max-w-[1400px] mx-auto" ref={logoRef}>
      <p className=" text-3xl font-bold text-center">Logo Designer</p>
      <p className=" md:mb-20 mb-10 mt-3 mx-auto text-center max-w-sm md:max-w-3xl">
        This is the best logo I made. by using Inkscape and GIMP I can create a
        logo with an interesting philosophy and a good meaning
      </p>
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {LOGOPROJECT.map((x: string, y: any) => (
          <div key={y} className="">
            <img
              key={y}
              className="w-[130px]  grayscale hover:grayscale-0"
              src={x}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-5 md:gap-20 justify-center items-center"></div>
    </div>
  );
}

export default LogoProject;
