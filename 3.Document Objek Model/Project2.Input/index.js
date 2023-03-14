const formMasukan = document.getElementById("Inputbar")
const Hasil = document.getElementById('Hasil')
const tombol = document.getElementsByTagName('button')[0]

tombol.addEventListener('click', menampilkanPesan)

function menampilkanPesan(){
    Hasil.innerHTML = formMasukan.value
}