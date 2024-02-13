// Header.tsx
import React, { useState, useEffect } from "react";
import NameTag from "./NameTag";
import NavBar from "./NavBar";

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeaderVisibility = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeaderVisibility);
      return () => {
        window.removeEventListener("scroll", controlHeaderVisibility);
      };
    }
  }, [lastScrollY]);

  return (
    <header
      className={`z-10 flex w-full max-w-6xl fixed w-full bg-background transition-transform duration-300 ${
        !isVisible && "-translate-y-full"
      }`}
    >
      <div className="w-full flex flex-row flow-root">
        <div className="w-fit h-full flex items-center float-left ">
          <NameTag />
        </div>
        <div className="w-fit h-full flex items-center float-right align-middle m-auto">
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
