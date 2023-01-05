import React from "react";
import styled from "styled-components";

const StyledTitle = styled.div`
  width: 100%;
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
