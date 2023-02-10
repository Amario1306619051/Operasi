const Penjumlahan = (a,b) => {
    return a + b
}

console.log(Penjumlahan(9, 10))

//Langsung return aja

const PanggilAmar = (Nama) => `Halo ${Nama}`
console.log(PanggilAmar('AMARIO'))

//Kombinasi 
var SuhuCelcius = [10, 20, 30, 40, 50, 60]
let TabelReanur = SuhuCelcius.map (SuhuDerajatCelcius => 4*SuhuDerajatCelcius/5)

console.log(TabelReanur)