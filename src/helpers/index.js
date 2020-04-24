export const
    BARS_BASIC_BG_COLOR = "#6ba4ee",
    BARS_SWAPPED_BG_COLOR = "#2cb978",
    BARS_SWAP_BG_COLOR = "#107a8b",
    BARS_DONE_BG_COLOR = "#26d484";

export const
    DEFAULT_STEP_TIME = 2000,
    DONE_TIME = 300;

export const swapInArray = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

export const finishAnimations = (STEP_TIME, animLength) => {
    setTimeout(() => {
        const displayBarEls = [...document.querySelectorAll('.display-bar')];

        displayBarEls.map(displayBar => {
            displayBar.style.backgroundColor = BARS_DONE_BG_COLOR;
            return displayBar;
        });
    }, (animLength) * STEP_TIME);

    setTimeout(() => {
        const displayBarEls = [...document.querySelectorAll('.display-bar')];

        displayBarEls.map(displayBar => {
            displayBar.style.backgroundColor = BARS_BASIC_BG_COLOR;
            return displayBar;
        });

    }, (animLength + 1) * STEP_TIME + DONE_TIME);
}