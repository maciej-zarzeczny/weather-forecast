import React from "react";
import styled from "styled-components";

import { Container } from "../../styles/globalStyles";
import { SearchBar } from "../SearchBar";

const PageContent = styled.section`
  margin: 50px 0;
`;

export const HomePage = () => {
  return (
    <Container>
      <PageContent>
        <SearchBar />
      </PageContent>
    </Container>
  );
};
