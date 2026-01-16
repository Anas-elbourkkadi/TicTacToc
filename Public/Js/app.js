const square = document.querySelectorAll('.element');
const btn = document.querySelector('button');

let statuss = false;

let addedElement = (v) => {
    v.innerHTML = statuss
        ? '<i class="bi bi-x"></i>'
        : '<i class="bi bi-circle"></i>';
    statuss = !statuss;
}

btn.addEventListener('click', () => {
    square.forEach((e) => e.innerHTML = '');
})



square.forEach((e) => {
    e.addEventListener('click', () => {
        if (!e.innerHTML) addedElement(e);


    })

})