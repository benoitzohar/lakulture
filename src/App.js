import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";

import SwitchWithSlide from "./SwitchWithSlide";
import Homepage from "./pages/Homepage";
import Club from "./pages/Club";
import Infos from "./pages/Infos";
import Residences from "./pages/Residences";
import Programmation from "./pages/Programmation";

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  color: white;
`;

function App() {
  return (
    <BrowserRouter>
      <Container>
        <SwitchWithSlide>
          <Route path="/club" render={Club} />
          <Route path="/infos" render={Infos} />
          <Route path="/residences" render={Residences} />
          <Route path="/programmation" render={Programmation} />
          <Route path="/" render={Homepage} />
        </SwitchWithSlide>
      </Container>
    </BrowserRouter>
  );
}

export default App;
