import React from "react";
import arrowRight from "../assets/icons/arrow-right.svg";
import { shoes, statistics } from "../constants/index.js";
import { bigShoe1 } from "../assets/images/index.js";
import { Button, ShoesSwiper } from "../components";

const Hero = () => {
  return (
    <section className="relative flex max-xl:flex-col w-full min-h-screen">
      <div className="flex justify-center max-xl:justify-start max-xl:my-10 items-center px-[60px] z-10">
        <div>
          <p className="text-tertiary text-xl mt-20">Our Summer Collection</p>
          <h1 className="mt-5 text-2xl leading-10 sm:text-[85px] sm:leading-[82px] font-bold ">
            <span className="absolute bg-white pr-5">The New Arrival</span>
            <br />
            <span className="text-tertiary">Nike</span>
            &nbsp;
            <span>Shoes</span>
          </h1>

          <p className="my-5 text-secondary text-xl">
            <span>Discover stylish Nike arrivals, quality</span>
            <br />
            <span>comfort, and innovation for your active life.</span>
          </p>

          <Button className="mt-8" label="Shop Now" icon={arrowRight} />

          <div className="flex flex-wrap gap-12 mt-12">
            {statistics.map((s, i) => (
              <div className="flex flex-col" key={i}>
                <p className="font-bold text-2xl sm:text-5xl font-palanquin mb-2">
                  {s.value}
                </p>
                <p className="text-secondary">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen bg-primary bg-hero bg-cover bg-center">
        <ShoesSwiper shoes={shoes} />
      </div>
    </section>
  );
};

export default Hero;
