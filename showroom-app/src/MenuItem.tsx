import React from "react";
import "./MenuItem.css";

function MenuItem(props: any) {
  return (
    <div className="menu_item">
      <div className="menu_icon">
        <img src={process.env.PUBLIC_URL + props.icon} />
      </div>
      <div className="menu_name">{props.name}</div>
    </div>
  );
}

export default MenuItem;
