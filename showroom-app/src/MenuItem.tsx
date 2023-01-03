import React from "react";
import "./MenuItem.css";


function MenuItem(props: any) {
  return (
    <div className="menu_item">
      <div className="menu_icon">
        <img src={process.env.PUBLIC_URL + "/assets/home_icon.svg"} />
      </div>
      <div className="menu_name">Garage</div>
    </div>
  );
}

export default MenuItem;
