import React, { useState, useEffect } from "react";
import { Styled } from "./ScrollToTop.styled";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) setShowButton(true);
      else setShowButton(false);
    });
  }, []);

  const BackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <Styled.ScrollToTopButton onClick={BackToTop}>
          <Styled.Icon />
        </Styled.ScrollToTopButton>
      )}
    </>
  );
};

export default ScrollToTop;
