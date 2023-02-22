class setManual {
    constructor(Himpunan){
        this.Himpunan = Himpunan
    }

    add(Nilai){
        var hasil = []
        for (let i = 0; i < this.Himpunan.length; i ++){
            if (Nilai == this.Himpunan[i]){
                hasil.push(false)
            }else{
                hasil.push(true)
            }
        }
        
        console.log(hasil)

        for (let i = 0; i < hasil.length; i ++){
            if(hasil[i] == true){
                this.Himpunan.push(Nilai)
                break
            }
        }     
    }
}

var satuDua = new setManual([1,2,3])
console.log(satuDua.Himpunan)
satuDua.add(3)
console.log(satuDua.Himpunan)