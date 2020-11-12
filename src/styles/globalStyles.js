import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: "Nunito", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${(props) => props.theme.colors.lightGray}
    }
    p,h1 {
      padding: 0;
      margin: 0;
    }
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
    }
    table,th,td {
      border-collapse: collapse;
      padding: 2rem;
      text-align: left;
    }
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.dark};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 400;
`;
