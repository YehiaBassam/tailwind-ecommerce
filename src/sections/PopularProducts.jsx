import React from "react";
import { products } from "../constants";
import { star } from "../assets/icons";

const PopularProducts = () => {
  return (
    <div>
      <p className="heading">
        Our
        <span className="text-tertiary"> Popular </span>
        Products
      </p>

      <p className="description">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 max-xl:gap-8 my-8">
        {products.map((p, i) => (
          <div key={i} className="flex flex-col gap-3">
            <img src={p.imgURL} className="mb-5" alt="shoes" />
            <div className="flex gap-x-2">
              <img src={star} alt="star" />
              <p className="text-xl text-secondary">(4.5)</p>
            </div>
            <p className="font-palanquin font-bold text-2xl">{p.name}</p>
            <p className="text-tertiary font-semibold">{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
