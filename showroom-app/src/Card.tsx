import React from "react";
import "./Card.css";
import styled from "styled-components";

function Card(props: any) {
  const TextMedium = `
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    line-height: 20px;
    font-weight: 400;
  `;

  const TextPrimary = `
    color: black;
  `;

  const CardTitle = styled.p`
    margin-bottom: 8px;
    ${TextMedium}
    ${TextPrimary}
  `;

  return (
    <div className="card">
      <div className="card_image-container">
        <img src={props.car.img} />
      </div>
      <div className="card_header">
        <CardTitle>{props.car.title}</CardTitle>
        <p className="card_price text_medium text_secondary">
          {props.car.price}
        </p>
      </div>
      <div className="card_info">
        <p className="card_description text_small text_secondary">
          {props.car.description}
        </p>
      </div>
      <div className="card_footer">
        <img
          className="card_location_icon"
          src={process.env.PUBLIC_URL + "/assets/location_icon.svg"}
        />
        <p className="text_small text_secondary">{props.car.location}</p>
        <p className="card_distance text_small text_secondary">
          {props.car.distance}
        </p>
      </div>
    </div>
  );
}

export default Card;
