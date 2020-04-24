import React, { useContext, useState } from "react";
import "./Navbar.css";
import { BarsAmountContext } from "../../App";
import { IsSortingContext } from "../../App";
import { resizeHandler } from "../bars/Bars";
import NavbarDisplay from "./NavbarDisplay";

const Navbar = () => {
  const { barsAmount, setBarsAmount } = useContext(BarsAmountContext);
  const { isSorting, setIsSorting } = useContext(IsSortingContext);
  const [collapsed, setCollapsed] = useState(true);

  const sliderClassName = isSorting ? "slider-disabled" : "";
  const sortButtonClassName = isSorting ? "sort-button-disabled" : "";

  const onChangeSliderHandle = (e) => {
    if (!isSorting) {
      setBarsAmount(e.target.value);
      resizeHandler(barsAmount);
    }
  };

  const onClickSortButton = () => {
    if (!isSorting) {
      setIsSorting(true);
    }
  };

  const onClickMenuButton = () => {
    setCollapsed(!collapsed);
  };

  return (
    <NavbarDisplay
      barsAmount={barsAmount}
      isSorting={isSorting}
      collapsed={collapsed}
      onChangeSliderHandle={onChangeSliderHandle}
      onClickSortButton={onClickSortButton}
      sliderClassName={sliderClassName}
      sortButtonClassName={sortButtonClassName}
      onClickMenuButton={onClickMenuButton}
    />
  );
};

export default Navbar;
