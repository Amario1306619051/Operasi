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

function Mahasiswa (Nama,NIM,Alamat,IP){
    var Muhlis = {};
    Muhlis.Nama = Nama;
    Muhlis.NIM = NIM;
    Muhlis.Alamat = Alamat;
    Muhlis.IP = IP;
    Muhlis.IPK = function (){
        var total = 0
        for(let i = 0; i < IP.length; i ++){
            total += this.IP[i]
        } 
        return total/this.IP       
    }
    return Muhlis
}

console.log(Mahasiswa('Muhlis','1306619028','Mampang',[3.68, 3.8, 3.65, 3.48, 3.56, 3.66, 3.86]))