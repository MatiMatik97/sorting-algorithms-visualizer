import React, { useEffect, useState } from "react";
import "./Tips.css";

const Tips = () => {
  const [showTips, setShowTips] = useState(true);
  const [checboxChecked, setChecboxChecked] = useState(false);

  const onChangeCheckbox = () => {
    setChecboxChecked((prevChecboxChecked) => {
      localStorage.setItem("tips-show-again", prevChecboxChecked);
      return !prevChecboxChecked;
    });
  };

  useEffect(() => {
    const showAgain = Boolean(localStorage.getItem("tips-show-again"));
    setShowTips(!showAgain);
  }, []);

  const onClickCloseButton = () => {
    setShowTips(false);
  };

  return (
    showTips && (
      <div className="tips">
        <div className="tips__container">
          <h2>Sorting Algorithms Visualizer</h2>

          <p>
            This website was made by Mateusz Kozak and is meant to visualize
            some of the popular sorting algorithms. It is recommended to first
            actually lookup the specific algorithm, how it works before using
            this visualization tool, beacuse this is not a full defintion how an
            algorithm works but it's only visualization that can give some
            insights. It is possible that more algorithms will be added in the
            future.
          </p>

          <div className="tips__container__checkbox">
            <input
              onChange={onChangeCheckbox}
              checked={checboxChecked}
              type="checkbox"
              id="tipsShowAgain"
            />
            <label htmlFor="tipsShowAgain">Don't show again</label>
          </div>

          <button onClick={onClickCloseButton}>Close</button>
        </div>
      </div>
    )
  );
};

export default Tips;
