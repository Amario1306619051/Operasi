class Mahasiswa {
    constructor(Nama, Prodi, IP){
        this.Nama = Nama,
        this.Prodi = Prodi,
        this.IP = IP
    }

    IndeksPrestasiKumulatif(){
        var total = 0;
        for(let i = 0; i < this.IP.length; i ++){
            total += this.IP[i];

            return total/this.IP.length
        }
    }
}

var OrangJenius = new Mahasiswa('AlexanderArnold', 'Liverpool', [4,4,4,4,4,4])
console.log(OrangJenius.IndeksPrestasiKumulatif())