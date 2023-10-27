import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import InputField from "../components/InputField";
const LoginFlowFour = () => {
  const [status, setStatus] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setStatus("submitting");
      console.log(inputValue);
      setInputValue("");
    }, 5000);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputField
          name="password"
          label="Password"
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <Button
          varient="base"
          text="Submit"
          buttonsize="md"
          isdisable={status === "submitting"}
        >Submit</Button>
      </form>
    </>
  );
};

export default LoginFlowFour;
