import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const Errorpage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>{error.status}</h1>
        <p>{error.data.message || 'Something goes wrong...'}</p>
        <p>{error.data.reason || 'It is not known why...'}</p>
      </div>
    );
  }

  return (<p>{error}</p>);
};

export default Errorpage;