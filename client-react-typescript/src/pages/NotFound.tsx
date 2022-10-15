import React, { FC, ReactElement } from "react";

type Props = {
  children: React.ReactNode,
}

const NotFound = ({ children }: Props): ReactElement => {
  return (
    <div>
      {children}
    </div>
  );
};

export default NotFound;