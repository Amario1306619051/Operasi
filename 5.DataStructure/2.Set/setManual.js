class setManual {
    constructor(Himpunan){
        this.Himpunan = Himpunan
    }

    add(Nilai){
        var hasil = []
        for (let i = 0; i < this.Himpunan.length; i ++){
            if (Nilai == this.Himpunan[i]){
                hasil.push(true)
            }else{
                hasil.push(false)
            }
        }
        console.log(hasil)
        var sementara = false
        for ( let variabel of hasil){
            sementara = sementara || variabel
        }
        if (sementara == false){
            return this.Himpunan.push(Nilai)
        }
    }

    clear(){
        this.Himpunan = []
    }

    delete(Nilai){
        var hasil = []
        for (let i = 0; i < this.Himpunan.length; i ++){
            if (Nilai == this.Himpunan[i]){
                hasil.push(true)
            }else{
                hasil.push(false)
            }
        }
        console.log(hasil)
        var sementara = false
        for ( let variabel of hasil){
            sementara = sementara || variabel
        }
        if (sementara == false){
            return this.Himpunan.pop()
        }
    }
}

var satuDua = new setManual([1,2,3])
console.log(satuDua.Himpunan)
satuDua.add(3)
console.log(satuDua.Himpunan)
satuDua.delete(2)
console.log(satuDua.Himpunan)