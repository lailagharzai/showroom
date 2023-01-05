import React from "react";
import styled from "styled-components";

interface Props {
  name: string;
  icon: string;
}

function MenuItem(props: Props) {
  const MenuIcon = styled.div`
    flex: 20;
    display: flex;
    justify-content: center;
    margin-right: 8px;

    img {
      width: 24px;
      height: 24px;
    }

    @media screen and (max-width: 1000px) {
      img {
        width: 20px;
        height: 20px;
      }
    }

    @media screen and (max-width: 500px) {
      img {
        width: 18px;
        height: 18px;
      }
    }
  `;

  const MenuName = styled.div`
    flex: 80;
    display: flex;
    justify-content: left;

    @media screen and (max-width: 1000px) {
      font-size: 16px;
    }

    @media screen and (max-width: 700px) {
      display: none;
    }
  `;

  const MenuItemContainer = styled.div`
    height: 64px;
    display: flex;
    align-items: center;

    &:hover {
      background-color: #e1e1e1;
    }
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
