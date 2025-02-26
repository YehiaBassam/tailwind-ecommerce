import React from "react";
import { Button } from "../components";

const Subscribe = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-8">
      <div>
        <p className="heading">
          Sign Up for
          <span className="text-tertiary"> Updates </span>
          <br />& Newsletter
        </p>
      </div>
      <div>
        <div className="border-1 border-neutral-500 rounded-full p-3 flex sm:justify-between max-sm:flex-col max-sm:items-center">
          <input
            type="text"
            placeholder="subscribe@nike.com"
            className="focus:outline-none"
          />
          <div>

          <Button label="Sign Up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
