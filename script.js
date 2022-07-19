const menuLinks = document.querySelectorAll('.menu a')
const nav = document.getElementById('navbar')
const toggleButton = document.getElementById('toggle')


menuLinks.addEventListener('click', () => {
    nav.classList.toggle('mobile')
})

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('mobile')
})