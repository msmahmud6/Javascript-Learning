//In console, type "monitorEvents(document)" to track events
/*
We can handle events using following 3 methods:
1. Inline Method
2. Property Method
3. Listener Method
*/
let clickme = document.querySelector('.clickme')
let box = document.querySelector('.box')
let nameInput = document.querySelector('.nameInput')
let form = document.querySelector('form')
let submitBtn = document.querySelector('.submitBtn')
let h1 = document.querySelector('h1')
// clickme.addEventListener('click',()=>{
//     console.log("I am clicked.");
// })
// clickme.addEventListener('click',()=>{
//     console.log("2nd Time got clicked.");
// })

// let showConsole = function(){
//     console.log("Hello");
// }
// clickme.addEventListener('click',showConsole)
// clickme.removeEventListener('click',showConsole)
//We have to pass a reference function not an anonymous function to remove

//To get an event object
// clickme.addEventListener('click',function(event){
//     console.log(event);
// })
clickme.addEventListener('mouseup',()=>{
    console.log("Mouse Up");
})
clickme.addEventListener('mousedown',()=>{
    console.log("Mouse Down");
})
box.addEventListener('mouseenter',()=>{
    console.log("Mouse Entered");
})
box.addEventListener('mouseleave',()=>{
    console.log("Mouse left");
})
box.addEventListener('contextmenu',()=>{ //Right click korle 
    console.log("hsuwhuihsauh");
})
clickme.addEventListener('keypress',()=>{
    console.log("Key Pressed");
})
//Form Events
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log("Submitted");
})
nameInput.addEventListener('focus', function(e){
    console.log("Focused");
})
nameInput.addEventListener('input', function(e){
    console.log(nameInput.value)
})
nameInput.addEventListener('change', function(e){
    console.log(nameInput.value)
})
//Touch Events
box.addEventListener('touchmove',()=>{
    console.log("#Works on Phone Touch Screen");
})
//Window Events
window.addEventListener('scroll',()=>{
    console.log("Page got scrolled");
})
//Clipboard Events
h1.addEventListener('copy',()=>{
    alert(`Copied ${h1.innerText}`)
})
 