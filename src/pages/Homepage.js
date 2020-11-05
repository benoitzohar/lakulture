//@ts-check

import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Div100vh from "react-div-100vh";
import { isMobileOnly } from "react-device-detect";

import Background from "../components/Background";
import Moon from "../components/Moon";
import LogoSVG from "../assets/logo-simple.svg";
import shopButtonSVG from "../assets/shop-button.svg";

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
const MobileLogo = styled.img`
  width: 160px;
`;

const StyledLink = styled(Link)`
  font-size: 30px;
`;

const StyledA = styled.a`
  font-size: 30px;
`;

const ShopButtonImg = styled.img`
  height: 240px;
  position: absolute;
  top: calc(50% - 120px);
  right: calc(20% - 120px);
`;

const MobileMoonArea = styled(MoonArea)`
  padding-top: 160px;
`;

const MenuButton = styled.div`
  > span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 9px;
    position: relative;

    background: white;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  > span:first-child {
    transform-origin: 0% 0%;
  }

  > span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  ${({ opened }) =>
    opened &&
    `
        > span {
         opacity: 1;
         transform: rotate(45deg) translate(-2px, 0px);
        }
        > span:nth-last-child(1) {
          transform: rotate(-45deg) translate(0, -10px);
        }
        > span:nth-last-child(2) {
          opacity: 0;
          transform: rotate(0deg) scale(0.2, 0.2);
        }
      `}
`;

const Menu = styled.div`
  position: absolute;
  top: 0;

  bottom: 0;
  right: 0;
  width: 100vw;
  left: 100vw;
  background: black;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: all 0.4s;

  ${({ displayed }) =>
    displayed &&
    `
        left: 0;
        opacity: 1;
    `}
`;

const MenuLink = styled(Link)`
  font-size: 22px;
  width: 100%;
  height: 45px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuA = styled.a`
  font-size: 22px;
  width: 100%;
  height: 45px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Homepage() {
  const [openMenu, setOpenMenu] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);

  useEffect(() => {
    setDisplayMenu(openMenu);
  }, [openMenu]);

  if (isMobileOnly) {
    return (
      <>
        <Background>
          <Grid>
            <LogoArea>
              <MobileLogo src={LogoSVG} alt="La Kulture" />
              <br />
            </LogoArea>
            <MobileMoonArea>
              <Moon />
            </MobileMoonArea>
            <InfosArea>
              <MenuButton
                onClick={() => setOpenMenu(!openMenu)}
                opened={openMenu}
              >
                <span />
                <span />
                <span />
              </MenuButton>
            </InfosArea>
            <Menu displayed={displayMenu}>
              <MenuA href="https://sauvez.lakulture.com">SHOP</MenuA>
              <MenuLink to="/club">CLUB</MenuLink>
              <MenuLink to="/infos">INFOS</MenuLink>
              <MenuA
                href="https://www.facebook.com/lakulture/events/?ref=page_internal"
                target="_blank"
              >
                PROGRAMMATION
              </MenuA>
              <MenuLink to="/residences">RÉSIDENCES</MenuLink>
            </Menu>
          </Grid>
        </Background>
      </>
    );
  }

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
            <StyledA href="https://sauvez.lakulture.com">
              <ShopButtonImg src={shopButtonSVG} alt="Got to Shop" />
            </StyledA>
          </MoonArea>
          <InfosArea>
            <StyledLink to="/infos">INFOS</StyledLink>
          </InfosArea>
          <ProgrammationArea>
            <StyledA
              href="https://www.facebook.com/lakulture/events/?ref=page_internal"
              target="_blank"
            >
              PROGRAMMATION
            </StyledA>
          </ProgrammationArea>
          <ResidencesArea>
            <StyledLink to="/residences">RÉSIDENCES</StyledLink>
          </ResidencesArea>
        </Grid>
      </Background>
    </>
  );
}

export default withRouter(Homepage);
