import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Devices } from "../../styles/Devices";

const DataContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 2rem 0;

  @media ${Devices.mobile} {
    display: block;
  }
`;

const Icon = styled.img`
  max-width: 64px;
  max-height: 64px;
`;

const Temp = styled.h1`
  color: ${(props) => props.theme.colors.dark};
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  font-weight: bold;
`;

const Label = styled.p`
  color: ${(props) => props.theme.colors.gray};
  font-size: ${(props) => props.theme.fontSizes.small};
  text-transform: uppercase;
  font-weight: 300;
`;

const Value = styled(Label)`
  color: ${(props) => props.theme.colors.dark};
  font-weight: bold;
  text-transform: none;

  @media ${Devices.mobile} {
    margin-bottom: 1rem;
  }
`;

export const CurrentForecast = ({ data }) => {
  return (
    <DataContainer>
      <Icon src={data.condition.icon} alt={data.condition.text} />

      <Temp>{data.temp_c} &deg;C</Temp>

      <div>
        <Label>conditions</Label>
        <Value>{data.condition.text}</Value>
      </div>

      <div>
        <Label>feels like</Label>
        <Value>{data.feelslike_c} &deg;C</Value>
      </div>

      <div>
        <Label>pressure</Label>
        <Value>{data.pressure_mb} hPa</Value>
      </div>

      <div>
        <Label>wind</Label>
        <Value>{data.wind_kph} km/h</Value>
      </div>
    </DataContainer>
  );
};

CurrentForecast.propTypes = {
  data: PropTypes.object,
};
