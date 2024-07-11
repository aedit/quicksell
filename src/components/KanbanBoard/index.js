import React from "react";
import Icon from "../Icon";
import UserIcon from "../UserAvatar";
import Ticket from "../Ticket";
import "./style.css";

const KanbanBoard = ({ dataToShow, headers, type, usersData }) => {
  const findUser = (id) => {
    return usersData.find((el) => el.id === id);
  };

  return (
    <main className="kanban-board">
      {headers.map(({ id, name, icon }) => (
        <div key={id} className="kanban-board__column">
          <div className="kanban-header">
            <div className="kanban-header__main">
              {type === "userId" ? (
                <UserIcon userData={findUser(id)} />
              ) : (
                <Icon name={`${type}-${(icon || id).toLowerCase()}`} />
              )}
              <span className="kanban-header__main__title">{name}</span>
              <span className="kanban-header__main__count">
                {dataToShow[id]?.length || 0}
              </span>
            </div>
            <div className="kanban-header__main__actions">
              <Icon name="add" />
              <Icon name="menu" />
            </div>
          </div>
          <div className="kanban-board__area">
            {(dataToShow[id] || []).map((details) => (
              <Ticket
                key={details.id}
                details={details}
                user={findUser(details.userId)}
                type={type}
              />
            ))}
          </div>
        </div>
      ))}
    </main>
  );
};

export default KanbanBoard;
