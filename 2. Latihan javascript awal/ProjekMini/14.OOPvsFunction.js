var Amario = {
    Nama : 'Amario Fausta Harlastputra',
    NIM : '1306619051',
    Alamat : 'Bekasi',
    IndeksPenilaian: [3.68, 3.8, 3.65, 3.48, 3.56, 3.66, 3.86],
    IndeksPenilaianKumulatif : function(){
        var total = 0;
        for(i=0; i<this.IndeksPenilaian.length; i ++){
            total += this.IndeksPenilaian[i]
        }
        return total/this.IndeksPenilaian.length
    }
}