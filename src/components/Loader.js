import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import styled from "styled-components";

const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Loader = () => {
  return (
    <LoaderContainer>
      <BeatLoader size={15} loading={true} color={"#1AA73A"} />
    </LoaderContainer>
  );
};
