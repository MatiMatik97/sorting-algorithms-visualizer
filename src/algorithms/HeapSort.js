import { DONE_TIME, swapInArray, finishAnimations } from '../helpers';

import { HEAP_SORT_COLORS } from '../helpers';

const { BARS_BASIC_BG_COLOR,
    BARS_SWAP_BG_COLOR,
    BARS_MAX_HEAP_BG_COLOR } = HEAP_SORT_COLORS;

const HeapSort = () => { }

let stepTime = 0;
let sortingOrder = "";
let animations = [];

HeapSort.init = (bars, setBars, _stepTime, _sortingOrder) => {
    stepTime = _stepTime;
    sortingOrder = _sortingOrder;
    animations = [];

    const barsCopy = [...bars];

    HeapSort.buildMaxHeap(barsCopy);

    for (let i = barsCopy.length - 1; i > 0; i--) {
        swapInArray(barsCopy, 0, i);

        animations.push({
            compare: {
                i: 0,
                j: i
            },
            toSwap: true,
            maxHeap: true
        });

        HeapSort.heapify(barsCopy, i, 0, false);
    }

    return HeapSort.animate(bars.length, setBars);
}

HeapSort.buildMaxHeap = (array) => {
    const n = array.length;

    for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
        HeapSort.heapify(array, n, i, true);
    }
}

HeapSort.heapify = (array, n, index, maxHeap) => {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let max = index;

    if (left < n && ((sortingOrder === "DESC" && array[left].size < array[max].size)
        || (sortingOrder === "ASC" && array[left].size > array[max].size))) {
        max = left;
    }

    if (right < n && ((sortingOrder === "DESC" && array[right].size < array[max].size)
        || (sortingOrder === "ASC" && array[right].size > array[max].size))) {
        max = right;
    }

    if (max !== index) {
        swapInArray(array, index, max);

        animations.push({
            compare: {
                i: index,
                j: max
            },
            toSwap: true,
            maxHeap
        });

        HeapSort.heapify(array, n, max, maxHeap);
    }
}

HeapSort.animate = (barsAmount, setBars) => {
    const STEP_TIME = Math.round(stepTime / barsAmount);
    let sortingTime = 0;

    for (let anim = 0; anim < animations.length; anim++) {
        const { compare: { i, j }, toSwap, maxHeap } = animations[anim];

        setTimeout(() => {
            const displayBars = [...document.querySelectorAll('.display-bar')];

            displayBars.map(displayBar => {
                displayBar.style.backgroundColor = BARS_BASIC_BG_COLOR;
                return displayBar;
            });

            const color = maxHeap ? BARS_MAX_HEAP_BG_COLOR : BARS_SWAP_BG_COLOR;
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

export default HeapSort