import React from "react";
import "./Menu.css";
import MenuItem from "./MenuItem";

function Menu(props: any) {
  return (
    <div className="menu">
      <div className="menu_navigation">
        <div className="menu_icon">
          <img src={process.env.PUBLIC_URL + "/assets/menu_icon.svg"} />
        </div>
        <div className="menu_custodian_icon">
          <img src={process.env.PUBLIC_URL + "/assets/custodian_icon.svg"} />
        </div>
      </div>
      <div className="menu_items text_menu">
        <MenuItem name="Garage" icon="/assets/home_icon.svg"/>
        <MenuItem name="Showroom" icon="/assets/showroom_icon.svg"/>
        <MenuItem name="Upcoming" icon="/assets/upcoming_icon.svg"/>
        {/* <div className="menu_item">
          <div className="menu_icon">
            <img src={process.env.PUBLIC_URL + "/assets/home_icon.svg"} />
          </div>
          <div className="menu_name">Garage</div>
        </div> */}
        {/* <div className="menu_item">
          <div className="menu_icon">
            <img src={process.env.PUBLIC_URL + "/assets/showroom_icon.svg"} />
          </div>
          <div className="menu_name">Showroom</div>
        </div>

        <div className="menu_item">
          <div className="menu_icon">
            <img src={process.env.PUBLIC_URL + "/assets/upcoming_icon.svg"} />{" "}
          </div>
          <div className="menu_name">Upcoming</div>
        </div> */}
      </div>
    </div>
  );
}

export default Menu;
