interface ICar {
  title: string;
  img: string;
  price: string;
  description: string;
  location: string;
  distance: string;
}

type IconType = "Garage" | "Location" | "Menu" | "Showroom" | "Upcoming";

type TextSize = "SmallText" | "MediumText" | "LargeText" | "MenuText";

interface IIcons {
  name: IconType;
  icon: string;
}

export type { ICar, IIcons, IconType, TextSize };
