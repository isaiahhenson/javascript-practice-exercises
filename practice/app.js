
function tri(num){
    let board = ''
    for (let i = 1; i <= num; i++){
        let spaces = ' '.repeat(num - i)
        let hash = '#'.repeat(2 * i - 1)
        board += spaces + hash + spaces + '\n'
    }
    return board
}

console.log(tri(5))

let print = tri(5);

let ul = document.querySelector('ul')
let li = document.createElement('li')
li.textContent = print;

ul.appendChild(li)

