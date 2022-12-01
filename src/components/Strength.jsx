import React from "react";

const Strength = ({ passwordStrength }) => {
  return (
    <div className="bg-[#191820] flex justify-between px-8 py-5 items-center mt-3 max-sm:flex-col max-sm:px-4">
      <h2 className="text-[#807c92] text-xl font-semibold">STRENGTH</h2>
      <div className="flex items-center gap-4">
        <h2 className="text-2xl uppercase font-bold text-[#e7e6eb]">
          {passwordStrength}
        </h2>
        <div className="flex gap-[6px]  ">
          <div
            className={`h-8 w-3 border-2 border-white ${passwordStrength}`}
          ></div>
          <div
            className={`h-8 w-3 border-2 border-white ${passwordStrength}`}
          ></div>
          <div
            className={`h-8 w-3 border-2 border-white ${passwordStrength}`}
          ></div>
          <div
            className={`h-8 w-3 border-2 border-white ${passwordStrength}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Strength;
