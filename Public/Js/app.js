const square = document.querySelectorAll('.element');
const btn = document.querySelector('button');
const secondX = document.querySelector(
    '.title div:nth-child(2) .bi-x'
);


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
    changeIcon();
}

btn.addEventListener('click', () => {
    square.forEach((e) => e.innerHTML = '');
})



square.forEach((e) => {
    e.addEventListener('click', () => {
        if (!e.innerHTML) addedElement(e);


    })

})