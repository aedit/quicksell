import React, { useEffect, useRef, useState } from "react";
import Icon from "../Icon";
import "./style.css";

const Header = ({ groupBy, sortBy, onGroupingChange, onOrderingChange }) => {
  const controlBtn = useRef(null);
  const popupRef = useRef(null);
  const [isDisplayClicked, setIsDisplayClicked] = useState(false);

  useEffect(() => {
    const clickOutsideHandler = ({ target }) => {
      if (
        controlBtn?.current?.contains(target || {}) ||
        target === controlBtn?.current ||
        popupRef?.current?.contains(target || {})
      )
        return;
      setIsDisplayClicked(false);
    };
    window.addEventListener("click", clickOutsideHandler);
    return () => {
      window.removeEventListener("click", clickOutsideHandler);
    };
  });

  return (
    <header style={{ position: "relative" }}>
      <span
        ref={controlBtn}
        className="control-button"
        onClick={() => setIsDisplayClicked(!isDisplayClicked)}
      >
        <Icon name="display"></Icon>
        Display
        <Icon name="down"></Icon>
      </span>
      {isDisplayClicked && (
        <div ref={popupRef} className="options-popper">
          <div className="option">
            <span>Grouping</span>
            <select
              onChange={(e) => {
                onGroupingChange(e.target.value);
              }}
              value={groupBy}
            >
              <option value={"status"}>Status</option>
              <option value={"priority"}>Priority</option>
              <option value={"userId"}>Users</option>
            </select>
          </div>
          <div className="option">
            <span>Ordering</span>
            <select
              onChange={(e) => {
                onOrderingChange(e.target.value);
              }}
              value={sortBy}
            >
              <option value={"priority"}>Priority</option>
              <option value={"title"}>Title</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
