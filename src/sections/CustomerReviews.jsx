import React from "react";
import { reviews } from "../constants";
import { star } from "../assets/icons";

const CustomerReviews = () => {
  return (
    <div className="bg-violet-100 max-xl:py-12">
      <div className="min-h-screen flex flex-col justify-center items-center max-w-[80%] mx-auto">
        <div className="mb-20">
          <p className="heading text-center">
            What Our
            <span className="text-tertiary"> Customers </span>
            Say?
          </p>

          <p className="max-w-lg text-center mt-5 text-sm">
            Hear genuine stories from our satisfied customers about their
            exceptional experiences with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-[200px] ">
          {reviews.map((r, i) => (
            <div key={i} className="flex flex-col justify-center items-center gap-5">
              <img src={r.imgURL} alt="Customer Review" className="w-[120px] h-[120px] rounded-full"/>
              <p className="text-center text-secondary max-w-sm">{r.feedback}</p>
              <div className="flex gap-x-2">
                <img src={star} alt="star" />
                <p className="text-xl text-secondary">(4.5)</p>
              </div>
              <p className="font-bold text-2xl text-center">{r.customerName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
