import React from "react";

const NavbarDisplay = ({
  barsAmount,
  stepTime,
  isSorting,
  collapsed,
  currentAlgorithm,
  sortingOrder,
  onChangeBarsAmountSlider,
  onChangeStepTimeSlider,
  onClickMenuButton,
  onClickChooseAlgorithm,
  onClickChooseOrder,
  onClickSortButton,
}) => {
  const sliderClassName = isSorting ? "slider-disabled" : "";
  const menuCollapseClass = collapsed ? `collapsed` : ``;
  const menuClassName = isSorting ? "menu-disabled" : "";
  const arrowCollapseClass = collapsed ? `arrow-collapsed` : ``;
  const orderPickButtonClassName = isSorting
    ? "order-pick-button-disabled"
    : "";
  const sortButtonClassName = isSorting ? "sort-button-disabled" : "";

  return (
    <div className="navbar">
      <h2>Sorting Algorithms Visualizer</h2>
      {/* --------- RESIZE ARRAY --------- */}
      <div className="navbar-elements">
        <div className="navbar-element">
          <span className="navbar-element-text">Bars amount</span>
          <input
            type="range"
            min="5"
            max="40"
            value={barsAmount}
            className={`slider ${sliderClassName}`}
            disabled={isSorting}
            onChange={(e) => onChangeBarsAmountSlider(e)}
          />
        </div>
        {/* --------- CHANGE STEP TIME --------- */}
        <div className="navbar-element">
          <span className="navbar-element-text">Sorting time</span>
          <input
            type="range"
            min="1000"
            max="5000"
            value={stepTime}
            className={`slider ${sliderClassName}`}
            disabled={isSorting}
            onChange={(e) => onChangeStepTimeSlider(e)}
          />
        </div>
        {/* --------- ALGORITHM PICK --------- */}
        <div className="navbar-element">
          <span className="navbar-element-text">Sorting algorithm</span>
          <div className="navbar-menu">
            <button
              className={`menu-button ${menuClassName}`}
              onClick={() => onClickMenuButton()}
            >
              {`${currentAlgorithm === "" ? "Choose" : currentAlgorithm} `}
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
                className={`list-item
                ${currentAlgorithm === "BubbleSort" ? "list-item-active" : ""}`}
                onClick={() => onClickChooseAlgorithm("BubbleSort")}
              >
                BubbleSort
              </li>
              <li
                className={`list-item
                ${currentAlgorithm === "QuickSort" ? "list-item-active" : ""}`}
                onClick={() => onClickChooseAlgorithm("QuickSort")}
              >
                QuickSort
              </li>
              <li
                className={`list-item
                ${currentAlgorithm === "MergeSort" ? "list-item-active" : ""}`}
                onClick={() => onClickChooseAlgorithm("MergeSort")}
              >
                MergeSort
              </li>
              <li
                className={`list-item
                ${currentAlgorithm === "HeapSort" ? "list-item-active" : ""}`}
                onClick={() => onClickChooseAlgorithm("HeapSort")}
              >
                HeapSort
              </li>
            </ul>
          </div>
        </div>
        {/* --------- ORDER PICK --------- */}
        <div className="navbar-element">
          <span className="navbar-element-text">Sorting order</span>
          <div className="navbar-order-pick">
            <button
              className={`order-pick-button order-pick-asc ${orderPickButtonClassName}
              ${sortingOrder === "ASC" ? "order-pick-button-active" : ""} `}
              onClick={() => onClickChooseOrder("ASC")}
            >
              Ascending
            </button>
            <button
              className={`order-pick-button order-pick-desc 
              ${orderPickButtonClassName}
              ${sortingOrder === "DESC" ? "order-pick-button-active" : ""} `}
              onClick={() => onClickChooseOrder("DESC")}
            >
              Descending
            </button>
          </div>
        </div>
        {/* --------- SORT BUTTON --------- */}
        <div className="navbar-element">
          <button
            className={`sort-button ${sortButtonClassName}`}
            onClick={() => onClickSortButton()}
          >
            Sort
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarDisplay;
