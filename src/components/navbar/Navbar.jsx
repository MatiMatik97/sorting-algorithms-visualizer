import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import {
  BarsAmountContext,
  IsSortingContext,
  CurrentAlgorithmContext,
  SortingOrderContext,
} from "../../App";
import { resizeHandler } from "../bars/Bars";
import NavbarDisplay from "./NavbarDisplay";

const Navbar = () => {
  const { barsAmount, setBarsAmount } = useContext(BarsAmountContext);
  const { isSorting, setIsSorting } = useContext(IsSortingContext);
  const { currentAlgorithm, setCurrentAlgorithm } = useContext(
    CurrentAlgorithmContext
  );
  const { sortingOrder, setSortingOrder } = useContext(SortingOrderContext);
  const [collapsed, setCollapsed] = useState(true);

  const onChangeSliderHandle = (e) => {
    if (!isSorting) {
      setBarsAmount(e.target.value);
      resizeHandler(barsAmount);
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
      setCollapsed(true);

      const sortButtonEl = document.querySelector(".sort-button");
      sortButtonEl.classList.remove("sort-button-disabled");
      sortButtonEl.innerHTML = `Sort ${algorithm}-${
        sortingOrder === "DESC" ? "Descending" : "Ascending"
      }`;
    }
  };

  const onClickChooseOrder = (order) => {
    if (!isSorting && currentAlgorithm) {
      setSortingOrder(order);

      const sortButtonEl = document.querySelector(".sort-button");
      sortButtonEl.innerHTML = `Sort ${currentAlgorithm}-${
        order === "DESC" ? "Descending" : "Ascending"
      }`;
    }
  };

  const onClickSortButton = () => {
    if (!isSorting && currentAlgorithm) {
      setIsSorting(true);
      setCollapsed(true);
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
      onClickChooseOrder={onClickChooseOrder}
      onClickSortButton={onClickSortButton}
    />
  );
};

export default Navbar;
