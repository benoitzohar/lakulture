import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled(Link)`
  color: red;
`;

function CloseButton() {
  return <Button to="/">Back to home</Button>;
}

export default CloseButton;
