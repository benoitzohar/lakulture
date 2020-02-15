import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Div100vh from "react-div-100vh";

import Moon from "../components/Moon";

const Grid = styled(Div100vh)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas: "logo logo . . infos infos" "logo logo moon moon . ." ". . moon moon . ." "residences residences . . programmation programmation";
`;
const LogoArea = styled.div`
  grid-area: logo;
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

function Homepage() {
  return (
    <div className="bg-dark">
      <Grid>
        <LogoArea>
          Insert logo
          <br />
          <Link to="/club">CLUB</Link>
        </LogoArea>
        <MoonArea>
          <Moon />
        </MoonArea>
        <InfosArea>
          <Link to="/infos">INFOS</Link>
        </InfosArea>
        <ProgrammationArea>
          <Link to="/programmation">PROGRAMMATION</Link>
        </ProgrammationArea>
        <ResidencesArea>
          <Link to="/residences">RÉSIDENCES</Link>
        </ResidencesArea>
      </Grid>
    </div>
  );
}

export default Homepage;
