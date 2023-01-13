import React from "react";
import styled from "styled-components";
import { TextSize } from "../../../Types";

const TextPrimary = `
  color: black;
`;

const TextSecondary = `
  color: #666666;
`;

const TextSmall = `
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;

const TextMenu = `
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
`;

const TextMedium = `
  font-size: 18px;
  line-height: 20px;
  font-weight: 400;
`;

const TextLarge = `
  font-size: 26px;
  line-height: 20px;
  font-weight: 400;
`;

interface Props {
  className?: string;
  primary: boolean;
  size: TextSize;
  text: string;
}

function Text(props: Props) {
  let color = props.primary ? TextPrimary : TextSecondary

  let size = TextSmall;
  switch (props.size) {
    case "SmallText":
      size = TextSmall;
      break;
    case "MenuText":
      size = TextMenu;
      break;
    case "MediumText":
      size = TextMedium;
      break;
    case "LargeText":
      size = TextLarge;
      break;
    default:
      break;
  }

  const StyledText = styled.div`
    ${color}
    ${size}
    `
  return (
    <StyledText className={props.className}>{props.text}</StyledText>
  );
}

export default Text;


