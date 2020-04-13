import React, { useState, useContext } from "react";
import "./Navbar.css";
import { BarsAmountContext } from "../../App";
import { IsSortingContext } from "../../App";
import { resizeHandler } from "../bars/Bars";

const Navbar = () => {
  const { barsAmount, setBarsAmount } = useContext(BarsAmountContext);
  const { isSorting } = useContext(IsSortingContext);

  return (
    <div className="navbar">
      <h2>Sorting Algorithms Visualizer</h2>
      <div className="navbar-elements">
        <input
          type="range"
          min="5"
          max="40"
          value={barsAmount}
          className="slider"
          id="slider"
          disabled={isSorting}
          onChange={(e) => {
            setBarsAmount(e.target.value);
            resizeHandler(barsAmount);
          }}
        />
        <button className="sort-button" onClick={() => console.log("SORT")}>
          Sort
        </button>
      </div>
    </div>
  );
};

export default Navbar;
