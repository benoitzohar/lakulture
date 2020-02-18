import React from "react";
import styled from "styled-components";

import Background from "../components/Background";
import Layout from "../components/Layout";

import LogoSVG from "../assets/logo.svg";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  text-align: center;
`;

const FirstParagraph = styled.p`
  font-size: 40px;
`;
const OtherParagraph = styled.p`
  font-size: 30px;
`;

const Logo = styled.img`
  margin: 30px auto;
  height: 140px;
`;

function Club() {
  return (
    <Background light>
      <Layout title="CLUB" light>
        <Container>
          <FirstParagraph>
            LA KULTURE EST UNE TERRE D’ACCUEIL POUR LES AMOUREUX DE MUSIQUES
            ÉLECTRONIQUES.
          </FirstParagraph>
          <OtherParagraph>
            LIEU DE RENCONTRES ET DE CULTURE ALTERNATIVE, ON Y PARTAGE TOUTES
            LES SEMAINES UNE SÉLECTION D’ARTISTES AUX SENSIBILITÉS ET PARCOURS
            RICHES. DEPUIS 2015 C’EST PLUS DE 500 CONCERTS, EXPOS, WORKSHOPS ET
            CONFÉRENCES.
          </OtherParagraph>
          <OtherParagraph>
            DÉCOUVREZ OU REDÉCOUVREZ CE LIEU À L’AMBIANCE CHALEUREUSE AU COEUR
            DU CENTRE VILLE DE STRASBOURG.
          </OtherParagraph>
          <Logo src={LogoSVG} alt="La Kulture" />
        </Container>
      </Layout>
    </Background>
  );
}

export default Club;
