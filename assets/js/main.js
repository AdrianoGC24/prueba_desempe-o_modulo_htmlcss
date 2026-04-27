const btn = document.querySelector('.menu-toggle')
const navbtn = document.querySelector('.nav__list')

btn.addEventListener('click', () =>{
    navbtn.classList.toggle('nav-btn')
})