var Kalimat = 'Hello Word'
var KalimatString = [...Kalimat]
var HasilAkhir = []

for(let i = Kalimat.length - 1; i >= 0; i --){
    HasilAkhir.push(KalimatString[i])
}

HasilAkhir.join('')
console.log(HasilAkhir)