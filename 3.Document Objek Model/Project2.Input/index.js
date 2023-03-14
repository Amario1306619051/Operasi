const formMasukan = document.getElementById("Inputbar")
const Hasil = document.getElementById('Hasil')
const tombol = document.getElementsByTagName('button')[0]
const unorderedList = document.createElement('ul')
Hasil.appendChild(unorderedList)
let pesan = ``

tombol.addEventListener('click', menampilkanPesan)

function menampilkanPesan(){
    pesan += 
    `<li>
        ${formMasukan.value}
    </li>
    `
    Hasil.innerHTML = pesan
}