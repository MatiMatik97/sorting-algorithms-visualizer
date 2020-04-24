import React from "react";

const NavbarDisplay = ({
  barsAmount,
  isSorting,
  collapsed,
  onChangeSliderHandle,
  onClickSortButton,
  sliderClassName,
  sortButtonClassName,
  onClickMenuButton,
}) => {
  const menuCollapseClass = collapsed ? `collapsed` : ``;

  return (
    <div className="navbar">
      <h2>Sorting Algorithms Visualizer</h2>
      {/* --------- SLIDER --------- */}
      <div className="navbar-elements">
        <input
          type="range"
          min="5"
          max="40"
          value={barsAmount}
          className={`slider ${sliderClassName}`}
          disabled={isSorting}
          onChange={(e) => onChangeSliderHandle(e)}
        />
        {/* --------- MENU --------- */}
        <div className="navbar-menu">
          <button className="menu-button" onClick={() => onClickMenuButton()}>
            Algorithm
          </button>
          <ul className={`menu-list ${menuCollapseClass}`}>
            <li className="list-item">BubbleSort</li>
            <li className="list-item">QuickSort</li>
          </ul>
        </div>
        {/* --------- BUTTON --------- */}
        <button
          className={`sort-button ${sortButtonClassName}`}
          onClick={() => onClickSortButton()}
        >
          Sort
        </button>
      </div>
    </div>
  );
};

export default NavbarDisplay;
