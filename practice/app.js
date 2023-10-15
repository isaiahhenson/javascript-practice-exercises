let container = document.querySelector('#container')
let btn = document.querySelectorAll('button')

let p = document.createElement('p')
let h = document.createElement('h3')
let bdDiv = document.createElement('div')
let inDiv = document.createElement('h1')
let p2 = document.createElement('p')

btn.forEach((button) => button.addEventListener('click', () => alert(button.id)))

p.textContent = 'Hey, I"m red!'
p.style.cssText = "color: red"
bdDiv.style.border = 'solid 2px black'
bdDiv.style.height = '100px'
bdDiv.style['background-color'] = 'pink'
inDiv.textContent = "I'm in a Div"
// inDiv.style['font-size'] = '17px'
p2.textContent = 'ME TOO!'

h.innerHTML = 'Hey, I"m blue!'
h.style['color'] = 'blue'

container.appendChild(p)
container.appendChild(h)
container.appendChild(bdDiv)
bdDiv.appendChild(inDiv)
bdDiv.appendChild(p2)
