import React from "react";
import Designer from "assets/SVG/Designer";
import MobileApplication from "assets/SVG/MobileApplication";
import WebApplication from "assets/SVG/WebApplication";

function Services() {
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
      name: "Logo Maker",
      desc: "Branding your product by creating the best and most meaningful logo here",
      icon: <Designer size={220} />,
    },
  ];
  return (
    <div className="p-3">
      <p className="text-3xl text-center font-semibold md:mb-20 mb-10 ">
        {" "}
        My Services
      </p>
      <div className="grid md:flex justify-between items-center gap-20">
        {servicesOffer.map((item: any, index: any) => (
          <div key={index} className="">
            <div className="flex justify-center">{item.icon}</div>
            <p className="text-center mt-5 text-2xl">{item.name}</p>
            <p className="text-center text-sm mt-5">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
