import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";

import { selectForecast, getForecast } from "./forecastSlice";
import { Title } from "../../styles/globalStyles";
import { CurrentForecast } from "./CurrentForecast";
import { FutureForecast } from "./FutureForecast";
import { Loader } from "../../components/Loader";

const ForecastContainer = styled.section`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.light};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 10px;
  margin-top: 50px;
`;

export const Forecast = ({ city }) => {
  const dispatch = useDispatch();

  const forecastData = useSelector(selectForecast);
  const forecastStatus = useSelector((state) => state.forecast.status);
  const error = useSelector((state) => state.forecast.error);

  useEffect(() => {
    dispatch(getForecast(city));
  }, [city, dispatch]);

  let content;
  switch (forecastStatus) {
    case "loading":
      content = <Loader />;
      break;

    case "failed":
      content = <p>{error}</p>;
      break;

    case "succeeded":
      content = (
        <>
          <Title>
            {forecastData.location.name} ({forecastData.location.country}) -{" "}
            {forecastData.current.last_updated}
          </Title>
          <CurrentForecast data={forecastData.current} />

          <Title>Next {forecastData.forecast.forecastday.length - 1} days</Title>
          <FutureForecast data={forecastData.forecast.forecastday.slice(1)} />
        </>
      );
      break;

    default:
      break;
  }

  return <ForecastContainer>{content}</ForecastContainer>;
};

Forecast.propTypes = {
  city: PropTypes.string,
};
