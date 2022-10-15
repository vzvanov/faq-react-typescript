import React, { ReactElement } from "react";
import boxDesktop from '../assets/images/illustration-box-desktop.svg';

const LogoBox = (): ReactElement => {
  return (
    <div className="logo-box">
      <img className="faq__img-box" src={boxDesktop} alt="box" />
    </div>
  );
};

export default LogoBox;