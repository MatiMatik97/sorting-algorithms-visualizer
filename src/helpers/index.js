export const
    BARS_BASIC_BG_COLOR = "#6ba4ee",
    BARS_SWAPPED_BG_COLOR = "#2cb978",
    BARS_SWAP_BG_COLOR = "#107a8b",
    BARS_DONE_BG_COLOR = "#26d484",
    BARS_PIVOT_BG_COLOR = "#952e8f",
    BARS_OVERWRITE_BG_COLOR = "#952e8f";

const BASIC_SORT_COLORS = {
    BARS_BASIC_BG_COLOR,
    BARS_SWAPPED_BG_COLOR,
    BARS_SWAP_BG_COLOR,
    BARS_DONE_BG_COLOR
};

export const BUBBLE_SORT_COLORS = {
    ...BASIC_SORT_COLORS
}

export const QUICK_SORT_COLORS = {
    ...BASIC_SORT_COLORS,
    BARS_PIVOT_BG_COLOR
}

export const MERGE_SORT_COLORS = {
    BARS_BASIC_BG_COLOR,
    BARS_SWAP_BG_COLOR,
    BARS_DONE_BG_COLOR,
    BARS_OVERWRITE_BG_COLOR
}

const BASIC_MARKINGS = [
    { color: BARS_BASIC_BG_COLOR, title: "Basic" },
    { color: BARS_SWAPPED_BG_COLOR, title: "Swapped" },
    { color: BARS_SWAP_BG_COLOR, title: "Compare" },
    { color: BARS_DONE_BG_COLOR, title: "Done" },
];

export const BUBBLE_SORT_MARKINGS = BASIC_MARKINGS;

export const QUICK_SORT_MARKINGS = [
    ...BASIC_MARKINGS,
    { color: BARS_PIVOT_BG_COLOR, title: "Pivot" },
];

export const MERGE_SORT_MARKINGS = [
    { color: BARS_BASIC_BG_COLOR, title: "Basic" },
    { color: BARS_SWAP_BG_COLOR, title: "Compare" },
    { color: BARS_DONE_BG_COLOR, title: "Done" },
    { color: BARS_OVERWRITE_BG_COLOR, title: "Overwrite" },
];

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