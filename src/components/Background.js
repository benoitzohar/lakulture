import React from "react";
import styled from "styled-components";

const DarkBackground = styled.div`
  background-color: black;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.3) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.3), white 1px, transparent 1px);
  background-size: 50px 50px;
  background-position: -2px -2px;
`;

const LightBackground = styled.div`
  background-color: white;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.3), white 1px, transparent 1px);
  background-size: 50px 50px;
`;

function Background({ light, children }) {
  const Bg = light ? LightBackground : DarkBackground;
  return <Bg>{children}</Bg>;
}

export default Background;
