const tombolTambahHari = document.querySelector('.tambahHari')
const container = document.getElementById('container')
const tambahTodo = document.querySelector('.tambahTodo')
let listHarian = document.querySelectorAll('.listHarian')
let input = document.querySelectorAll('.inputBar')
let buttonToDO = document.querySelectorAll('.inputToDo')

for (let i = 0; i < listHarian.length; i ++){
    buttonToDO[i].addEventListener('click', function(){
        isiTodo[i] += `<li> ${input[i].value} </li>`
        hasilTodo[i] = `<ol> ${isiTodo[i]} </ol>`
        listHarian[i].innerHTML = hasilTodo[i]
    })
}  

let hasilTodo = [``]
let isiTodo = [``]
let isiTambahTodo = ``
let tanggal = 16

tombolTambahHari.addEventListener('click', tambahListHarian)
function tambahListHarian(){
    tanggal += 1
    hasilTodo.push(``)
    isiTodo.push(``)
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

    let listHarian = document.querySelectorAll('.listHarian')
    let input = document.querySelectorAll('.inputBar')
    let buttonToDO = document.querySelectorAll('.inputToDo')

    for (let i = 0; i < listHarian.length; i ++){
        buttonToDO[i].addEventListener('click', function(){
            isiTodo[i] += `<li> ${input[i].value} </li>`
            hasilTodo[i] = `<ol> ${isiTodo[i]} </ol>`
            listHarian[i].innerHTML = hasilTodo[i]
        })
    }
}
