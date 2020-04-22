export const
    BARS_BASIC_BG_COLOR = "#6ba4ee",
    BARS_COPMARE_BG_COLOR = "#df1010",
    BARS_DONE_BG_COLOR = "#3da827";

export const
    STEP_TIME = 25,
    DONE_TIME = 200;

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