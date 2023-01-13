import React from "react";
import styled from "styled-components";
import { IconType } from "../../../Types.d";
import Icon from "../../atoms/icons/Icon";
import Text from "../../atoms/text/Text";

interface Props {
  type: IconType;
  text: string;
}

const PositionedIcon = styled(Icon)`
  flex: 20;
  display: flex;
  justify-content: center;
  margin-right: 8px;
`;

const PositionedText = styled(Text)`
  flex: 80;
  display: flex;
  justify-content: left;

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
      <PositionedIcon type={props.type} />
      <PositionedText primary={true} size={"TextMenu"} text={props.text} />
    </MenuItemContainer>
  );
}

export default MenuItem;
