const offcanvasLinks = document.querySelectorAll('#offcanvas a')
const nav = document.getElementById('offcanvas')
const toggleButton = document.getElementById('toggle')


// offcanvasLinks.addEventListener("click", () => {
//     nav.classList.toggle('active')
//     toggle.classList.toggle("active")
// })



toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active')
    toggle.classList.toggle("active")
})