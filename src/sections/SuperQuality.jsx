import React from "react";
import { Button } from "../components";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <div className="grid grid-cols-1 gap-5 lg:gap-0 lg:grid-cols-2 items-center justify-between">
      <div>
        <p className="heading">
          We Provide You
          <span className="text-tertiary"> Super Quality </span>
          Shoes
        </p>

        <p className="description">
          Ensuring premium comfort and style, our meticulously crafted footwear is
          designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className="description mt-5">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <Button className="mt-8" label="View Details" />
      </div>

      <div className="lg:ml-auto">
        <img src={shoe8} alt="shoes" className=" max-xl:max-h-[350px]"/>
      </div>
    </div>
  );
};

export default SuperQuality;
