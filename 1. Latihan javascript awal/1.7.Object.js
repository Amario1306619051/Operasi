var Amario = {
    Nama : 'Amario Fausta Harlastputra',
    ProgramStudi : 'Fisika',
    Alamat : 'Bekasi',
    IndeksPenilaian: [3.68, 3.8, 3.65, 3.48, 3.56, 3.66, 3.86],
    IndeksPenilaianKumulatif: function(){
        var total = 0;
        for(i=0; i<this.IndeksPenilaian.length; i ++){
            total += this.IndeksPenilaian[i]
        }
        return total/this.IndeksPenilaian.length
    }
}
console.log(Amario.IndeksPenilaianKumulatif)
function BuatFunctionMhs (Nama, ProgramStudi, Alamat){
    var Muhlis =  {};
    Muhlis.Nama = Nama;
    Muhlis.ProgramStudi = ProgramStudi;
    Muhlis.Alamat = Alamat;

    return Muhlis;
}

MuhlisAhmad = BuatFunctionMhs('Muhlis Ahmad Abdillah', 'Fisika' , 'Mampang' )
console.log(MuhlisAhmad)

function BuatFunctionMhsConstructor (Nama, ProgramStudi, Alamat){
    this.Nama = Nama,
    this.ProgramStudi = ProgramStudi,
    this.Alamat = Alamat
}

Pridana = new BuatFunctionMhsConstructor('Pridana Fadhilah Akbar', 'Fisika', 'Prima Harapan')
console.log(Pridana)
console.log(Amario.IndeksPenilaianKumulatif())