import React, { useEffect, useState } from "react";
import "./Main.css";

const Main = () => {
  const [arraySize, setArraySize] = useState(5);
  const [bars, setBars] = useState([]);

  useEffect(() => {
    const amount = Math.floor((window.innerWidth - 20) / 22);
    setArraySize(amount);

    const arr = [];
    for (let i = 0; i < arraySize; i++) {
      arr.push({ id: i + 1, size: generateNumber(20, 400) });
    }
    setBars(arr);
  }, [arraySize]);

  const generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  window.addEventListener("resize", () => {
    const amount = Math.floor((window.innerWidth - 20) / 22);
    setArraySize(amount);
  });

  return (
    <div className="main">
      <div className="bars">
        {bars.map(bar => {
          // console.log(bar);
          const barStyles = {
            height: `${bar.size}px`
          };

          return (
            <div className="bar" key={bar.id}>
              <div className="display-bar" style={barStyles}></div>
              <span className="display-size">{bar.size}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
