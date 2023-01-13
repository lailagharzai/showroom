import React from "react";
import styled from "styled-components";
import Text from "../../atoms/text/Text";
import { ICar } from "../../../Types.d";
import Icon from "../../atoms/icons/Icon";

interface Props {
  car: ICar;
}

function Card(props: Props) {
  const CardContainer = styled.div`
    grid-column-end: span 4;
    background-color: white;
    cursor: pointer;
    transition: all 0.3s ease 0s;
  `;

  const CardImageContainer = styled.div`
    width: 100%;
    padding-top: 56.25%;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    @media only screen and (max-width: 500px) {
      width: 100%;
      height: 0;
      padding-top: calc(56.25% - 50px);
    }
  `;

  const PositionedTitleText = styled(Text)`
    margin-bottom: 8px;
  `;

  const PositionedHeader = styled.div`
    padding-top: 24px;
  `;

  const PositionedDescriptionText = styled.div`
    margin-top: 16px;
  `;

  const CardFooter = styled.div`
    margin-top: 16px;
    display: flex;
    align-self: end;
    align-items: center;
    width: 100%;
  `;

  const PositionedLocationIcon = styled.div`
    margin-right: 4px;
  `;
  const PositionedDistanceText = styled(Text)`
    margin-left: auto;
  `;

  return (
    <CardContainer>
      <CardImageContainer>
        <img src={props.car.img} />
      </CardImageContainer>
      <PositionedHeader>
        <PositionedTitleText primary={true} size={"MediumText"} text={props.car.title}/>
        <Text primary={false} size={"MediumText"} text={props.car.price} />
      </PositionedHeader>
      <PositionedDescriptionText>
        <Text primary={false} size={"SmallText"} text={props.car.description} />
      </PositionedDescriptionText>
      <CardFooter>
        <PositionedLocationIcon>
          <Icon small={true} type={"Location"} />
        </PositionedLocationIcon>
        <Text primary={false} size={"SmallText"} text={props.car.location} />
        <PositionedDistanceText primary={false} size={"SmallText"} text={props.car.distance}/>
      </CardFooter>
    </CardContainer>
  );
}

export default Card;
