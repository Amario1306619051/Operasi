const nama = ['Amar', 'Pridan', 'Muhlis', 'Raihan', 'Dimas']
const [a, , , ,b] = nama

console.log(a)
console.log(b)

const [ketua, ...anggota] = nama
console.log(anggota)

