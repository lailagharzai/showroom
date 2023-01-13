import React from "react";
import styled from "styled-components";
import Icon from "../../atoms/icons/Icon";
import Text from "../../atoms/text/Text";
import MenuItem from "../../molecules/menuitem/MenuItem";
import {cars} from "../../../Data";
import Card from "../../molecules/card/Card";
import Menu from "../../molecules/menu/Menu";
import Showroom from "../../organism/showroom/Showroom";

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

const StyledTitle = styled(Text)`
@media screen and (max-width: 700px) {
  display: none;
}
`;

function CarsForSale() {

  return (
    <Main>
      <Menu>
        <MenuItem type={"Garage"} text={"Garage"}/>
        <MenuItem type={"Showroom"} text={"Showroom"}/>
        <MenuItem type={"Upcoming"} text={"Upcoming"}/>
      </Menu>
      <Content>
        <StyledTitle primary={true} size={"large"} text={"Recent Cars for Sale"}/>
        <Showroom items={cars}/>
      </Content>
    </Main>

  );
}


export default CarsForSale;