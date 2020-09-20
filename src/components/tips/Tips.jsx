import React, { useEffect, useState } from "react";
import "./Tips.css";

const Tips = () => {
  const [showTips, setShowTips] = useState(true);
  const [checboxChecked, setChecboxChecked] = useState(false);

  const onChangeCheckbox = () => {
    setChecboxChecked((prevChecboxChecked) => {
      localStorage.setItem("sav-tips-show-again", prevChecboxChecked);
      return !prevChecboxChecked;
    });
  };

  const onClickCloseButton = () => {
    setShowTips(false);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 27) {
      // ESC KEY
      setShowTips(false);
    }
  };

  useEffect(() => {
    const showAgain = localStorage.getItem("sav-tips-show-again") === "false";
    setShowTips(!showAgain);

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    showTips && (
      <div className="tips" id="tips">
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
            <br />
            <br />
            Links:
            <br />-{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/MatiMatik97"
            >
              GitHub
            </a>
            <br />-{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/mateusz-kozak-9b75201a2"
            >
              LinkedIn
            </a>
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
