import React, { useState } from "react";

const ShoesSwiper = ({ shoes = [] }) => {
  const [selectedShoe, setSelectedShoe] = useState(shoes[0] || null);

  if (!shoes.length) {
    return <div>No shoes available</div>;
  }

  return (
    <div className="relative mt-12 flex-1 flex flex-col justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
      {/* Main shoe image */}
      {selectedShoe && (
        <div className="mb-8">
          <img
            src={selectedShoe.bigShoe}
            alt="shoe collection"
            className="object-contain max-h-[450px] transition-all duration-300"
          />
        </div>
      )}

      <div className="flex gap-4 justify-center items-center relative -bottom-20">
        {shoes.map((shoe, index) => (
          <div
            key={index}
            onClick={() => setSelectedShoe(shoe)}
            className={`border-2 cursor-pointer max-sm:flex-1 bg-hero-card rounded-xl transition-all duration-200 hover:scale-110
            ${selectedShoe === shoe ? "border-red-500" : "border-transparent"}`}
          >
            <img
              src={shoe.thumbnail}
              alt={`shoe thumbnail ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoesSwiper;
