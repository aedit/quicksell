import React from "react";
import "./style.css";

const colors = ["#a3b456", "#34c50f", "#ff45c6", "#2345c6", "#23ccbf"];

const UserIcon = ({ userData }) => {
  const userInitials = userData.name
    .split(" ")
    .map((el) => el.substring(0, 1))
    .join("")
    .toUpperCase();

  const color = colors[(userData.name.length - 1) % colors.length];

  return (
    <span className="user-avatar" style={{ backgroundColor: color }}>
      <span>{userInitials}</span>
      <span
        className="user-avatar__available"
        style={{ backgroundColor: userData.available ? "#01B345" : "#BEC2C8" }}
      ></span>
    </span>
  );
};

export default UserIcon;
