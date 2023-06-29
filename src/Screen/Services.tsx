import React from "react";
import Designer from "assets/SVG/Designer";
import MobileApplication from "assets/SVG/MobileApplication";
import WebApplication from "assets/SVG/WebApplication";

function Services({ serviceRef }: { serviceRef?: any }) {
  const servicesOffer = [
    {
      name: "Web Application",
      desc: "Create web apps with easy-to-use UX UI or customize as you like.",
      icon: <WebApplication size={220} />,
    },
    {
      name: "Mobile Application",
      desc: "Create android smartphone and tablet applications with various features.",
      icon: <MobileApplication size={220} />,
    },
    {
      name: "Logo Designer",
      desc: "Branding your product by creating the best and most meaningful logo here",
      icon: <Designer size={220} />,
    },
  ];
  return (
    <div className="w-full">
      <div ref={serviceRef} className="p-3 max-w-[1400px]  mx-auto">
        <p className="text-3xl text-center font-semibold md:mb-20 mb-10 ">
          My Services
        </p>
        <div className="flex flex-wrap items-center w-full xs:justify-between lg:justify-between justify-center  ">
          {servicesOffer.map((item: any, index: any) => (
            <div key={index} className=" max-w-xs ">
              <div className="flex justify-center bg-white shadow-lg rounded-2xl">
                {item.icon}
              </div>
              <p className="text-center mt-5 text-2xl">{item.name}</p>
              <p className="text-center text-sm mt-5 ">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
