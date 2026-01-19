const square = document.querySelectorAll('.element');
const btn = document.querySelector('button');
const secondX = document.querySelector(
    '.title div:nth-child(2) .bi-x'
);
const listArchife =
    [
        [square[0], square[1], square[2]],
        [square[3], square[4], square[5]],
        [square[6], square[7], square[8]],

        [square[0], square[3], square[6]],
        [square[1], square[4], square[7]],
        [square[2], square[5], square[8]],

        [square[0], square[4], square[8]],
        [square[2], square[4], square[6]],
    ]



let statuss = false;

let changeIcon = () => {
    !statuss
        ? secondX.setAttribute('class', 'bi bi-circle')
        : secondX.setAttribute('class', 'bi bi-x')

}

let addedElement = (v) => {
    v.innerHTML = statuss
        ? '<i class="bi bi-x"></i>'
        : '<i class="bi bi-circle"></i>';
    statuss = !statuss;
}

let check = () => {
    if (
        listArchife.some(row =>
            row.every(cell => cell.innerHTML === '<i class="bi bi-x"></i>')
        )
        ||
        listArchife.some(row =>
            row.every(cell => cell.innerHTML === '<i class="bi bi-x"></i>')
        )
    ) {
        return true;
    }

}

btn.addEventListener('click', () => {
    square.forEach((e) => e.innerHTML = '');
})


square.forEach((e) => {
    e.addEventListener('click', () => {

        if (e.innerHTML) return;

        addedElement(e);
        changeIcon();

        let guess = check();

        if (guess) {
            console.log('you win 🎉');
            return;
        }


        if ([...square].every(s => s.innerHTML)) {
            console.log('draw 😐');
        }
    });
});
