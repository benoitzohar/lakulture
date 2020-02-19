import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import CrossSVG from "../assets/cross.svg";

let IconDark = styled.img`
  height: 30px;
  width: 30px;
`;

function CloseButton({ light }) {
  let Icon = IconDark;
  if (!light) {
    Icon = styled(IconDark)`
      filter: invert();
    `;
  }

  return (
    <Link to="/">
      <Icon src={CrossSVG} alt="Retour" />
    </Link>
  );
}

export default CloseButton;
