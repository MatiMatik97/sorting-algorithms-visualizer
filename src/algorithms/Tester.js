const Tester = () => { }

Tester.test = (bars) => {
    const swap = (arr, i, j) => {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    const bgColor = '#6ba4ee';

    for (let i = 0; i < bars.length - 1; i++) {
        const bar1 = document.querySelector(`.bar-${bars[i].id}`)
        const bar2 = document.querySelector(`.bar-${bars[i + 1].id}`)

        setTimeout(() => {
            bar1.style.backgroundColor = "red";
            bar2.style.backgroundColor = "red";
            swap(bars, i, i + 1);
        }, i * 500);

        setTimeout(() => {
            bar2.style.backgroundColor = bgColor;
            bar1.style.backgroundColor = bgColor;
        }, (i + 1) * 500);
    }
}

export default Tester