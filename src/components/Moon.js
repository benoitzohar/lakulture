import React from "react";
import styled from "styled-components";

const moonSize = `250px`;

const Container = styled.div`
  position: relative;
  height: ${moonSize};
  min-width: ${moonSize};
  max-width: ${moonSize};
  border-radius: ${moonSize};
  overflow: hidden;
`;

const WhiteMoon = styled.div`
  height: ${moonSize};
  width: ${moonSize};
  border-radius: ${moonSize};
  background-color: white;
  position: absolute;
  left: 0;
  top: 0;
`;
const DarkMoon = styled.div`
  height: ${moonSize};
  width: ${moonSize};
  border-radius: ${moonSize};
  background-color: black;
  position: absolute;
  left: 0;
  top: 0;

  animation: passBy 3s linear infinite;

  @keyframes passBy {
    from {
      left: -${moonSize};
    }
    to {
      left: ${moonSize};
    }
  }
`;

function Moon() {
  return (
    <Container>
      <WhiteMoon />
      <DarkMoon />
    </Container>
  );
}

export default Moon;
