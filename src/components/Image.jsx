import React from "react";

const Image = (props) => {
  const styleClass = `${props.size}`;

  return (
    <>
      <img src={props.src} alt={props.alt} className={styleClass} />
    </>
  );
};

export default Image;
