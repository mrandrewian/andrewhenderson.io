import React from "react";

const Polyline = props => {
  return (
    <polyline
      className={props.className}
      points={props.points}
      style={props.style}
    />
  );
};

export default Polyline;
