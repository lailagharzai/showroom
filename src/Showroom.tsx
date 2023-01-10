import React from "react";
import Menu from "./Menu";
import Title from "./Title";
import Card from "./Card";
import styled from "styled-components";
import { ICar } from "./Types.d";
import { cars } from "./Data";

const Main = styled.div`
  display: grid;
  grid-gap: 20px;
`;

const Cards = styled.div`
  grid-column: 2 / span 12;
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 60px));
  grid-gap: 40px;
  padding: 32px 0;
  
  @media only screen and (max-width: 500px) {
    grid-column: 2 / span 6;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
  }
`;

const Content = styled.div`
  grid-column: 2 / span 12;
  padding-top: 60px;

  @media only screen and (max-width: 500px) {
    grid-column: 2 / span 6;
    margin-left: 50px;
  }

  @media only screen and (max-width: 400px) {
    padding-top: 0;
  }
`;

function Showroom() {
  return (
    <Main>
      <Menu />
      <Content>
        <Title header="Recent cars for sale" />
        <Cards>
          {cars.map((car, index) => (
            <Card car={car} />
          ))}
        </Cards>
      </Content>
    </Main>
  );
}

export default Showroom;
