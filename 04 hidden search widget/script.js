function init() {
    console.log('hello world');
}

init();

//js vanilla
/*
function myFunction() {
    var toggleClass = document.getElementById("search");
    toggleClass.classList.toggle("active");
}
*/

//jQuery

const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})