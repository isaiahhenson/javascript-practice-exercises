let input = document.querySelector('input')
let button = document.querySelector('button')
let ul = document.querySelector('ul')


button.addEventListener('click', () => {

let val = input.value
console.log(val)
input.value = ""
input.focus()

let span = document.createElement('span')
let button = document.createElement('button')
let li = document.createElement('li')

span.textContent = val
button.textContent = "DELETE"

li.appendChild(span)
li.appendChild(button)


ul.appendChild(li)

button.addEventListener('dblclick', () => {
    li.remove()
    input.focus()
})
})

