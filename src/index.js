import './style.css'
import displayHome from './assets/scripts/home'
import displayMenu from './assets/scripts/menu'
import displayContact from './assets/scripts/contact'

const homeBtn = document.querySelector('#home')
const menuBtn = document.querySelector('#menu')
const contactBtn = document.querySelector('#contact')

homeBtn.addEventListener('click', displayHome)
menuBtn.addEventListener('click', displayMenu)
contactBtn.addEventListener('click', displayContact)
displayHome()