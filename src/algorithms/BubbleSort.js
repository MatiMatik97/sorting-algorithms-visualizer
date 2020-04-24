import {
    BARS_BASIC_BG_COLOR, BARS_SWAPPED_BG_COLOR,
    BARS_SWAP_BG_COLOR,
    DEFAULT_STEP_TIME, DONE_TIME,
    swapInArray, finishAnimations
} from '../helpers';

const BubbleSort = () => { }

BubbleSort.init = (bars, setBars) => {
    const animations = [];
    const barsCopy = [...bars];
    const barsLength = barsCopy.length;

    for (let i = 0; i < barsLength - 1; i++) {
        for (let j = 0; j < barsLength - i - 1; j++) {
            let toSwap = false;

            if (barsCopy[j].size < barsCopy[j + 1].size) {
                toSwap = true;
                swapInArray(barsCopy, j, j + 1);
            }

            animations.push({
                compare: {
                    i: j,
                    j: (j + 1)
                },
                toSwap
            });
        }
    }

    return BubbleSort.animate(bars.length, setBars, animations);
}

BubbleSort.animate = (barsAmount, setBars, animations) => {
    const STEP_TIME = Math.round(DEFAULT_STEP_TIME / barsAmount);
    let sortingTime = 0;

    for (let anim = 0; anim < animations.length; anim++) {
        const { compare: { i, j }, toSwap } = animations[anim];

        setTimeout(() => {
            const displayBars = [...document.querySelectorAll('.display-bar')];

            displayBars.map(displayBar => {
                displayBar.style.backgroundColor = BARS_BASIC_BG_COLOR;
                return displayBar;
            });

            const iDisplayBar = displayBars[i];
            const jDisplayBar = displayBars[j];
            const color = toSwap ? BARS_SWAP_BG_COLOR : BARS_SWAPPED_BG_COLOR;
            iDisplayBar.style.backgroundColor = color;
            jDisplayBar.style.backgroundColor = color;

            setTimeout(() => {
                if (toSwap) {
                    setBars((prevBars) => {
                        const newBars = [...prevBars];
                        swapInArray(newBars, i, j);
                        return newBars;
                    });
                }
            }, Math.round(STEP_TIME / 2));
        }, anim * STEP_TIME);

        sortingTime += STEP_TIME;
    }

    finishAnimations(STEP_TIME, animations.length);

    return sortingTime + STEP_TIME + DONE_TIME;
}

export default BubbleSort