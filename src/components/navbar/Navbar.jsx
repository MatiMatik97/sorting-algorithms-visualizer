import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import { StateContext } from "../../App";
import { resizeHandler } from "../bars/Bars";
import NavbarDisplay from "./NavbarDisplay";

const Navbar = () => {
  const {
    state: { barsAmount, isSorting, currentAlgorithm, sortingOrder },
    dispatch,
  } = useContext(StateContext);
  const [collapsed, setCollapsed] = useState(true);

  const onChangeSliderHandle = (e) => {
    if (!isSorting) {
      dispatch({ type: "UPDATE_BARS_AMOUNT", payload: e.target.value });
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
      dispatch({
        type: "UPDATE_CURRENT_ALGORITHM",
        payload: algorithm,
      });
      setCollapsed(true);

      const sortButtonEl = document.querySelector(".sort-button");
      sortButtonEl.classList.remove("sort-button-disabled");
      sortButtonEl.innerHTML = `Sort ${algorithm}-${
        sortingOrder === "DESC" ? "Descending" : "Ascending"
      }`;

      const orderPickButtonEls = [
        ...document.querySelectorAll(".order-pick-button"),
      ];
      orderPickButtonEls[0].classList.remove("order-pick-button-disabled");
      orderPickButtonEls[1].classList.remove("order-pick-button-disabled");
    }
  };

  const onClickChooseOrder = (order) => {
    if (!isSorting && currentAlgorithm) {
      dispatch({ type: "UPDATE_SORTING_ORDER", payload: order });

      const sortButtonEl = document.querySelector(".sort-button");
      sortButtonEl.innerHTML = `Sort ${currentAlgorithm}-${
        order === "DESC" ? "Descending" : "Ascending"
      }`;
    }
  };

  const onClickSortButton = () => {
    if (!isSorting && currentAlgorithm) {
      dispatch({ type: "UPDATE_IS_SORTING", payload: true });
      setCollapsed(true);
    }
  };

  useEffect(() => {
    const sortButtonEl = document.querySelector(".sort-button");
    sortButtonEl.classList.add("sort-button-disabled");

    const orderPickButtonEls = [
      ...document.querySelectorAll(".order-pick-button"),
    ];
    orderPickButtonEls[0].classList.add("order-pick-button-disabled");
    orderPickButtonEls[1].classList.add("order-pick-button-disabled");
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
