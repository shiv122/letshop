import React from "react";
import { Spinner } from "react-bootstrap";

function Loader({ variant }) {
  return (
    <Spinner
      variant={variant}
      animation="grow"
      role="status"
      style={{
        height: "100px",
        width: "100px",
        margin: "auto",
        display: "block",
      }}
    ></Spinner>
  );
}

export default Loader;
