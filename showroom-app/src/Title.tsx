import React from "react";
import styled from "styled-components";
import {
  TextLarge
} from "./TextStyles";

const StyledTitle = styled.div`
  width: 100%;
  padding-bottom: 5px;
  ${TextLarge}
`;

interface Props {
  header: string;
}

function Title(props: Props) {
  return (
    <div>
      <StyledTitle>{props.header}</StyledTitle>
    </div>
  );
}

export default Title;
