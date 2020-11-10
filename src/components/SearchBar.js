import React from "react";
import styled from "styled-components";

const SearchContainer = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 15px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.dark};
  font-size: ${(props) => props.theme.fontSizes.small};
  outline: none;
  font-family: "Nunito";
`;

const SearchButton = styled.button`
  padding: 0 1rem;
  height: 100%;
  margin-left: 0.5rem;
  color: ${(props) => props.theme.colors.light};
  background-color: ${(props) => props.theme.colors.accent};
  border: none;
  outline: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizes.small};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="City..." />
      <SearchButton>Search</SearchButton>
    </SearchContainer>
  );
};
