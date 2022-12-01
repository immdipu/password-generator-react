import React from "react";
import Slider from "@mui/material/Slider";

const RangeSlider = ({ handleChange, value }) => {
  return (
    <div>
      <Slider
        aria-label="Default"
        value={value}
        onChange={handleChange}
        min={0}
        max={20}
        sx={{
          height: "9px",
          color: "#a3ffae",
          ".css-14pt78w-MuiSlider-rail": {
            backgroundColor: "#000000",
          },
          "& .MuiSlider-thumb": {
            backgroundColor: "hsl(252, 11%, 91%)",
            height: "25px",
            width: "25px",
            borderWidth: "2px",
            borderColor: "#a3ffae",
          },
          ".MuiSlider-thumb:hover": {
            backgroundColor: "#191820",
          },
        }}
      />
    </div>
  );
};

export default RangeSlider;
