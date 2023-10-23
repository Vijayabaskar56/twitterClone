import React from "react";

const Button = (props) => {
  const varient = {
    base: "bg-neutral50 px-6 py-2  text-neutral1000 rounded-3xl text-center  font-bold shadow-btnShadow backdrop-blur-2xl gap-2.5 hover:bg-neutral200",
    outline: "px-6 py-2  rounded-3xl shadow border border-twitterBlue border-opacity-25 backdrop-blur-2xl justify-center gap-2.5 items-center gap-2.5 inline-flex text-twitterBlue",
    bluebtn: "bg-neutral50 px-6 py-2 text-neutral50 bg-twitterBlue rounded-3xl text-center  font-bold shadow-btnShadow backdrop-blur-2xl gap-2.5 hover:bg-neutral200 "
  };


  const btnsize = {
    sm: "w-24 text-sm",
    md: "w-w24 text-md",
    lg: "w-96 text-lg",
  }


  const disableState = props.disable ? "disabled:opacity-50" : "";

  const Class = `${varient[props.varient]} ${btnsize[props.btnsize]} ${disableState}`;
  return (
    <>
      <button className={Class}>{props.text}</button>
    </>
  );
};

export default Button;
