import React from "react";

const Heading = ({ type, text }) => {
  return (
    <h1
      className="fw-bold mb-5"
      style={{
        display: "inline-block",
        paddingBottom: "20px",
        borderBottom: `${
          type === "h1"
            ? "3px solid var(--bs-blue)"
            : "2px solid var(--bs-blue)"
        }`,
      }}
    >
      {text}
    </h1>
  );
};

export default Heading;
