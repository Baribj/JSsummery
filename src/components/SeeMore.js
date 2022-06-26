import React from "react";

const SeeMore = ({ link }) => {
  const style = {
    position: "absolute",
    right: "20px",
    bottom: "-9px",
    backgroundColor: "var(--bg)",
    padding: "0px 5px 0px 5px",
  };
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="small"
      style={style}
    >
      [see more]
    </a>
  );
};

export default SeeMore;
