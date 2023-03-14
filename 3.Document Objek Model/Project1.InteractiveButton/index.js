let jumlahKlik = 0
const jumlah = document.getElementsByClassName('jumlah')[0];
jumlah.innerHTML = jumlahKlik

const tombol = document.getElementsByTagName('button')[0]
tombol.addEventListener('click', nambahSatu)

function nambahSatu () {
    jumlahKlik += 1
}
