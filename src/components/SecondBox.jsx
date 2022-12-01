import React, { useState, useEffect } from "react";
import InputRange from "./InputRange";
import Checkboxes from "./Checkboxes";
import Strength from "./Strength";
import Button from "./Button";
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from "./PasswordLetters";

const SecondBox = ({ password, setPassword }) => {
  const [value, setValue] = useState(0);
  const [Uppercaseletter, setUppercaseletter] = useState(true);
  const [lowerletter, setLowerletter] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [passwordStrength, setpasswordStrength] = useState("too-weak");

  useEffect(() => {
    if (value < 5) {
      setpasswordStrength("very-weak");
    }

    if (value >= 5) {
      if (Uppercaseletter && lowerletter && number && symbols) {
        setpasswordStrength("weak");
      } else if (
        (Uppercaseletter && lowerletter) ||
        (Uppercaseletter && number) ||
        (Uppercaseletter && symbols) ||
        (lowerletter && number) ||
        (lowerletter && symbols) ||
        (lowerletter && number) ||
        (number && symbols)
      ) {
        setpasswordStrength("weak");
      } else {
        setpasswordStrength("very-weak");
      }
    }

    if (value >= 10) {
      if (Uppercaseletter && lowerletter && number && symbols) {
        setpasswordStrength("medium");
      } else if (
        (Uppercaseletter && lowerletter && number) ||
        (Uppercaseletter && lowerletter && symbols) ||
        (Uppercaseletter && number && symbols) ||
        (lowerletter && number && symbols)
      ) {
        setpasswordStrength("medium");
      } else if (
        (Uppercaseletter && lowerletter) ||
        (Uppercaseletter && number) ||
        (Uppercaseletter && symbols) ||
        (lowerletter && number) ||
        (lowerletter && symbols) ||
        (lowerletter && number) ||
        (number && symbols)
      ) {
        setpasswordStrength("weak");
      } else {
        setpasswordStrength("very-weak");
      }
    }
    if (value >= 15) {
      if (Uppercaseletter && lowerletter && number && symbols) {
        setpasswordStrength("strong");
      } else if (
        (Uppercaseletter && lowerletter && number) ||
        (Uppercaseletter && lowerletter && symbols) ||
        (Uppercaseletter && number && symbols) ||
        (lowerletter && number && symbols)
      ) {
        setpasswordStrength("medium");
      } else if (
        (Uppercaseletter && lowerletter) ||
        (Uppercaseletter && number) ||
        (Uppercaseletter && symbols) ||
        (lowerletter && number) ||
        (lowerletter && symbols) ||
        (lowerletter && number) ||
        (number && symbols)
      ) {
        setpasswordStrength("weak");
      } else {
        setpasswordStrength("very-weak");
      }
    }
  }, [value, Uppercaseletter, lowerletter, number, symbols]);

  const Handlebtn = () => {
    if (value > 0) {
      let characters = "";
      if (Uppercaseletter) {
        characters += upperCaseLetters;
      }
      if (lowerletter) {
        characters += lowerCaseLetters;
      }
      if (number) {
        characters += numbers;
      }
      if (symbols) {
        characters += specialCharacters;
      }

      setPassword(createPassword(characters));
    }
  };

  const createPassword = (charact) => {
    let pwd = " ";
    let characterslistLength = charact.length;
    for (let i = 0; i < value; i++) {
      let charIndex = Math.round(Math.random() * characterslistLength);
      pwd = pwd + charact.charAt(charIndex);
    }
    return pwd;
  };

  return (
    <div className="bg-[#23222a] px-8 py-5 mt-5">
      <InputRange
        value={value}
        handleChange={(e) => setValue(e.target.value)}
      />
      <Checkboxes
        CheckboxLable={"Include Uppercase Letters"}
        checkBoxValue={Uppercaseletter}
        Handlecheck={(e) => setUppercaseletter(e.target.checked)}
      />
      <Checkboxes
        CheckboxLable={"Include Lowercase Letters"}
        checkBoxValue={lowerletter}
        Handlecheck={(e) => setLowerletter(e.target.checked)}
      />
      <Checkboxes
        CheckboxLable={"Include Numbers"}
        checkBoxValue={number}
        Handlecheck={(e) => setNumber(e.target.checked)}
      />
      <Checkboxes
        CheckboxLable={"Include Symbols"}
        checkBoxValue={symbols}
        Handlecheck={(e) => setSymbols(e.target.checked)}
      />
      <Strength passwordStrength={passwordStrength} />
      <Button Handlebutton={Handlebtn} />
    </div>
  );
};

export default SecondBox;
