import React from "react";

const NavbarDisplay = ({
  barsAmount,
  isSorting,
  collapsed,
  onChangeSliderHandle,
  onClickMenuButton,
  onClickChooseAlgorithm,
  onClickSortButton,
}) => {
  const sliderClassName = isSorting ? "slider-disabled" : "";
  const menuCollapseClass = collapsed ? `collapsed` : ``;
  const arrowCollapseClass = collapsed ? `arrow-collapsed` : ``;
  const sortButtonClassName = isSorting ? "sort-button-disabled" : "";
  const menuClassName = isSorting ? "menu-disabled" : "";

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
          <button
            className={`menu-button ${menuClassName}`}
            onClick={() => onClickMenuButton()}
          >
            Algorithm{" "}
            <svg
              className={`menu-arrow-icon ${arrowCollapseClass}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
            </svg>
          </button>
          <ul className={`menu-list ${menuCollapseClass}`}>
            <li
              className="list-item"
              onClick={() => onClickChooseAlgorithm("BubbleSort")}
            >
              BubbleSort
            </li>
            <li
              className="list-item"
              onClick={() => onClickChooseAlgorithm("QuickSort")}
            >
              QuickSort
            </li>
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
