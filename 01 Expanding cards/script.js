function init() {
    console.log('hello world');
}

init();

const panels = document.querySelectorAll('.panel');
// creo una nodelist ( tipo un array)

panels.forEach((panel) => {
    panel.addEventListener('click', () => {

        removeActiveClasses();
        panel.classList.add('active')
    })
})


function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}