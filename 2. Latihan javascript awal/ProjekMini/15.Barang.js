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
    }
    kurangiStok(jumlah){
        this.stok -= jumlah
    }
}