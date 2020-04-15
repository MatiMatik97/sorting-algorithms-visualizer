const Tester = () => { }

Tester.test = (bars, setBars, setIsSorting) => {
    const swap = (arr, i, j) => {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    };

    const STEP_TIME = 200;
    let isSortingTime = 0;

    for (let i = 0; i < bars.length - 1; i++) {
        setTimeout(() => {
            setBars((bars) => {
                const newBars = [...bars];
                swap(newBars, i, i + 1);
                return newBars;
            });
        }, STEP_TIME * (i + 1));
        isSortingTime += STEP_TIME;
    }

    setTimeout(() => {
        setIsSorting(false);
    }, isSortingTime);
}

export default Tester