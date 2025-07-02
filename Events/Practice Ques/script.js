let decBtn = document.querySelector('.decBtn')
let incBtn = document.querySelector('.incBtn')
let counterValue = document.querySelector('.counterValue')

decBtn.addEventListener('click',()=>{
    let value = Number(counterValue.innerText)
    if(value <=1) return;
    counterValue.innerText = Number(counterValue.innerText) - 1
})
incBtn.addEventListener('click',()=>{
    counterValue.innerText = Number(counterValue.innerText) + 1
})
//Form Validation 
let form = document.querySelector('form')
let name = document.querySelector('#name')
let email = document.querySelector('#email')
let submitButton = document.querySelector('.submitButton')
let body = document.querySelector('body')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(!name.value || !email.value){
        alert('Fill All the details first')
        return;
    }

    let divElem = document.createElement('div');
    divElem.innerHTML = `
    <p>${name.value}</p>
    <p>${email.value}</p>`

    body.append(divElem)
})