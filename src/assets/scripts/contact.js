import '../styles/contact.css'

export default function displayContact(){
    const content = document.querySelector('#content')
    content.innerHTML = ''

    //Create elements
    const container = document.createElement('div')
    const title = document.createElement('h1')
    const phone =  document.createElement('h3')
    const address = document.createElement('h3')
    const map = document.createElement('div')
    
    //Add content
    title.textContent = 'CONTACT US'
    phone.innerHTML = '<i class="fa-solid fa-phone"></i> (555) 555-1234'
    address.innerHTML = '<i class="fa-solid fa-location-dot"></i> 4275 Isleta Blvd, Albuquerque, New Mexico'
    map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.6845373400974!2d-106.68272846106778!3d35.01460119070121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87220dd72bedf733%3A0xd0672c8833de7ff7!2sTwisters%20Burgers%20and%20Burritos!5e0!3m2!1spt-BR!2sbr!4v1706810781667!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

    //Add tags
    container.classList.add('container')    

    //Append elements
    container.appendChild(title)
    container.appendChild(phone)
    container.appendChild(address)
    container.appendChild(map)
    content.appendChild(container)
}   