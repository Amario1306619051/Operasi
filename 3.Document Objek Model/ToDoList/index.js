const listHarian = document.querySelector('.listHarian')
const input = document.querySelector('.inputBar')
const buttonToDO = document.querySelector('.inputToDo')
const tombolTambahHari = document.querySelector('.tambahHari')
const container = document.getElementById('container')
const tambahTodo = document.querySelector('.tambahTodo')

buttonToDO.addEventListener('click', inputToListHarian)
tombolTambahHari.addEventListener('click', tambahListHarian)

let hasilTodo = ``
let isiTodo = ``
let isiTambahTodo = ``
let tanggal = 16
function inputToListHarian (){
    isiTodo += `<li> ${input.value} </li>`
    hasilTodo = `<ol> ${isiTodo} </ol>`
    listHarian.innerHTML = hasilTodo
}
function tambahListHarian(){
    tanggal += 1
    isiTambahTodo += `
    <div class="card">
        <div id="inputDanTanggal">
            <input placeholder="input disini" type="text" class="inputBar">
            <button class="inputToDo"> + </button>
            <h2> ${tanggal} Maret 2023</h2>
        </div>
        
        <div class="listHarian">

        </div>
    </div>
    `
    tambahTodo.innerHTML = isiTambahTodo
}