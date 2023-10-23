import React from "react";

const Button = (props) => {
  const varient = {
    base: "bg-neutral50 text-neutral1000 w-w24 rounded-3xl text-center shadow-btnShadow backdrop-blur-2xl gap-2.5 px-6 py-2 hover:bg-neutral200",
    outline: "",
  };
  const size = {
    sm: "text-sm",
    md: "text-sm",
    lg: "text-sm",
  };

  const disableState = props.disable ? "disabled:opacity-50" : "";

  const Class = `${varient[props.varient]} ${size[props.size]} ${disableState}`;
  return (
    <>
      <button className={Class}>{props.text}</button>
    </>
  );
};

export default Button;
