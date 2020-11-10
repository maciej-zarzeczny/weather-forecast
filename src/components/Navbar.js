import React from "react";
import styled from "styled-components";
import { Container } from "../styles/globalStyles";

const NavWrapper = styled.nav`
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.colors.light};
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.dark};
`;

export const Navbar = () => {
  return (
    <NavWrapper>
      <Container>
        <Logo>WeatherForecast</Logo>
      </Container>
    </NavWrapper>
  );
};
