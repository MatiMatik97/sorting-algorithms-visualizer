import { BARS_BASIC_BG_COLOR, BARS_DONE_BG_COLOR } from './colors';
import { STEP_TIME, DONE_TIME } from './times';

export const swapInArray = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

export const finishAnimations = (setBars, barsCopy, animations) => {
    setTimeout(() => {
        const displayBarEls = [...document.querySelectorAll('.display-bar')];

        displayBarEls.map(displayBar => {
            displayBar.style.backgroundColor = BARS_DONE_BG_COLOR;
            return displayBar;
        });
    }, (animations.length) * STEP_TIME);

    setTimeout(() => {
        const displayBarEls = [...document.querySelectorAll('.display-bar')];

        displayBarEls.map(displayBar => {
            displayBar.style.backgroundColor = BARS_BASIC_BG_COLOR;
            return displayBar;
        });

        setBars(barsCopy);
    }, (animations.length + 1) * STEP_TIME + DONE_TIME);
}