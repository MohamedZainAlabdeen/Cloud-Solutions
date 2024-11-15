import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [active, setActive] = useState(false);

  window.onscroll = () => setActive(scrollY > 400 ? true : false);

  return (
    <button
      onClick={() => {
        scrollTo(0, 0);
      }}
      className={`scrollToTop ${
        active
          ? "opacity-60 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <FaAngleUp style={{ color: "#fff", fontSize: "15px" }} />
    </button>
  );
};

export default ScrollToTop;
