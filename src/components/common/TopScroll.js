import React, { useState } from "react";
import { IconArrowUp } from "@tabler/icons-react";

const Topscroll = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="flex">
      {visible ? (
        <a
          className="rounded-full fixed bottom-16 right-10 top_scroll btn-theme text-white p-3 animate-bounce"
          onClick={scrollToTop}
        >
          <IconArrowUp size={32} />
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default Topscroll;
