const tombol = document.querySelectorAll(`.tombol`)
const tampil = document.querySelector('.urutan')
urutan = 0

for(let i = 0; i < tombol.length; i ++){
    tombol[i].addEventListener('click', tampilkanNak )
}

function tampilkanNak(){
    tampil.innerHTML = i + 1
}