import React from "react";
import MenuItem from "./MenuItem";
import styled from "styled-components";
import { TextMenu } from "./TextStyles";

const MenuContainer = styled.div`
  width: 248px;
  background: #fafafa;
  border-right: 1px solid #e5e5e5;
  padding: 14px;

  @media screen and (max-width: 1000px) {
    width: 200px;
  }

  @media screen and (max-width: 700px) {
    width: 100px;
  }

  @media screen and (max-width: 500px) {
    width: 50px;
  }
`;

const MenuNavigation = styled.div`
  display: flex;
  height: 64px;
  margin-bottom: 24px;
  align-items: center;
`;

const MenuIcon = styled.div`
  flex: 20;
  display: flex;
  justify-content: center;
  margin-right: 8px;

  img {
    width: 24px;
    height: 24px; 
  }
`;

const MenuCustodianIcon = styled.div`
  flex: 80;
  display: flex;
  justify-content: left;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const MenuItems = styled.div`
  ${TextMenu}
`;


function Menu() {
  return (
    <MenuContainer>
      <MenuNavigation>
        <MenuIcon>
          <img src={process.env.PUBLIC_URL + "/assets/menu_icon.svg"} />
        </MenuIcon>
        <MenuCustodianIcon>
          <img src={process.env.PUBLIC_URL + "/assets/custodian_icon.svg"} />
        </MenuCustodianIcon>
      </MenuNavigation>
      <MenuItems>
        <MenuItem name="Garage" icon="/assets/home_icon.svg" />
        <MenuItem name="Showroom" icon="/assets/showroom_icon.svg" />
        <MenuItem name="Upcoming" icon="/assets/upcoming_icon.svg" />
      </MenuItems>
    </MenuContainer>
  );
}

export default Menu;
