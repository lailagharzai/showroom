import React from "react";
import "./MenuItem.css";
import styled from "styled-components";

function MenuItem(props: any) {
  const MenuIcon = styled.div`
    flex: 20;
    display: flex;
    justify-content: center;

    img {
      width: 24px;
      height: 24px;
    }
  `;

  const MenuName = styled.div`
    flex: 80;
    display: flex;
    justify-content: left;
  `;

  const MenuItemContainer = styled.div`
    height: 64px;
    display: flex;
  `;

  return (
    <MenuItemContainer>
      <MenuIcon>
        <img src={process.env.PUBLIC_URL + props.icon} />
      </MenuIcon>
      <MenuName>{props.name}</MenuName>
    </MenuItemContainer>
  );
}

export default MenuItem;
