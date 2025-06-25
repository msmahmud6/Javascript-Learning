let listContainer = document.querySelector('.listContainer')
let addInput = document.querySelector('#addInput')
let addBtn = document.querySelector('#addBtn')
let list = []

function renderList(arr) {
    listContainer.innerHTML = ''
    arr.map(obj => {
        let divElem = document.createElement('div')
        divElem.classList.add('list')
        divElem.innerHTML = `
        <p>${obj.text}</p>
    `
        let btnElem = document.createElement('button')
        btnElem.innerText = '❌'
        divElem.appendChild(btnElem)
        divElem.addEventListener('click',()=>{
            deleteList(obj.id)
        })

        listContainer.appendChild(divElem)
    })
}
renderList(list)

function randomIdGenerator(arr) {
    let generatedNumber = Math.floor(Math.random() * 1000)
    let userIds = arr.map((item) => item.id)
    // console.log(userIds);
    while(userIds.includes(generatedNumber)==false) {
        return generatedNumber
    }
}
// console.log(randomIdGenerator(list)); 

function handleAddList() {
    let obj ={
        id: randomIdGenerator(list),
        text: addInput.value
    }
    list.push(obj)
    renderList(list)
    // console.log(list);
}
addBtn.addEventListener('click', handleAddList)

function deleteList(id){
    let a = list.filter(obj =>{
        return obj.id != id
    })
    list = a
    console.log(list);
    renderList(list)
}