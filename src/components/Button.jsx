import React from "react";

const Button = ({ label, icon, className }) => {
  return (
    <button
      className={`flex justify-center items-center gap-3 lg:text-xl bg-red-400 text-white rounded-full px-4 lg:px-8 py-3 cursor-pointer
      hover:bg-red-500 transition-all duration-200
      ${className}`}
    >
      {label}
      {icon && <img src={icon} alt="icon" />}
    </button>
  );
};

export default Button;
