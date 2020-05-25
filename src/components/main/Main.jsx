import React from "react";
import "./Main.css";
import Bars from "../bars/Bars";

const Main = ({ state, dispatch }) => {
  return (
    <div className="main">
      <Bars state={state} dispatch={dispatch} />
    </div>
  );
};

export default Main;
