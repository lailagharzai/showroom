import {IIcons, IconType} from "../../../Types.d";
import styled from "styled-components";

let Icons: Array<IIcons> = [
  {name: "Garage", icon: "/assets/garage_icon.svg"},
  {name: "Showroom", icon: "/assets/showroom_icon.svg"},
  {name: "Upcoming", icon: "/assets/upcoming_icon.svg"},
  {name: "Menu", icon: "/assets/menu_icon.svg"},
  {name: "Location", icon: "/assets/location_icon.svg"},
];

interface Props {
  className?: string;
  type: IconType;
  small?: boolean;
}

function Icon(props: Props) {

  let StyledIcon;

  if (props.small) {
    StyledIcon = styled.img`
      width: 16px;
      height: 16px;
    `;
  } else {
    StyledIcon = styled.img`
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
  }

  let iconPath = "";
  Icons.forEach((item) => {
    if (item.name == props.type) {
      iconPath = item.icon;
    }
  });
  return <StyledIcon className={props.className} src={process.env.PUBLIC_URL + iconPath}/>
}

export default Icon;

