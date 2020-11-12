import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { useDebounce } from "../hooks/useDebounce";
import {
  selectAllSuggestions,
  getCitySuggestions,
  clearSuggestions,
} from "../features/forecast/forecastSlice";

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
  cursor: ${(props) => (props.disabled ? "no-drop" : "pointer")};
  transition: all 0.3s ease-in-out;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  &:hover {
    opacity: ${(props) => (props.disabled ? 0.5 : 0.8)};
  }
`;

const Suggestion = styled.li`
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.dark};

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.accent};
  }
`;

export const SearchBar = ({ changeCity }) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const citySuggestions = useSelector(selectAllSuggestions);

  // Debounce search query input to avoid unnecessary api calls
  const debouncedInput = useDebounce(input, 200);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();

    if (input) {
      dispatch(clearSuggestions());
      changeCity(input);
      setInput("");
    }
  };

  const handleSuggestionClick = (suggestion) => {
    dispatch(clearSuggestions());
    changeCity(suggestion);
    setInput("");
  };

  // Fetch all city suggestions when input changes
  useEffect(() => {
    if (debouncedInput) {
      dispatch(getCitySuggestions(debouncedInput));
    }
  }, [debouncedInput, dispatch]);

  const renderedSuggestions = citySuggestions.map((suggestion) => (
    <Suggestion key={suggestion.id} onClick={() => handleSuggestionClick(suggestion.name)}>
      {suggestion.name}
    </Suggestion>
  ));

  return (
    <>
      <form>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="City..."
            onChange={handleInputChange}
            value={input}
          />
          <SearchButton disabled={input === ""} type="submit" onClick={handleSearchClick}>
            Search
          </SearchButton>
        </SearchContainer>
      </form>
      <ul>{renderedSuggestions}</ul>
    </>
  );
};

SearchBar.propTypes = {
  changeCity: PropTypes.func,
};
