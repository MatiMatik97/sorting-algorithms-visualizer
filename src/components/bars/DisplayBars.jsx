import React from "react";

const DisplayBars = ({ bars }) => {
  return (
    <div className="bars">
      {bars.map((bar) => {
        const barStyles = {
          height: `${bar.size}px`,
        };

        return (
          <div className={`bar bar-${bar.id}`} key={bar.id}>
            <div
              className={`display-bar display-bar-${bar.id}`}
              style={barStyles}
            ></div>
            <span className={`display-size display-size-${bar.id}`}>
              {bar.size}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayBars;
