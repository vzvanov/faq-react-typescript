import React, { ReactElement } from "react";
import { CustomLink } from "./CustomLink";

const NavBar = (): ReactElement => {
  return (
    <nav className="header__menu">
      <ul className="header__list">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/admin">Admin</CustomLink>
      </ul>
    </nav>
  );
};

export default NavBar;