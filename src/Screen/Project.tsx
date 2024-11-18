import Card from "Component/Card";
import React from "react";
import { webApplication, WEB_APP } from "Const";

function Project({
  projectRef,
}: {
  projectRef?: React.LegacyRef<HTMLDivElement> | undefined;
}) {
  return (
    <div ref={projectRef} className="md:my-0  my-5 max-w-[1400px] mx-auto">
      <p className=" text-3xl text-center font-bold ">
        Web & Mobile Applications
      </p>
      <p className=" md:mb-20 mb-10 mt-3 mx-auto text-center  max-w-sm md:max-w-3xl">
        Here are some of the best examples of my apps. website apps and mobile
        apps.
      </p>
      <div className="grid gap-10 md:gap-20 justify-center">
        {webApplication.map((item: WEB_APP, index: number) => {
          return (
            <div key={index} className=" border-b-2 border-slate-200 pb-10">
              <div className=" flex justify-center">
                <Card
                  coverContent={
                    item.img ? (
                      <img src={item.img} />
                    ) : (
                      <div className=" h-80 w-screen flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center">
                          <span>No Image Yet</span>
                          <span className=" text-sm">under development</span>
                        </div>
                      </div>
                    )
                  }
                  order={Boolean(index % 2)}
                  tag={item.tag}
                  name={item.name}
                  bgcolorHover={item.color}
                  link={item.link}
                  bgcolorCover="bg-slate-500"
                  tools={item.tools}
                />
              </div>

              <div className="block md:hidden text-center mt-3">
                <p className=" text-3xl font-bold">{item.name}</p>
                <div className="flex md:hidden gap-1 justify-center flex-wrap max-w-sm md:max-w-3xl mx-auto">
                  {item.tools?.map((list: any, indexList: number) => (
                    <p
                      key={indexList}
                      className=" bg-slate-600 py-1 px-3 rounded-full text-white text-xs font-bold"
                    >
                      {list}
                    </p>
                  ))}
                </div>
                <p className="mt-5 text-md  max-w-sm mx-auto">{item.tag}</p>
                <button
                  onClick={() => (window.location.href = item.link)}
                  disabled={!Boolean(item.link)}
                  className="btn mt-5 w-full"
                >
                  {Boolean(item.link) ? "Learn More" : "On going"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
