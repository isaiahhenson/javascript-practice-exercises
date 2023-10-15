let input = document.querySelector('input')
let ul = document.querySelector('ul')
let button = document.querySelector('button')


button.addEventListener('click', () => {
    let val = input.value
    console.log(val)
    input.value = ""
    
    let span = document.createElement('span')
    let li = document.createElement('li')
    let btn = document.createElement('button')

    li.appendChild(span)
    li.appendChild(btn)

    span.textContent = val;
    btn.textContent = 'DELETE'

    ul.appendChild(li)

    btn.addEventListener('click', () => {ul.removeChild(li),  input.focus()})

    input.focus()
})




