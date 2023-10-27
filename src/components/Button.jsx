import React, { Children, useEffect, useState } from "react";
import PropTypes from "prop-types";

const Button = ({ children, varient, buttonsize, text, isdisable = false, ...rest }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const varients = {
    base: "bg-neutral50 px-6 py-2  text-neutral1000 rounded-3xl text-center  font-bold shadow-btnShadow backdrop-blur-2xl gap-2.5 hover:bg-neutral200",
    outline:
      "px-6 py-2  rounded-3xl shadow border border-twitterBlue border-opacity-25 backdrop-blur-2xl justify-center gap-2.5 items-center gap-2.5 inline-flex text-twitterBlue",
    bluebtn:
      "bg-neutral50 px-6 py-2 text-neutral50 bg-twitterBlue rounded-3xl text-center  font-bold shadow-btnShadow backdrop-blur-2xl gap-2.5 hover:bg-neutral200 ",
  };

  const btnsize = {
    sm: "w-24 text-sm",
    md: "w-w24 text-md",
    lg: "w-96 text-lg",
  };

  const breakpointSizes = {
    sm: 640,
    md: 768,
    lg: 1024,
  };

  const handleResponsive = (windowWidth) => {
    let size = Object.keys(breakpointSizes).find(
      (key) => windowWidth <= breakpointSizes[key]
    );
    return size || "md";
  };

  const disableState = isdisable ? "disabled:opacity-50" : "";

  const Class = `${varients[varient]} ${
    buttonsize ? btnsize[buttonsize] : btnsize[handleResponsive(windowWidth)]
  } ${disableState}`;
  return (
    <>
      <button className={Class} {...rest}>
        {children}
      </button>
    </>
  );
};

Button.propTypes = {
  varient: PropTypes.string.isRequired,
  buttonsize: PropTypes.oneOf(["sm","md","lg"])
};

export default Button;
