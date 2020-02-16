import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Div100vh from "react-div-100vh";

import Background from "../components/Background";
import ComingSoon from "../components/ComingSoon";
import Moon from "../components/Moon";
import LogoSVG from "../assets/logo-simple.svg";

const Grid = styled(Div100vh)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas: "logo logo . . infos infos" "logo logo moon moon . ." ". . moon moon . ." "residences residences . . programmation programmation";
`;
const LogoArea = styled.div`
  grid-area: logo;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
`;
const MoonArea = styled.div`
  grid-area: moon;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InfosArea = styled.div`
  grid-area: infos;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 20px;
`;
const ProgrammationArea = styled.div`
  grid-area: programmation;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 20px;
`;
const ResidencesArea = styled.div`
  grid-area: residences;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 20px;
`;

const Logo = styled.img`
  width: 100%;
  max-width: 250px;
`;

const StyledLink = styled(Link)`
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const SHOW_COMING_SOON_OVERLAY =
  !localStorage || !localStorage.getItem("HIDE_COMING_SOON_OVERLAY");

function Homepage() {
  return (
    <>
      <Background>
        <Grid>
          <LogoArea>
            <Logo src={LogoSVG} alt="La Kulture" />
            <br />
            <StyledLink to="/club">CLUB</StyledLink>
          </LogoArea>
          <MoonArea>
            <Moon />
          </MoonArea>
          <InfosArea>
            <StyledLink to="/infos">INFOS</StyledLink>
          </InfosArea>
          <ProgrammationArea>
            <StyledLink to="/programmation">PROGRAMMATION</StyledLink>
          </ProgrammationArea>
          <ResidencesArea>
            <StyledLink to="/residences">RÉSIDENCES</StyledLink>
          </ResidencesArea>
        </Grid>
      </Background>
      {SHOW_COMING_SOON_OVERLAY && <ComingSoon />}
    </>
  );
}

export default Homepage;
