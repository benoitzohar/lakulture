import React from "react";
import styled from "styled-components";
import Div100vh from "react-div-100vh";

import CloseButton from "./CloseButton";

import LogoSVG from "../assets/logo-small.svg";

const Grid = styled(Div100vh)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: "small_logo . . . . close" "title content content content content ." "title content content content content ." "title content content content content ." "title content content content content ." "title content content content content .";
`;

const LogoArea = styled.div`
  grid-area: small_logo;
`;
const CloseArea = styled.div`
  grid-area: close;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 20px;
`;
const TitleArea = styled.div`
  grid-area: title;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const ContentAreaDark = styled.div`
  grid-area: content;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const LogoDark = styled.img`
  height: 50px;
  margin: 20px;
  filter: invert();
`;
const TitleDark = styled.div`
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1px;
  transform: rotate(90deg);
`;

function Background({ light, title, children }) {
  let Logo = LogoDark;
  let Title = TitleDark;
  let ContentArea = ContentAreaDark;
  if (light) {
    ContentArea = styled(ContentAreaDark)`
      color: black;
    `;
    Logo = styled(LogoDark)`
      filter: none;
    `;
    Title = styled(TitleDark)`
      color: black;
    `;
  }

  return (
    <Grid>
      <LogoArea>
        <Logo src={LogoSVG} alt="La Kulture" />
      </LogoArea>
      <CloseArea>
        <CloseButton light={!!light} />
      </CloseArea>
      <TitleArea>
        <Title>{title}</Title>
      </TitleArea>
      <ContentArea>{children}</ContentArea>
    </Grid>
  );
}

export default Background;
