import { ICar, IMenuItem } from "./Types.d";

let cars: Array<ICar> = [
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
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
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
    img: "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    price: "£1,399,950",
    description:
      "The prominent sculpting of the side profile creates the customary Porsche waistline.",
    location: "London, UK",
    distance: "256,980 miles",
  },
  {
    title: "2022 Porsche Panamera Turbo",
    img: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    price: "£1,399,950",
    description:
      "The prominent sculpting of the side profile creates the customary Porsche waistline.",
    location: "London, UK",
    distance: "256,980 miles",
  },
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
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
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
    img: "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    price: "£1,399,950",
    description:
      "The prominent sculpting of the side profile creates the customary Porsche waistline.",
    location: "London, UK",
    distance: "256,980 miles",
  },
  {
    title: "2022 Porsche Panamera Turbo",
    img: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    price: "£1,399,950",
    description:
      "The prominent sculpting of the side profile creates the customary Porsche waistline.",
    location: "London, UK",
    distance: "256,980 miles",
  },
];

let menuItems: Array<IMenuItem> = [
  { name: "Garage", icon: "/assets/home_icon.svg" },
  { name: "Showroom", icon: "/assets/showroom_icon.svg" },
  { name: "Upcoming", icon: "/assets/upcoming_icon.svg" }
]

export {cars, menuItems};