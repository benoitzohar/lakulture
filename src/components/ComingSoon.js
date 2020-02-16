import React from "react";
import styled from "styled-components";
import Div100vh from "react-div-100vh";

import Background from "./Background";
import LogoSVG from "../assets/logo.svg";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
`;
const Container = styled(Div100vh)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.img`
  margin-bottom: 20px;
  height: 30vh;
  filter: invert();

  animation: spin 15s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
const DiscardArea = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100px;
  width: 100px;
`;

let clickCount = 0;
let lastClick = null;

function onDiscardAreaClick() {
  if (lastClick && +lastClick < +new Date() - 500) {
    clickCount = 0;
    lastClick = null;
  } else if (clickCount === 3) {
    localStorage.setItem("HIDE_COMING_SOON_OVERLAY", true);
    document.location.reload();
  } else {
    clickCount++;
    lastClick = new Date();
  }
}

function ComingSoon() {
  return (
    <Overlay>
      <Background style={{ flex: 1 }}>
        <Container>
          <a href="https://facebook.com/lakulture" rel="nofollow">
            <Logo src={LogoSVG} alt="La Kulture" />
          </a>
        </Container>
        <DiscardArea onClick={onDiscardAreaClick} />
      </Background>
    </Overlay>
  );
}

export default ComingSoon;
