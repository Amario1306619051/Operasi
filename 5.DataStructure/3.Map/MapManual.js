class mapManual {
    constructor (Himpunan){
        this.Himpunan = Himpunan
    }

    set(Himpunan1){
        var Himpunan2 = []
        for (let i = 0; i < this.Himpunan.length; i ++){

            if(Himpunan1[0] == this.Himpunan[i][0]){
                Himpunan2.push(true)
            }else{
                Himpunan2.push(false)
            }
        }
        console.log(Himpunan2)
    }
}

var satuDua = new mapManual([['apel', 300],['jeruk', 400],['anggur',500]])
satuDua.set(['anggur',100])
console.log(satuDua)