function MasukanDataMhs(Nama, Nilai, Alamat, NIM,) {
    this.Nama = Nama,
    this.Nilai = Nilai,
    this.Alamat = Alamat,
    this.NIM = NIM,
    IPK = function(){
        var NilaiKeseluruhan = 0;
        for (let i = 0; i < this.Nilai.length; i ++){
            NilaiKeseluruhan += this.Nilai[i];

            return NilaiKeseluruhan/this.Nilai.length
        }
    }
}

const Amar = new MasukanDataMhs('Amario Fausta Harlastputra',[3,4,3,4], 'Bekasi','1306619051');
const Pridan = new MasukanDataMhs('Pridana Fadhillah Akbar', [4,4,4,3], 'Prima Harapan','1306619060')
const Muhlis = new MasukanDataMhs('Muhlis Ahmad Abdillah', [0,0,1,2], 'Mampang','1306619028')

DataMhs = [Amar, Pridan, Muhlis]
let Nilai = DataMhs.map (DataNilaiNilai => ({ Nama: DataNilaiNilai.Nama ,NilaiIPK: DataNilaiNilai.IPK()}))
console.table()