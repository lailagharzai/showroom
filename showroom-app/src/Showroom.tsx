import React from "react";
import Menu from "./Menu";
// import "./Showroom.css";
import Card from "./Card";
import styled from "styled-components";

let cars = [
  {
    title: "2022 Porsche Panamera Turbo",
    img: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    price: "£1,399,950",
    description:
      "The prominent sculpting of the side profile creates the customary Porsche waistline.",
    location: "London, UK",
    distance: "256,980 miles",
  },
  {
    title: "2022 Porsche Panamera Turbo",
    img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    price: "£1,399,950",
    description:
      "The prominent sculpting of the side profile creates the customary Porsche waistline.",
    location: "London, UK",
    distance: "256,980 miles",
  },
  {
    title: "2022 Porsche Panamera Turbo",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    price: "£1,399,950",
    description:
      "The prominent sculpting of the side profile creates the customary Porsche waistline.",
    location: "London, UK",
    distance: "256,980 miles",
  },
  {
    title: "2022 Porsche Panamera Turbo",
    img: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=904&q=80",
    price: "£1,399,950",
    description:
      "The prominent sculpting of the side profile creates the customary Porsche waistline.",
    location: "London, UK",
    distance: "256,980 miles",
  },
  {
    title: "2022 Porsche Panamera Turbo",
    img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    price: "£1,399,950",
    description:
      "The prominent sculpting of the side profile creates the customary Porsche waistline.",
    location: "London, UK",
    distance: "256,980 miles",
  },
  {
    title: "2022 Porsche Panamera Turbo",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    price: "£1,399,950",
    description:
      "The prominent sculpting of the side profile creates the customary Porsche waistline.",
    location: "London, UK",
    distance: "256,980 miles",
  },
  {
    title: "2022 Porsche Panamera Turbo",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
    price: "£1,399,950",
    description:
      "The prominent sculpting of the side profile creates the customary Porsche waistline.",
    location: "London, UK",
    distance: "256,980 miles",
  },
  {
    title: "2022 Porsche Panamera Turbo",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
    price: "£1,399,950",
    description:
      "The prominent sculpting of the side profile creates the customary Porsche waistline.",
    location: "London, UK",
    distance: "256,980 miles",
  },
  {
    title: "2022 Porsche Panamera Turbo",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
    price: "£1,399,950",
    description:
      "The prominent sculpting of the side profile creates the customary Porsche waistline.",
    location: "London, UK",
    distance: "256,980 miles",
  },
];

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 60px)) 1fr;
  grid-gap: 40px;

  @media only screen and (max-width: 700px) {
     {
      grid-gap: 20px;
    }
  }

  @media only screen and (max-width: 500px) {
     {
      grid-template-columns: 10px repeat(6, 1fr) 10px;
      grid-gap: 20px;
      min-width: calc(100% - 50px);
    }
  }
`;

const Cards = styled.div`
  grid-column: 2 / span 12;
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 60px));
  grid-gap: 40px;
  padding: 60px 0;
  margin-left: 50px;

  @media only screen and (max-width: 500px) {
     {
      grid-column: 2 / span 6;
      grid-template-columns: repeat(6, 1fr);
      grid-gap: 20px;
      margin-left: 50px;
    }
  }
`;

function Showroom() {
  return (
    <Main>
      <Menu />
      <Cards>
        {cars.map((car, index) => (
          <Card car={car} />
        ))}
      </Cards>
    </Main>
  );
}

export default Showroom;
