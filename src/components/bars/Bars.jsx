import React, { useEffect, useState, useCallback } from "react";
import "./Bars.css";
import DisplayBars from "./DisplayBars";
import BubbleSort from "../../algorithms/BubbleSort";
import QuickSort from "../../algorithms/QuickSort";
import MergeSort from "../../algorithms/MergeSort";

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

const Bars = ({
  state: { barsAmount, stepTime, isSorting, currentAlgorithm, sortingOrder },
  dispatch,
}) => {
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
  }, [barsAmount, currentAlgorithm]);

  useEffect(memoizedCallback, [memoizedCallback]);

  useEffect(() => resizeHandler(barsAmount));

  useEffect(() => {
    window.addEventListener("resize", () => resizeHandler(barsAmount));
    return () =>
      window.removeEventListener("resize", () => resizeHandler(barsAmount));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  useEffect(() => {
    if (isSorting && currentAlgorithm) {
      const sortButtonEl = document.querySelector(".sort-button");
      sortButtonEl.innerHTML = `Sorting ${currentAlgorithm}-${
        sortingOrder === "DESC" ? "Descending" : "Ascending"
      }`;
      dispatch({ type: "UPDATE_IS_SORTING", payload: true });

      let sortingTime = 0;
      switch (currentAlgorithm) {
        case "BubbleSort":
          sortingTime = BubbleSort.init(bars, setBars, stepTime, sortingOrder);
          break;
        case "QuickSort":
          sortingTime = QuickSort.init(bars, setBars, stepTime, sortingOrder);
          break;
        case "MergeSort":
          sortingTime = MergeSort.init(bars, stepTime, sortingOrder);
          break;
        default:
          return;
      }

      setTimeout(() => {
        sortButtonEl.innerHTML = `Sort ${currentAlgorithm}-${
          sortingOrder === "DESC" ? "Descending" : "Ascending"
        }`;
        dispatch({ type: "UPDATE_IS_SORTING", payload: false });
      }, sortingTime);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSorting, currentAlgorithm]);

  // choose mergesort algorithm on page load
  useEffect(() => [...document.querySelectorAll(".list-item")][2].click(), []);

  return <DisplayBars bars={bars} />;
};

export default Bars;
