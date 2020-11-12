import React, { useState } from "react";
import styled from "styled-components";

import { Container } from "../../styles/globalStyles";
import { SearchBar } from "../SearchBar";
import { Forecast } from "../../features/forecast/Forecast";

const PageContent = styled.section`
  margin: 50px 0;
`;

export const HomePage = () => {
  const [city, setCity] = useState("");

  return (
    <Container>
      <PageContent>
        <SearchBar changeCity={(newCity) => setCity(newCity)} />
        {city && <Forecast city={city} />}
      </PageContent>
    </Container>
  );
};
