import krabbypatty from '../img/krabbypatty.png'
import beer from '../img/butterbeer.png'
import beans from '../img/senzubeans.png'
import pollos from '../img/lospollos.png'
import '../styles/menu.css'

export default function displayMenu () {
    const content = document.querySelector('#content')
    content.innerHTML = ''
    
    //Menu items creation
    function createMenuItem (name, desc, src){
        const menuItem = document.createElement('div')
        menuItem.classList.add('menuItem')

        const foodName = document.createElement('h2')
        foodName.textContent = name
        foodName.classList.add('foodName')

        const foodDesc = document.createElement('h3')
        foodDesc.textContent = desc
        foodDesc.classList.add('foodDesc')
        
        const foodImg = document.createElement('img')
        foodImg.src = src
        foodImg.alt = name
        foodImg.classList.add('foodImg')
        
        menuItem.appendChild(foodImg)
        menuItem.appendChild(foodName)
        menuItem.appendChild(foodDesc)

        return menuItem
    }

    //Create elements
    const container = document.createElement('div')
    const title = document.createElement('h1')
    const menuGrid = document.createElement('div')
    
    //Add content
    title.textContent = 'MENU'
    menuGrid.appendChild(createMenuItem('Los Pollos', 'Zesty chicken seasoned using only the freshest herbs and spices', pollos))
    menuGrid.appendChild(createMenuItem('Senzu Beans', 'Mystical beans with immense rejuvenation properties', beans))
    menuGrid.appendChild(createMenuItem('Butterbeer', 'Very creamy and carbonated drink, with a few touches of nutmeg and cinnamon', beer))
    menuGrid.appendChild(createMenuItem('Krabby Patty', 'A meatless hamburger of sorts made from seaweed-sea buns, undersea vegetables, condiments, and a patty', krabbypatty))

    //Add tags
    title.setAttribute('id', 'menuTitle')
    menuGrid.setAttribute('id', 'menuGrid')
    container.setAttribute('id', 'menuContainer')

    //Append elements
    container.appendChild(title)
    container.appendChild(menuGrid)
    content.appendChild(container)
}