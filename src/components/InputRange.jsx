import React, { useState } from "react";
import RangeSlider from "./RangeSlider";

const InputRange = ({ value, handleChange }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h3 className="text-[#e7e6eb] font-medium text-lg">Character Length</h3>
        <h3 className="text-[#a3ffae] text-4xl">{value}</h3>
      </div>
      <RangeSlider handleChange={handleChange} value={value} />
    </>
  );
};

export default InputRange;
