import React from "react";
import styled from "styled-components";
import Icon from "../../atoms/icons/Icon";
import Logo from "../../atoms/icons/Logo";

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

const StickyContainer = styled.div`
  position: sticky;
  top: 0;
`;

const PositionedMenu = styled.div`
  display: flex;
  height: 64px;
  margin-bottom: 24px;
  align-items: center;
`;

const PositionedMenuIcon = styled.div`
  flex: 20;
  display: flex;
  justify-content: center;
  margin-right: 8px;
`;

const PositionedLogo = styled.div`
  flex: 80;
  display: flex;
  justify-content: left;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

interface Props {
  children?: React.ReactNode;
}

function Menu(props: Props) {
  return (
    <MenuContainer>
      <StickyContainer>
        <PositionedMenu>
          <PositionedMenuIcon>
            <Icon type={"Menu"} />
          </PositionedMenuIcon>
          <PositionedLogo>
            <Logo />
          </PositionedLogo>
        </PositionedMenu>
        {props.children}
      </StickyContainer>
    </MenuContainer>
  );
}

export default Menu;
