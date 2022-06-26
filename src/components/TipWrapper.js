import React from "react";
import SeeMore from "./SeeMore";
import TipNumber from "./TipNumber";

export const TipWrapper = ({ link, tipNumber, children }) => {
  const style = {
    border: "1px solid #233048",
    borderRadius: "7px",
    padding: "1.3rem 1.3rem 0px 1.3rem",
    marginBottom: "1.8rem",
    position: "relative",
  };

  return (
    <div className="tip" style={style}>
      {link && <SeeMore link={link} />}
      <TipNumber tipNumber={tipNumber} />
      {children}
    </div>
  );
};
