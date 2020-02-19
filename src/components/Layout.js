import React from "react";
import styled from "styled-components";
import Div100vh from "react-div-100vh";
import { Link } from "react-router-dom";

import CloseButton from "./CloseButton";

import LogoSVG from "../assets/logo-small.svg";

const Grid = styled(Div100vh)`
  display: grid;
  grid-template-columns: auto 1fr 1fr 1fr 1fr auto;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: "small_logo . . . . close" "title content content content content ." "title content content content content ." "title content content content content ." "title content content content content ." "title content content content content .";
`;

const LogoArea = styled.div`
  grid-area: small_logo;
  padding-top: 20px;
  padding-left: 20px;
`;
const CloseArea = styled.div`
  grid-area: close;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding-top: 20px;
  padding-right: 20px;
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
  height: 34px;
  filter: invert();
`;
const TitleDark = styled.div`
  font-size: 30px;
  writing-mode: vertical-rl;
  margin-left: 20px;
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
        <Link to="/">
          <Logo src={LogoSVG} alt="La Kulture" />
        </Link>
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
