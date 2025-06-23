let randomBtn = document.querySelector('#randomBtn')
let colorInput = document.querySelector('#colorInput')
let applyBtn = document.querySelector('#applyBtn')
let currentColorValue = document.querySelector('#currentColorValue')
let container = document.querySelector('.container')

const colorArray = ['red','blue','green','white','yellow','skyblue','aqua','cyan','tomato','lightseagreen','black','gray','orange','pink','purple',
    'navyblue','lightcoral','violet']

// console.log(randomBtn,colorInput,applyBtn,currentColorValue)
const changeColor = (color) =>{
    container.style.backgroundColor = color;
    currentColorValue.innerText = color;
}
const generateRandomColor = ()=>{
    return colorArray[Math.floor(Math.random()*(colorArray.length))]
}
const handleRandomBtnClick = ()=>{
    let color = generateRandomColor()
    changeColor(color)
    
}
const handleApplyBtnClick = ()=>{
    let userColor = colorInput.value
    changeColor(userColor)
    
}

randomBtn.addEventListener('click', handleRandomBtnClick)
applyBtn.addEventListener('click', handleApplyBtnClick)









































//Mastering Arrow Function
const add = (x,y)=>{
    return x+y;
}
const square = x =>{     //We can write without parentheses if there is only one argument
    return x*x;
}
const rollDie = ()=>{
    return Math.floor(Math.random()*6) + 1
}

//Implicit Return 
const rolldie = ()=>(
    Math.floor(Math.random()*6) + 1       ///Without return and Using parentheses instead of curly braces
)
//Also
const sub = (a,b)=> a-b   ///Just a line of code without parentheses
