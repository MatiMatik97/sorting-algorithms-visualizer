import { DONE_TIME, finishAnimations } from '../helpers';

import { MERGE_SORT_COLORS } from '../helpers';

const { BARS_BASIC_BG_COLOR,
    BARS_SWAP_BG_COLOR,
    BARS_OVERWRITE_BG_COLOR } = MERGE_SORT_COLORS;

const MergeSort = () => { }

let _stepTime = 0;
let _sortingOrder = "";
let animations = [];

MergeSort.init = (bars, stepTime, sortingOrder) => {
    _stepTime = stepTime;
    _sortingOrder = sortingOrder;
    animations = [];

    const barsMain = [...bars];
    const barsCopy = [...bars];

    MergeSort.subDivide(barsMain, 0, barsCopy.length - 1, barsCopy);

    return MergeSort.animate(bars.length);
}

MergeSort.subDivide = (mainArray, leftIndex, rightIndex, copyArray) => {
    if (leftIndex === rightIndex) return;

    const centerIndex = Math.floor((leftIndex + rightIndex) / 2);

    MergeSort.subDivide(copyArray, leftIndex, centerIndex, mainArray);
    MergeSort.subDivide(copyArray, centerIndex + 1, rightIndex, mainArray);

    MergeSort.merge(mainArray, leftIndex, centerIndex, rightIndex, copyArray);
}

MergeSort.merge = (mainArray, leftIndex, centerIndex, rightIndex, copyArray) => {
    let k = leftIndex;
    let i = leftIndex;
    let j = centerIndex + 1;

    while (i <= centerIndex && j <= rightIndex) {
        const firstValue = copyArray[i].size;
        const secondValue = copyArray[j].size;

        if ((_sortingOrder === "DESC" && firstValue > secondValue)
            || (_sortingOrder === "ASC" && firstValue < secondValue)) {
            animations.push({
                compare: {
                    i: i,
                    j: j
                },
                values: [k, copyArray[i]],
            });

            mainArray[k++] = copyArray[i++];
        } else {
            animations.push({
                compare: {
                    i: i,
                    j: j
                },
                values: [k, copyArray[j]],
            });

            mainArray[k++] = copyArray[j++];
        }
    }

    while (i <= centerIndex) {
        animations.push({
            compare: {
                i: i,
                j: i
            },
            values: [k, copyArray[i]],
        });

        mainArray[k++] = copyArray[i++];
    }

    while (j <= rightIndex) {
        animations.push({
            compare: {
                i: j,
                j: j
            },
            values: [k, copyArray[j]],
        });

        mainArray[k++] = copyArray[j++];
    }
}

MergeSort.animate = (barsAmount) => {
    console.log(animations);
    const STEP_TIME = Math.round(_stepTime / barsAmount);
    let sortingTime = 0;

    for (let anim = 0; anim < animations.length; anim++) {
        const { compare: { i, j }, values } = animations[anim];

        setTimeout(() => {
            const displayBars = [...document.querySelectorAll('.display-bar')];

            displayBars.map(displayBar => {
                displayBar.style.backgroundColor = BARS_BASIC_BG_COLOR;
                return displayBar;
            });

            displayBars[i].style.backgroundColor = BARS_SWAP_BG_COLOR;
            displayBars[j].style.backgroundColor = BARS_SWAP_BG_COLOR;
            displayBars[values[0]].style.backgroundColor = BARS_OVERWRITE_BG_COLOR;

            setTimeout(() => {
                displayBars[values[0]].style.height = `${values[1].size}px`;
            }, Math.round(STEP_TIME / 2));
        }, anim * STEP_TIME);

        sortingTime += STEP_TIME;
    }

    finishAnimations(STEP_TIME, animations.length);

    return sortingTime + STEP_TIME + DONE_TIME;
}

export default MergeSort;