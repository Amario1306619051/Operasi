const formMasukan = document.getElementById("Inputbar")
const Hasil = document.getElementById('Hasil')
const tombol = document.getElementsByTagName('button')[0]
let pesan = ``

tombol.addEventListener('click', menampilkanPesan)

function menampilkanPesan(){
    pesan += 
    `<div>
        ${formMasukan.value}
    </div>
    `
    Hasil.innerHTML = pesan
}