var Jam = 0
var Menit = 0
var Detik = 0
var PrintJam 
var PrintMenit


function KonversiFormat (Nilai) {
    Jam = Math.floor(Nilai/3600);
    Menit = Math.floor(Nilai/60);
    Detik = Nilai%60

    if(Jam < 10){
        PrintJam = `0${Jam}`
    }else{
        PrintJam = Jam
    }

    if(Menit < 10){
        PrintMenit = `0${Menit}`
    }else{
        PrintMenit = Menit
    }

    return `${PrintJam}:${PrintMenit}:${Detik}`    
}

console.log(KonversiFormat(500))