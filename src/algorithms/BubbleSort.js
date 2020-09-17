import { DONE_TIME, swapInArray, finishAnimations } from '../helpers';

import { BUBBLE_SORT_COLORS } from '../helpers';

const { BARS_BASIC_BG_COLOR,
    BARS_SWAPPED_BG_COLOR,
    BARS_SWAP_BG_COLOR } = BUBBLE_SORT_COLORS;

const BubbleSort = () => { }

BubbleSort.init = (bars, setBars, stepTime, sortingOrder) => {
    const animations = [];
    const barsCopy = [...bars];
    const barsLength = barsCopy.length;

    for (let i = 0; i < barsLength - 1; i++) {
        for (let j = 0; j < barsLength - i - 1; j++) {
            let toSwap = false;

            const firstValue = barsCopy[j].size;
            const secondValue = barsCopy[j + 1].size;
            if ((sortingOrder === "DESC" && firstValue < secondValue)
                || (sortingOrder === "ASC" && firstValue > secondValue)) {
                swapInArray(barsCopy, j, j + 1);
                toSwap = true;
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

    return BubbleSort.animate(bars.length, setBars, stepTime, animations);
}

BubbleSort.animate = (barsAmount, setBars, stepTime, animations) => {
    const STEP_TIME = Math.round(stepTime / barsAmount);
    let sortingTime = 0;

    for (let anim = 0; anim < animations.length; anim++) {
        const { compare: { i, j }, toSwap } = animations[anim];

        setTimeout(() => {
            const displayBars = [...document.querySelectorAll('.display-bar')];

            displayBars.map(displayBar => {
                displayBar.style.backgroundColor = BARS_BASIC_BG_COLOR;
                return displayBar;
            });

            const color = toSwap ? BARS_SWAP_BG_COLOR : BARS_SWAPPED_BG_COLOR;
            displayBars[i].style.backgroundColor = color;
            displayBars[j].style.backgroundColor = color;

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