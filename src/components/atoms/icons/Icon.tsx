import { IIcons, IconType } from "../../../Types.d";

let Icons: Array<IIcons> = [
  { name: "Garage", icon: "/assets/garage_icon.svg" },
  { name: "Showroom", icon: "/assets/showroom_icon.svg" },
  { name: "Upcoming", icon: "/assets/upcoming_icon.svg" },
  { name: "Menu", icon: "/assets/menu_icon.svg" },
];

interface Props {
  type: IconType;
}

function Icon(props: Props) {
  let iconPath = "";
  Icons.forEach((item) => {
    if (item.name == props.type) {
      iconPath = item.icon;
    }
  });
  return <img src={process.env.PUBLIC_URL + iconPath} />;
}

export default Icon;
