import { useEffect, useState } from "react";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  function showHideScrollButton() {
    if (window.pageYOffset > 400) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", showHideScrollButton);
    return () => {
      window.removeEventListener("scroll", showHideScrollButton);
    };
  }, []);

  return (
    <div
      className="back-to-top"
      style={{
        position: "fixed",
        right: "0px",
        bottom: "125px",
        cursor: "pointer",
        backgroundColor: "#131627",
        borderRadius: "3px",
        display: `${show ? "block" : "none"}`,
      }}
      onClick={() => {
        handleScrollToTop();
      }}
    >
      <ArrowDropUpIcon fontSize="large" />
    </div>
  );
};

export default BackToTop;
