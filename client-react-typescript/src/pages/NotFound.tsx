import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri"

type Props = {
  children?: React.ReactNode,
}

const NotFound = ({ children }: Props): ReactElement => {
  const navigate = useNavigate();
  const goBack = (): void => navigate(-1);

  return (
    <div className="notfound">
      <h2>This page was not found</h2>
      <RiArrowGoBackLine className={"row-icons"} size={20} onClick={goBack} />
      {children}
    </div>
  );
};

export default NotFound;