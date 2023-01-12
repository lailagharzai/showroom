import { IIcons, IconType } from "../../../Types.d";
import styled from "styled-components";

let Icons: Array<IIcons> = [
  { name: "Garage", icon: "/assets/garage_icon.svg" },
  { name: "Showroom", icon: "/assets/showroom_icon.svg" },
  { name: "Upcoming", icon: "/assets/upcoming_icon.svg" },
  { name: "Menu", icon: "/assets/menu_icon.svg" },
];

interface Props {
  type: IconType;
}

const StyledIcon = styled.img`
  width: 24px;
  height: 24px;

  @media screen and (max-width: 1000px) {
    width: 20px;
    height: 20px;
  }

  @media screen and (max-width: 500px) {
    width: 18px;
    height: 18px;
  }
`;

function Icon(props: Props) {
  let iconPath = "";
  Icons.forEach((item) => {
    if (item.name == props.type) {
      iconPath = item.icon;
    }
  });
  return <StyledIcon src={process.env.PUBLIC_URL + iconPath}/>
}

export default Icon;
