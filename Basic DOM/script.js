///Phases of DOM Manipulation

// Selection of html tag
let a = document.querySelector("h1")
console.log(a)

let b = document.querySelector("p")
console.log(b)

// Modify html tag
a.innerHTML = "My Name is Mbappe"
b.innerHTML = "Ronaldo is my idol. He is a GOAT. SIUUUUUU"

//Modify CSS
a.style.backgroundColor = "#fdfda2"
a.style.color = '#665102'

//Event Listener
a.addEventListener('click', ()=>{
    a.style.backgroundColor = "#daffa2"
    a.innerHTML = "Why Clicking MEEE???"
})

///A short project
let box = document.querySelector('div')
let button = document.querySelector('button')
let offButton = document.querySelector('.offButton')

button.addEventListener('click',()=>{
    box.style.scale = "1"
})
offButton.addEventListener('click', ()=>{
    box.style.scale = "0.5"
})
