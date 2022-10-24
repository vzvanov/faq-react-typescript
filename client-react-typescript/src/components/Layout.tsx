import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

interface Props {

}

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export { Layout };
