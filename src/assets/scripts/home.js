import icon from '../img/chef.jpeg'
import '../styles/home.css'

export default function displayHome () {
    const content = document.querySelector('#content')
    content.innerHTML = ''

    //Elements creation
    const container = document.createElement('div')
    const title = document.createElement('h2')
    const imgDiv = document.createElement('div')
    const img = document.createElement('img')
    const text = document.createElement('p')

    //Add tags
    container.classList.add('container')
    title.classList.add('title')
    imgDiv.classList.add('imgContainer')
    text.setAttribute('id', 'homeText')

    //Add content
    title.innerHTML = 'Some Restaurant <br> <span>Since 1924</span>'
    img.src = icon
    text.innerText = 'The best food in the country you find here'
    

    //Append Elements
    container.appendChild(title)
    container.appendChild(imgDiv)
    container.appendChild(text)
    imgDiv.appendChild(img)
    content.appendChild(container)
}