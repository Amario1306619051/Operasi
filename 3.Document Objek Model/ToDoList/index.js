const listHarian = document.querySelector('.listHarian')
const input = document.querySelector('.inputBar')
const buttonToDO = document.querySelector('.inputToDo')

buttonToDO.addEventListener('click', inputToListHarian)

let hasilTodo = ``
let isiTodo = ``
function inputToListHarian (){
    isiTodo += `<li> ${input.value} </li>`
    hasilTodo = `<ol> ${isiTodo} </ol>`
    listHarian.innerHTML = hasilTodo
}
