import React, { useState } from "react";
import InputForm from "./components/InputForm";
import SecondBox from "./components/SecondBox";


function App() {
  const [password, setPassword] = useState("P4$5WOrD!");

  return (
    <>
      <main className=" w-full max-w-xl m-auto flex flex-col gap-2" >
        <h1 className="text-[#807c92] text-center font-semibold text-2xl my-4">Password Generator</h1>
        <InputForm password={password} />
        <SecondBox setPassword={setPassword} password={password} />
      </main>
    </>
  );
}

export default App;
