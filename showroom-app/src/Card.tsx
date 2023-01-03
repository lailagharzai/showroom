import React from "react";
// import "./Card.css";
import styled from "styled-components";
import {
  TextMedium,
  TextPrimary,
  TextSecondary,
  TextSmall,
} from "./TextStyles";

function Card(props: any) {
  const CardContainer = styled.div`
    grid-column-end: span 4;
    display: flex;
    flex-direction: column;
    background-color: white;
    cursor: pointer;
    transition: all 0.3s ease 0s;
  `;

  const CardImageContainer = styled.div`
    width: 100%;
    padding-top: 56.25%;
    overflow: hidden;
    position: relative;
  `;

  const CardImage = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  `

  const CardTitle = styled.p`
    margin-bottom: 8px;
    ${TextMedium}
    ${TextPrimary}
  `;

  const CardHeader = styled.div`
    padding-top: 24px;
  `;

  const CardPrice = styled.p`
    ${TextMedium}
    ${TextSecondary}
  `;
  const CardInfo = styled.div`
    margin-top: 16px;
  `;
  const CardDescription = styled.p`
    ${TextSmall}
    ${TextSecondary}
  `;
  const CardFooter = styled.div`
    margin-top: 16px;
    display: flex;
    align-self: end;
    align-items: center;
    width: 100%;
  `;

  const CardLocationIcon = styled.div`
    margin-right: 4px;
  `;

  const CardLocation = styled.p`
  ${TextSmall}
  ${TextSecondary}
  `
  const CardDistance = styled.p`
  ${TextSmall}
  ${TextSecondary}
  `


  return (
    <CardContainer>
      <CardImageContainer>
        <CardImage src={props.car.img} />
      </CardImageContainer>
      <CardHeader>
        <CardTitle>{props.car.title}</CardTitle>
        <CardPrice>{props.car.price}</CardPrice>
      </CardHeader>
      <CardInfo>
        <CardDescription>{props.car.description}</CardDescription>
      </CardInfo>
      <CardFooter>
        <CardLocationIcon>
          <img src={process.env.PUBLIC_URL + "/assets/location_icon.svg"} />
        </CardLocationIcon>
        <CardLocation>{props.car.location}</CardLocation>
        <CardDistance>{props.car.distance}</CardDistance>
      </CardFooter>
    </CardContainer>
  );
}

export default Card;
