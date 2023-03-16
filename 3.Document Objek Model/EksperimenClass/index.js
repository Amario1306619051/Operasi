const tombol = document.querySelectorAll(`.tombol`)
const tampil = document.querySelector('.urutan')

for(let i = 0; i < tombol.length; i ++){
    tombol[i].addEventListener('click', function(){
        tampil.innerHTML = i + 1
    })
}