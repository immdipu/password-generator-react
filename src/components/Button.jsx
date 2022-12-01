import React from "react";
import { MdTrendingFlat } from "react-icons/md";

const Button = ({ Handlebutton }) => {
  return (
    <>
      <button
        className="flex bg-[#a3ffae] w-full justify-center gap-1 items-center text-xl font-medium text-gray-800 h-16 border-2 border-[#a3ffae] hover:bg-[#23222a] hover:text-[#a3ffae] hover:transition-all hover:duration-200 hover:ease-linear duration-200 ease-linear mt-8"
        onClick={Handlebutton}
      >
        GENERATE <MdTrendingFlat />
      </button>
    </>
  );
};

export default Button;
