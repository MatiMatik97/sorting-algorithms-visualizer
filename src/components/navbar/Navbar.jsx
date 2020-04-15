import React, { useContext } from "react";
import "./Navbar.css";
import { BarsAmountContext } from "../../App";
import { IsSortingContext } from "../../App";
import { resizeHandler } from "../bars/Bars";

const Navbar = () => {
  const { barsAmount, setBarsAmount } = useContext(BarsAmountContext);
  const { isSorting, setIsSorting } = useContext(IsSortingContext);

  const sliderClassName = isSorting ? "slider-disabled" : "";
  const sortButtonClassName = isSorting ? "sort-button-disabled" : "";

  return (
    <div className="navbar">
      <h2>Sorting Algorithms Visualizer</h2>
      <div className="navbar-elements">
        <input
          type="range"
          min="5"
          max="40"
          value={barsAmount}
          className={`slider ${sliderClassName}`}
          disabled={isSorting}
          onChange={(e) => {
            if (!isSorting) {
              setBarsAmount(e.target.value);
              resizeHandler(barsAmount);
            }
          }}
        />
        <button
          className={`sort-button ${sortButtonClassName}`}
          onClick={() => {
            if (!isSorting) {
              setIsSorting(true);
            }
          }}
        >
          Sort
        </button>
      </div>
    </div>
  );
};

export default Navbar;
