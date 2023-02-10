var IndeksPrestasiSemester = [3.68, 3.8, 3.65, 3.48, 3.56, 3.66, 3.86]

let Amario = (IP, IndeksPrestasiKeseluruhan) => {
    IndeksPrestasiKeseluruhan(IP)
}

let IndeksPrestasiTotal = (Nilai) => {
    var total = 0
    for (let i = 0; i < Nilai.length; i ++){
        total += Nilai[i];

        return total/Nilai.length
    }
}

console.log(Amario(IndeksPrestasiSemester,IndeksPrestasiTotal))