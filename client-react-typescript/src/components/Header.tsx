import React, { ReactElement } from "react";
import NavBar from "./NavBar";

const Header = (): ReactElement => {
  return (
    <header className="header">
      <NavBar />
    </header>
  );
};

export default Header;