import React, { useReducer } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";

const App = () => {
  const initialState = {
    barsAmount: 10,
    isSorting: false,
    currentAlgorithm: "",
    sortingOrder: "DESC",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_BARS_AMOUNT":
        return {
          ...state,
          barsAmount: action.payload,
        };
      case "UPDATE_IS_SORTING":
        return {
          ...state,
          isSorting: action.payload,
        };
      case "UPDATE_CURRENT_ALGORITHM":
        return {
          ...state,
          currentAlgorithm: action.payload,
        };
      case "UPDATE_SORTING_ORDER":
        return {
          ...state,
          sortingOrder: action.payload,
        };
      default:
        return initialState;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app">
      <Navbar state={state} dispatch={dispatch} />
      <Main state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
