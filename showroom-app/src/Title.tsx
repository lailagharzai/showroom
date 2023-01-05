import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
width: 1000px; 
display: flex;
`;

const TitleBox = styled.div`
height: 40px; 
display: flex;
`
const StyledTitle = styled.div`
width: 100%;
`; 

function Title(props: any) {
  return (
    // <TitleContainer>
    //     <TitleBox>
    <div>
        <StyledTitle>Recent Cars for Sale</StyledTitle>
        </div>
    //     </TitleBox>
    // </TitleContainer>
  );
}

export default Title;
