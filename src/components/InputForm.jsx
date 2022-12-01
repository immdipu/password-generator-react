import React, { useState } from "react";
import { RxClipboard } from "react-icons/rx";
import { CopyToClipboard } from "react-copy-to-clipboard";

const InputForm = ({ password }) => {
  const [copied, setCopied] = useState(false);

  const HandleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className=" flex items-center w-full bg-[#23222a] px-6 py-4 ">
      <h1 className="w-full text-[#54535a] font-bold text-3xl">{password}</h1>
      {copied && <p className="mr-2 text-[#a3ffae] font-thin w-fit">COPIED</p>}
      <CopyToClipboard text={password}>
        <RxClipboard
          className="text-5xl text-[#a3ffae] w-fit cursor-pointer hover:text-white"
          onClick={HandleCopy}
        />
      </CopyToClipboard>
    </div>
  );
};

export default InputForm;
