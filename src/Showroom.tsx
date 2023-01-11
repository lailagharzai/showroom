import React from "react";
import Menu from "./Menu";
import Title from "./Title";
import Card from "./Card";
import styled from "styled-components";
import { ICar } from "./Types.d";
import { cars, menuItems } from "./Data";

const Main = styled.div`
  display: flex;
`;

const Cards = styled.div`
  grid-column: 2 / span 12;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 40px;
  padding: 32px 0;
`;

const Content = styled.div`
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

function Showroom() {
  return (
    <Main>
      <Menu menuItems={menuItems}/>
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
