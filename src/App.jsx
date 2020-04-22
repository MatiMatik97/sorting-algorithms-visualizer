import React, { createContext, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";

export const BarsAmountContext = createContext();
export const IsSortingContext = createContext();

const App = () => {
  const [barsAmount, setBarsAmount] = useState(5);
  const [isSorting, setIsSorting] = useState(false);

  return (
    <BarsAmountContext.Provider value={{ barsAmount, setBarsAmount }}>
      <IsSortingContext.Provider value={{ isSorting, setIsSorting }}>
        <div className="app">
          <Navbar />
          <Main />
        </div>
      </IsSortingContext.Provider>
    </BarsAmountContext.Provider>
  );
};

export default App;
