import React from "react";
import { services } from "../constants";

const Services = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((s, i) => (
        <div key={i} className="flex flex-col justify-center h-[320px] gap-5 drop-shadow-sm shadow-xl rounded-3xl p-10">
        <div className="w-[44px] h-[44px] rounded-full bg-tertiary flex-center">
          <img src={s.imgURL} alt="icon" />
        </div>
          <p className="text-2xl font-bold font-palanquin">{s.label}</p>
          <p className="text-lg text-secondary">{s.subtext}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
