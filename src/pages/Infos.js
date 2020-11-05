import React from "react";
import styled from "styled-components";
import { isMobileOnly } from "react-device-detect";

import Background from "../components/Background";
import Layout from "../components/Layout";

import FacebookSVG from "../assets/icon-facebook.svg";
import InstagramSVG from "../assets/icon-instagram.svg";
import ImageSVG from "../assets/image-infos.svg";

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  ${isMobileOnly ? "flex-direction: column;" : ""}
`;

const TextBlock = styled.div`
  margin-bottom: ${isMobileOnly ? "10" : "30"}px;
  font-size: ${isMobileOnly ? "4vw" : "20px"};
  ${isMobileOnly ? "letter-spacing: 0.2em;" : ""};
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: ${isMobileOnly ? "180" : "260"}px;
`;

const SocialIcon = styled.img`
  margin: 30px 10px;
  height: 32px;
`;

function Infos() {
  return (
    <Background>
      <Layout title="INFOS">
        <Container>
          <div>
            <TextBlock>
              MERCREDI : à partir de 20h
              <br />
              JEUDI : 20h–4h
              <br />
              VENDREDI : 20h–4h
              <br />
              SAMEDI : 20h–4h
            </TextBlock>
            <TextBlock>
              9 RUE DES BATELIERS
              <br />
              67000 STRASBOURG
              <br />
              03.90.40.49.36
              <br />
              BOOKING@LAKULTURE.COM
            </TextBlock>
            <div>
              <a href="https://facebook.com/lakulture" rel="nofollow">
                <SocialIcon src={FacebookSVG} alt="Facebook" />
              </a>
              <a
                href="https://instagram.com/lakulturestrasbourg"
                rel="nofollow"
              >
                <SocialIcon src={InstagramSVG} alt="Instagram" />
              </a>
            </div>
          </div>
          <ImageWrapper>
            <Image src={ImageSVG} alt="" />
          </ImageWrapper>
        </Container>
      </Layout>
    </Background>
  );
}

export default Infos;
