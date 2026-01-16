const square = document.querySelectorAll('.element')

let statuss = false;

let addedElement = () => {
    e.innerHTML = statuss
        ? '<i class="bi bi-x"></i>'
        : '<i class="bi bi-circle"></i>';
    statuss = !statuss
}

square.forEach((e) => {
    e.addEventListener('click', () => {
          addedElement();
    })

})