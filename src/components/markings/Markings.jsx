import React, { useState, useEffect } from "react";
import "./Markings.css";
import {
  BUBBLE_SORT_MARKINGS,
  QUICK_SORT_MARKINGS,
  MERGE_SORT_MARKINGS,
  HEAP_SORT_MARKINGS,
} from "../../helpers";

const Markings = ({ state: { currentAlgorithm } }) => {
  const [markings, setMarkings] = useState([]);

  useEffect(() => {
    if (currentAlgorithm === "BubbleSort") {
      setMarkings(BUBBLE_SORT_MARKINGS);
    } else if (currentAlgorithm === "QuickSort") {
      setMarkings(QUICK_SORT_MARKINGS);
    } else if (currentAlgorithm === "MergeSort") {
      setMarkings(MERGE_SORT_MARKINGS);
    } else if (currentAlgorithm === "HeapSort") {
      setMarkings(HEAP_SORT_MARKINGS);
    } else {
      setMarkings([]);
    }
  }, [currentAlgorithm]);

  return (
    markings.length > 0 && (
      <div className="markings">
        <h4 className="markings__title">Markings</h4>

        {markings.map((mark, index) => (
          <div className="markings__mark" key={index}>
            <div
              className="markings__mark__color"
              style={{ backgroundColor: mark.color }}
            ></div>
            <p className="markings__mark__title">{mark.title}</p>
          </div>
        ))}
      </div>
    )
  );
};

export default Markings;
