import React from "react";

const Heading = ({ type, text }) => {
  if (type === "h1") {
    return (
      <h1
        className="fw-bold mb-4"
        style={{
          display: "inline-block",
          paddingBottom: "20px",
          borderBottom: "3px solid var(--bs-blue)",
        }}
      >
        {text}
      </h1>
    );
  }

  if (type === "h2") {
    return (
      <h2
        className="fw-bold mb-4"
        style={{
          display: "inline-block",
          paddingBottom: "20px",
          borderBottom: "2px solid var(--bs-blue)",
        }}
      >
        {text}
      </h2>
    );
  }

  if (type === "h3") {
    return (
      <h3
        className="fw-bold mb-3"
        style={{
          display: "inline-block",
          paddingBottom: "10px",
        }}
      >
        {text}
      </h3>
    );
  }

  if (type === "h4") {
    return (
      <h4
        className="fw-bold mb-3"
        style={{
          display: "inline-block",
          paddingBottom: "10px",
        }}
      >
        {text}
      </h4>
    );
  }

  return null;
};

export default Heading;
