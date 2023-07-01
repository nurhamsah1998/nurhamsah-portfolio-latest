import React from "react";
import { servicesOffer, SERVICE_OFFER } from "Const";

function Services({
  serviceRef,
}: {
  serviceRef?: React.LegacyRef<HTMLDivElement> | undefined;
}) {
  return (
    <div className="w-full">
      <div ref={serviceRef} className="p-3 max-w-[1400px]  mx-auto">
        <p className="text-3xl text-center font-semibold md:mb-20 mb-10 ">
          My Services
        </p>
        <div className="flex flex-wrap items-center w-full gap-10 xs:justify-between lg:justify-between justify-center  ">
          {servicesOffer.map((item: SERVICE_OFFER, index: number) => (
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
