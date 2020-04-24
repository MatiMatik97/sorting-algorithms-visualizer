import React, { useEffect, useState, useCallback, useContext } from "react";
import "./Bars.css";
import DisplayBars from "./DisplayBars";
import { BarsAmountContext } from "../../App";
import { IsSortingContext } from "../../App";
import BubbleSort from "../../algorithms/BubbleSort";

export const resizeHandler = (barsAmount) => {
  const windowWidth = window.innerWidth;
  let barWidth = Math.floor(windowWidth / barsAmount - 2);
  if (barWidth > 20) {
    barWidth = 20;
  }

  const barElements = [...document.querySelectorAll(".display-bar")];
  barElements.map((bar) => {
    bar.style.width = `${barWidth}px`;
    return bar;
  });

  const maxWidth = 22 * barsAmount + 60;
  const textElements = [...document.querySelectorAll(".display-size")];
  textElements.map((text) => {
    if (maxWidth > windowWidth) {
      text.style.display = "none";
    } else {
      text.style.display = "";
    }
    return text;
  });
};

const Bars = () => {
  const { barsAmount } = useContext(BarsAmountContext);
  const { isSorting, setIsSorting } = useContext(IsSortingContext);
  const [bars, setBars] = useState([]);

  const MIN_HEIGHT = 20;
  const MAX_HEIGHT = 400;

  const generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generateArray = (length) => {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push({
        id: i,
        size: generateNumber(MIN_HEIGHT, MAX_HEIGHT),
      });
    }
    setBars(arr);
  };

  const memoizedCallback = useCallback(() => {
    generateArray(barsAmount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [barsAmount]);

  useEffect(memoizedCallback, [memoizedCallback]);

  useEffect(() => resizeHandler(barsAmount));

  useEffect(() => {
    window.addEventListener("resize", () => resizeHandler(barsAmount));
    return () =>
      window.removeEventListener("resize", () => resizeHandler(barsAmount));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  useEffect(() => {
    if (isSorting) {
      const sortButtonEl = document.querySelector(".sort-button");
      sortButtonEl.innerHTML = "Sorting";

      let sortingTime = 0;
      sortingTime = BubbleSort.init(bars, setBars);

      setTimeout(() => {
        setIsSorting(false);
        sortButtonEl.innerHTML = "Sort";
      }, sortingTime);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSorting]);

  return <DisplayBars bars={bars} />;
};

export default Bars;
