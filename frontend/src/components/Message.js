import React from "react";
import { Alert } from "react-bootstrap";

function Message(variant, children) {
  return (
    <Alert variant={variant}>
      <h2>{children}</h2>
    </Alert>
  );
}

export default Message;
