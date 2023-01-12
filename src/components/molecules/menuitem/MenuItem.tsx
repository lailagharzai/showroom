import React from "react";
import styled from "styled-components";
import { TextMenu } from "../../../TextStyles";
import { IconType } from "../../../Types.d";
import Icon from "../../atoms/icons/Icon";
import Text from "../../atoms/text/Text";

interface Props {
  type: IconType;
  text: string;
}

const IconContainer = styled.div`
  flex: 20;
  display: flex;
  justify-content: center;
  margin-right: 8px;
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
    cursor: pointer;
  }
`;

function MenuItem(props: Props) {
  return (
    <MenuItemContainer>
    <IconContainer>
      <Icon type={props.type} />
      </IconContainer>
      <Text primary={true} size={"TextMenu"} text={props.text} />
    </MenuItemContainer>
  );
}

export default MenuItem;
