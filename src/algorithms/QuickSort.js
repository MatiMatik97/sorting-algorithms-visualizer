import { DONE_TIME, swapInArray, finishAnimations } from '../helpers';

import { QUICK_SORT_COLORS } from '../helpers';

const { BARS_BASIC_BG_COLOR,
    BARS_SWAPPED_BG_COLOR,
    BARS_SWAP_BG_COLOR,
    BARS_PIVOT_BG_COLOR } = QUICK_SORT_COLORS;

const QuickSort = () => { }

QuickSort.init = (bars, setBars, stepTime, sortingOrder) => {
    const barsCopy = [...bars];
    const barsLength = barsCopy.length;
    const animations = [];

    QuickSort.subSort(barsCopy, sortingOrder, animations, 0, barsLength - 1);

    return QuickSort.animate(bars.length, setBars, stepTime, animations);
}

QuickSort.subSort = (barsCopy, sortingOrder, animations, start, end) => {
    if (start >= end) return;

    const index = QuickSort.partition(barsCopy, sortingOrder, animations, start, end);

    QuickSort.subSort(barsCopy, sortingOrder, animations, start, index - 1);
    QuickSort.subSort(barsCopy, sortingOrder, animations, index + 1, end);
}

QuickSort.partition = (barsCopy, sortingOrder, animations, start, end) => {
    let pivotIndex = start;
    const chosenPivot = end;
    const pivotValue = barsCopy[chosenPivot].size;

    for (let i = start; i < end; i++) {
        const currentValue = barsCopy[i].size;
        let toSwap = false;

        if ((sortingOrder === "DESC" && currentValue > pivotValue)
            || (sortingOrder === "ASC" && currentValue < pivotValue)) {
            swapInArray(barsCopy, i, pivotIndex);
            pivotIndex++;
            toSwap = true;
        }

        animations.push({
            compare: {
                i: i,
                j: toSwap === true ? pivotIndex - 1 : pivotIndex
            },
            chosenPivot,
            toSwap
        });
    }

    swapInArray(barsCopy, pivotIndex, end);

    animations.push({
        compare: {
            i: pivotIndex,
            j: end
        },
        chosenPivot,
        toSwap: true
    });

    return pivotIndex;
}

QuickSort.animate = (barsAmount, setBars, stepTime, animations) => {
    const STEP_TIME = Math.round(stepTime / barsAmount);
    let sortingTime = 0;

    for (let anim = 0; anim < animations.length; anim++) {
        const { compare: { i, j }, chosenPivot, toSwap } = animations[anim];

        setTimeout(() => {
            const displayBars = [...document.querySelectorAll('.display-bar')];

            displayBars.map(displayBar => {
                displayBar.style.backgroundColor = BARS_BASIC_BG_COLOR;
                return displayBar;
            });

            const color = toSwap ? BARS_SWAP_BG_COLOR : BARS_SWAPPED_BG_COLOR;
            displayBars[i].style.backgroundColor = color;
            displayBars[j].style.backgroundColor = color;

            displayBars[chosenPivot].style.backgroundColor = BARS_PIVOT_BG_COLOR;

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

export default QuickSort