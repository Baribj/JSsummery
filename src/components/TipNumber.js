import React from "react";

const TipNumber = ({ tipNumber }) => {
  const style = {
    position: "absolute",
    right: "8px",
    top: "5px",
    fontSize: "11px",
  };
  return <span style={style}>{tipNumber + 1}</span>;
};

export default TipNumber;
