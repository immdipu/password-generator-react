import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Checkboxes = ({ CheckboxLable, Handlecheck, checkBoxValue }) => {
  return (
    <div className="flex items-center">
      <FormControlLabel
        control={<Checkbox onChange={Handlecheck} checked={checkBoxValue} />}
        sx={{
          "& .MuiSvgIcon-root": { fontSize: 35, color: "#a3ffae" },
        }}
      />
      <label
        htmlFor="Include Uppercase Letters"
        className="text-[#e7e6eb] text-xl max-sm:text-sm"
      >
        {CheckboxLable}
      </label>
    </div>
  );
};

export default Checkboxes;
