import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Devices } from "../../styles/Devices";

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  margin: 2rem 0;
  padding: 2rem;

  @media ${Devices.mobile} {
    padding: 1rem;
  }
`;

const Header = styled.thead`
  background-color: ${(props) => props.theme.colors.lightGray};
`;

const Row = styled.tr`
  &:nth-of-type(2n) {
    background-color: ${(props) => props.theme.colors.lightGray};
  }
`;

const Icon = styled.img`
  max-width: 32px;
  max-height: 32px;
  margin-right: 0.5rem;
`;

const TableHeading = styled.th`
  padding: 2rem;

  @media ${Devices.mobile} {
    padding: 1rem;
  }
`;

const TableData = styled.td`
  color: ${(props) => props.theme.colors.dark};
  font-size: ${(props) => props.theme.fontSizes.small};
  display: ${(props) => (props.condition ? "flex" : "")};
  align-items: ${(props) => (props.condition ? "center" : "")};
  padding: 2rem;

  @media ${Devices.mobile} {
    padding: 1rem;
  }
`;

export const FutureForecast = ({ data }) => {
  const renderedRows = data.map((forecast) => (
    <Row key={forecast.date_epoch}>
      <TableData>{forecast.date}</TableData>
      <TableData condition>
        <Icon src={forecast.day.condition.icon} alt={forecast.day.condition.text} />
        <span>{forecast.day.condition.text}</span>
      </TableData>
      <TableData>{forecast.day.avgtemp_c} &deg;C</TableData>
      <TableData>{forecast.day.daily_chance_of_rain} %</TableData>
      <TableData>{forecast.day.maxwind_kph} km/h</TableData>
    </Row>
  ));

  return (
    <TableContainer>
      <Table>
        <Header>
          <Row>
            <TableHeading>Date</TableHeading>
            <TableHeading>Conditions</TableHeading>
            <TableHeading>Temperature</TableHeading>
            <TableHeading>Chance of rain</TableHeading>
            <TableHeading>Wind</TableHeading>
          </Row>
        </Header>

        <tbody>{renderedRows}</tbody>
      </Table>
    </TableContainer>
  );
};

FutureForecast.propTypes = {
  data: PropTypes.array,
};
