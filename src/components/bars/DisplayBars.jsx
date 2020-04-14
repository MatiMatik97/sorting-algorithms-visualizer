import React from "react";

const DisplayBars = ({ bars }) => {
  return (
    <div className="bars">
      {bars.map((bar) => {
        const barStyles = {
          height: `${bar.size}px`,
        };

        return (
          <div className="bar" key={bar.id}>
            <div
              className={`display-bar bar-${bar.id}`}
              style={barStyles}
            ></div>
            <span className={`display-size text-${bar.id}`}>{bar.size}</span>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayBars;
