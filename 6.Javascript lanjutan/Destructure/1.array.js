const nama = ['Amar', 'Pridan', 'Muhlis', 'Raihan', 'Dimas']
const [a, , , ,b] = nama

console.log(a)
console.log(b)

const [ketua, ...anggota] = nama
console.log(anggota)

function kalkulator (a,b){
    return{
        tambah : a+b,
        kurang: a-b
    }
}

const satuDuaDitambah = kalkulator(2,1).tambah
console.log(satuDuaDitambah)