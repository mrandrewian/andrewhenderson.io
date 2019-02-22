import React from "react";

const Svg = props => {
  return (
    <svg width={props.width} height={props.height} className={props.className}>
      {props.children}
    </svg>
  );
};

export default Svg;
