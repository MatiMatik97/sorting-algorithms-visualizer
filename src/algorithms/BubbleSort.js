import {
    BARS_BASIC_BG_COLOR, BARS_COPMARE_BG_COLOR,
    STEP_TIME, DONE_TIME,
    swapInArray, finishAnimations
} from '../helpers';

const BubbleSort = () => { }

BubbleSort.init = (bars, setBars) => {
    const animations = [];
    const barsCopy = [...bars];
    const n = barsCopy.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
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

    return BubbleSort.animate(setBars, barsCopy, animations);
}

BubbleSort.animate = (setBars, barsCopy, animations) => {
    let sortingTime = 0;

    for (let anim = 0; anim < animations.length; anim++) {
        const { compare: { i, j }, toSwap } = animations[anim];

        const iDisplayBar = document.querySelector(`.display-bar-${i}`);
        const jDisplayBar = document.querySelector(`.display-bar-${j}`);

        setTimeout(() => {
            iDisplayBar.style.backgroundColor = BARS_COPMARE_BG_COLOR;
            jDisplayBar.style.backgroundColor = BARS_COPMARE_BG_COLOR;
        }, (anim) * STEP_TIME);

        setTimeout(() => {
            if (toSwap) {
                setBars((prevBars) => {
                    const newBars = [...prevBars];
                    swapInArray(newBars, i, j);
                    return newBars;
                });
            }

            iDisplayBar.style.backgroundColor = BARS_BASIC_BG_COLOR;
            jDisplayBar.style.backgroundColor = BARS_BASIC_BG_COLOR;
        }, (anim + 1) * STEP_TIME);

        sortingTime += STEP_TIME;
    }

    finishAnimations(setBars, barsCopy, animations);

    return sortingTime + STEP_TIME + DONE_TIME;
}

export default BubbleSort