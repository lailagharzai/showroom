import React from "react";
import Menu from "../../molecules/menu/Menu";
import Title from "../../atoms/title/Title";
import Card from "../../molecules/card/Card";
import styled from "styled-components";
import { ICar } from "../../../Types.d";
import { cars, menuItems } from "../../../Data";
import Text from "../../atoms/text/Text"

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
      <Text primary = {true} size = {"large"} text = {"Recent Cars for Sale"}/>
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
