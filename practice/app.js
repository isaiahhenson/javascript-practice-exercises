let container = document.querySelector('#container')

let p = document.createElement('p')
let h = document.createElement('h3')

p.textContent = 'Hey, I"m red!'
p.style.cssText = "color: red"

h.innerHTML = 'Hey, I"m blue!'
h.style['color'] = 'blue'

container.appendChild(p)
container.appendChild(h)
