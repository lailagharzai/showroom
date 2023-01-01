import React from "react";
import { createAdd } from "typescript";
import "./Showroom.css";

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

function Showroom() {
  return (
    <div className="main">
      <div className="cards">
        {cars.map((car, index) => (
          <div className="card">
            <div className="card_image-container">
              <img src={car.img} />
            </div>
            <div className="card_header">
              <p className="card_title text_medium text_primary">{car.title}</p>
              <p className="card_price text_medium text_secondary">{car.price}</p>
            </div>
            <div className="card_info">
              <p className="card_description text_small text_secondary">{car.description}</p>
            </div>
            <div className="card_footer">
              <p className="text_small text_secondary">{car.location}</p>
              <p className="card_distance text_small text_secondary">{car.distance}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Showroom;
