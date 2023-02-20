class Barang {
    constructor(id,nama,stok,hargaBeli,hargaJual){
        this.id = id,
        this.nama = nama,
        this.stok = stok,
        this.hargaBeli = hargaBeli,
        this.hargaJual = hargaJual
    }
    tambahStok(jumlah){
        this.stok +=jumlah
        return this.stok
    }
    kurangiStok(jumlah){
        this.stok -= jumlah
        return this.stok
    }
}

var Popok = new Barang(1,'Popok',60,1000,500)
console.log(Popok.kurangiStok(5))