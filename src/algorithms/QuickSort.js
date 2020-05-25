import {
    BARS_BASIC_BG_COLOR, BARS_SWAPPED_BG_COLOR,
    BARS_SWAP_BG_COLOR,
    DEFAULT_STEP_TIME, DONE_TIME,
    swapInArray, finishAnimations
} from '../helpers';

const QuickSort = () => { }

QuickSort.init = (bars, setBars, sortingOrder) => {
    const barsCopy = [...bars];
    const barsLength = barsCopy.length;
    const animations = [];

    QuickSort.subSort(barsCopy, sortingOrder, animations, 0, barsLength - 1);

    setBars(barsCopy);

    return 0;
}

QuickSort.subSort = (barsCopy, sortingOrder, animations, start, end) => {
    if (start >= end) return;

    const index = QuickSort.partition(barsCopy, sortingOrder, animations, start, end);
    QuickSort.subSort(barsCopy, sortingOrder, animations, start, index - 1);
    QuickSort.subSort(barsCopy, sortingOrder, animations, index + 1, end);
}

QuickSort.partition = (barsCopy, sortingOrder, animations, start, end) => {
    let pivot = start;

    console.log(animations);

    for (let i = start; i < end; i++) {
        if (sortingOrder === "DESC"
            && barsCopy[i].size > barsCopy[end].size) {
            swapInArray(barsCopy, i, pivot);
            pivot++;
        } else if (sortingOrder === "ASC"
            && barsCopy[i].size < barsCopy[end].size) {
            swapInArray(barsCopy, i, pivot);
            pivot++;
        }
    }

    swapInArray(barsCopy, pivot, end);

    return pivot;
}

export default QuickSort