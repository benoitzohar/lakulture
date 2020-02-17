import React from "react";
import styled from "styled-components";

import Background from "../components/Background";
import Layout from "../components/Layout";

import DelimiterSVG from "../assets/delimiter.svg";
import LogoSVG from "../assets/logo.svg";

const Container = styled.div`
  text-align: center;
`;

const Header = styled.h1`
  font-size: 70px;
`;

const Title = styled.div`
  font-size: 40px;
`;

const Subtitle = styled.div`
  font-size: 30px;
  margin-bottom: 40px;
  font-weight: 700;
`;

const Delimiter = styled.img`
  margin-bottom: 40px;
  height: 12px;
`;

const Logo = styled.img`
  margin-bottom: 40px;
  height: 140px;
`;

function Item({ title, subtitle }) {
  return (
    <>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </>
  );
}

function Residences() {
  return (
    <Background light>
      <Layout title="RESIDENCES" light>
        <Container>
          <Header>RÉSIDENCES</Header>
          <Item title="BANDE MAGNETIQUE" subtitle="TECHNO - RAVE - BREAK" />
          <Item title="CARTRIDGE MATERIAL" subtitle="TECHNO - HOUSE - BREAK" />
          <Item title="KULT NIGHTS" subtitle="TECHNO - WAVES - HOUSE" />
          <Item title="KURE" subtitle="TECHNO - RAVE - ELECTRO" />
          <Item title="LA FINCA" subtitle="HOUSE - WORLD" />
          <Item title="M2S" subtitle="TECHNO - ELECTRO" />
          <Item title="MAL.E.S" subtitle="TECHNO - HOUSE - DISCO" />
          <Item title="MERCI BEAUCOUP" subtitle="HOUSE - DISCO - ELECTR" />
          <Item
            title="MR. P BOOKING & EVENTS"
            subtitle="HOUSE - DISCO - FUNK"
          />
          <Item title="ODC LIVE OHRENSAFT" subtitle="TECHNO - WAVES" />
          <Item title="ORDINAIRE" subtitle="HOUSE - DISCO" />
          <Item title="SPECTR" subtitle="BASS - HOUSE - BREAK" />
          <Item title="SUBTRONIC" subtitle="TECHNO - HOUSE - ELECTRO" />
          <Item title="ULTRATECH" subtitle="TECHNO - RAVE - ELECTRO" />
          <Item title="VOODOO THEORY" subtitle="TECHNO - RAVE - BREAK" />
          <Item title="1518" subtitle="BASS - PSYTRANCE" />
          <Delimiter src={DelimiterSVG} alt="" />
          <Item title="OPEN PLATINES" subtitle="TECHNO - HOUSE - DISCO" />
          <Item title="PUNCH LINE" subtitle="HIP-HOP - BASS - ELECTRO" />
          <Logo src={LogoSVG} alt="La Kulture" />
        </Container>
      </Layout>
    </Background>
  );
}

export default Residences;
