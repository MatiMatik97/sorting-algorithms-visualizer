import React, { createContext, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";

export const BarsAmountContext = createContext();
export const IsSortingContext = createContext();
export const CurrentAlgorithmContext = createContext();

const App = () => {
  const [barsAmount, setBarsAmount] = useState(10);
  const [isSorting, setIsSorting] = useState(false);
  const [currentAlgorithm, setCurrentAlgorithm] = useState("");

  return (
    <BarsAmountContext.Provider value={{ barsAmount, setBarsAmount }}>
      <IsSortingContext.Provider value={{ isSorting, setIsSorting }}>
        <CurrentAlgorithmContext.Provider
          value={{ currentAlgorithm, setCurrentAlgorithm }}
        >
          <div className="app">
            <Navbar />
            <Main />
          </div>
        </CurrentAlgorithmContext.Provider>
      </IsSortingContext.Provider>
    </BarsAmountContext.Provider>
  );
};

export default App;
