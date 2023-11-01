import React from "react";

function ReactIcons({ src, alt, value, onClick }) {
  return (
    <>
      <div className="flex">
        <img src={src} alt={alt} onClick={onClick} />
        <p className="px-1 text-neutral500">{value}</p>
      </div>
    </>
  );
}

export default ReactIcons;
