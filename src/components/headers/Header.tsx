// Header.tsx
import React from "react";
import NameTag from "./NameTag";
import NavBar from "./NavBar";

const Header: React.FC = () => {
  return (
    // absolute inset-x-0 top-0 h-16
    <div className="w-full h-20 flex flex-row flow-root">
      <div className="w-fit h-full flex items-center float-left ">
        <NameTag />
      </div>
      <div className="w-fit h-full flex items-center float-right align-middle m-auto">
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
