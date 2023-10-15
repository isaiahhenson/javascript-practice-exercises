let link = document.querySelector('a') 

link.textContent = "Modzilla Developer Network"
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");

let para = document.createElement('p')
para.textContent = "I had a great time today:)"

sect.appendChild(para)

const text = document.createTextNode(" — the premier source for web development knowledge.")
let linkPara = document.querySelector('p')
linkPara.appendChild(text)
sect.removeChild(linkPara);

sect.appendChild(linkPara);

linkPara.setAttribute('class', 'highlight')

