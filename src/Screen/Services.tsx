import React from "react";
import Designer from "assets/SVG/Designer";
import MobileApplication from "assets/SVG/MobileApplication";
import WebApplication from "assets/SVG/WebApplication";

function Services() {
  const servicesOffer = [
    {
      name: "Web Application",
      desc: "",
      icon: <WebApplication size={220} />,
    },
    {
      name: "Mobile Application",
      desc: "",
      icon: <MobileApplication size={220} />,
    },
    {
      name: "Logo Maker",
      desc: "",
      icon: <Designer size={220} />,
    },
  ];
  return (
    <div className="p-3">
      <p className="text-3xl text-center font-semibold md:mb-20 mb-10 ">
        {" "}
        My Services
      </p>
      <div className="flex justify-between items-center gap-20">
        {servicesOffer.map((item: any, index: any) => (
          <div key={index} className="">
            <div className="flex justify-center">{item.icon}</div>
            <p className="text-center mt-5 text-2xl">{item.name}</p>
            <p className="text-center">
              asdkj ajksdakjdbsajd sjadkjksafbasnod jasljkdb asjkpaisfbspaj
              fjjbsdfjnsdfjjb as df asdjkfhsdakjfkjsd kjdfn kjasdfnsd fjksdkfj
              bs adf
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
