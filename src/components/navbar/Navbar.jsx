import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import {
  BarsAmountContext,
  IsSortingContext,
  CurrentAlgorithmContext,
} from "../../App";
import { resizeHandler } from "../bars/Bars";
import NavbarDisplay from "./NavbarDisplay";

const Navbar = () => {
  const { barsAmount, setBarsAmount } = useContext(BarsAmountContext);
  const { isSorting, setIsSorting } = useContext(IsSortingContext);
  const { currentAlgorithm, setCurrentAlgorithm } = useContext(
    CurrentAlgorithmContext
  );
  const [collapsed, setCollapsed] = useState(true);

  const onChangeSliderHandle = (e) => {
    if (!isSorting) {
      setBarsAmount(e.target.value);
      resizeHandler(barsAmount);
      setCollapsed(true);
    }
  };

  const onClickSortButton = () => {
    if (!isSorting && currentAlgorithm) {
      setIsSorting(true);
      setCollapsed(true);
    }
  };

  const onClickMenuButton = () => {
    if (!isSorting) {
      setCollapsed(!collapsed);
    }
  };

  const onClickChooseAlgorithm = (algorithm) => {
    if (!isSorting) {
      setCurrentAlgorithm(algorithm);
      
      const sortButtonEl = document.querySelector(".sort-button");
      sortButtonEl.classList.remove("sort-button-disabled");
      sortButtonEl.innerHTML = `Sort ${algorithm}`;
    }
  };

  useEffect(() => {
    const sortButtonEl = document.querySelector(".sort-button");
    sortButtonEl.classList.add("sort-button-disabled");
  }, []);

  return (
    <NavbarDisplay
      barsAmount={barsAmount}
      isSorting={isSorting}
      collapsed={collapsed}
      onChangeSliderHandle={onChangeSliderHandle}
      onClickMenuButton={onClickMenuButton}
      onClickChooseAlgorithm={onClickChooseAlgorithm}
      onClickSortButton={onClickSortButton}
    />
  );
};

export default Navbar;
