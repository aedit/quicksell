import React from "react";
import UserIcon from "../UserAvatar";
import Icon from "../Icon";
import "./style.css";

const Ticket = ({ type, user, details }) => {
  return (
    <div className="ticket">
      <div className="ticket__header">
        <span>{details.id}</span>
        {type !== "userId" && <UserIcon userData={user} />}
      </div>
      <div className="ticket__mid">
        {type !== "status" && (
          <Icon name={`status-${details.status.toLowerCase()}`}></Icon>
        )}
        <div className="ticke__mid__title">{details.title}</div>
      </div>
      <div className="ticket__footer">
        {type !== "priority" && (
          <span className="ticket__priority">
            <Icon name={`priority-${details.priority}`} />
          </span>
        )}
        <span className="ticket__tag">{details.tag}</span>
      </div>
    </div>
  );
};

export default Ticket;
