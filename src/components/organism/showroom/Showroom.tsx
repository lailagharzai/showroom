import React from "react";
import Card from "../../molecules/card/Card";
import styled from "styled-components";
import {ICar} from "../../../Types.d";

const Grid = styled.div`
  grid-column: 2 / span 12;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 40px;
  padding: 32px 0;
  
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(8, 1fr);
  }
  
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(4, 1fr);
  }

`;

interface Params {
  items: ICar[]
}

function Showroom(props: Params) {
  return (
    <Grid>
      {props.items.map((car, index) => (
        <Card car={car}/>
      ))}
    </Grid>
  );
}

export default Showroom;