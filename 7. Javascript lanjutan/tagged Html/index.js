const dataMahasiswa = [
    {
      nama: "Andi",
      id: "0001",
      nilai: [80, 85, 90, 95, 85],
      programStudi: "Teknik Informatika"
    },
    {
      nama: "Budi",
      id: "0002",
      nilai: [75, 90, 80, 85, 90],
      programStudi: "Sistem Informasi"
    },
    {
      nama: "Cindy",
      id: "0003",
      nilai: [70, 75, 85, 80, 95],
      programStudi: "Teknik Informatika"
    },
    {
      nama: "Dedi",
      id: "0004",
      nilai: [90, 85, 80, 90, 80],
      programStudi: "Sistem Komputer"
    },
    {
      nama: "Eva",
      id: "0005",
      nilai: [85, 90, 75, 80, 85],
      programStudi: "Teknik Informatika"
    },
    {
      nama: "Fandi",
      id: "0006",
      nilai: [80, 90, 85, 95, 90],
      programStudi: "Sistem Informasi"
    },
    {
      nama: "Gina",
      id: "0007",
      nilai: [90, 85, 75, 80, 85],
      programStudi: "Teknik Informatika"
    },
    {
      nama: "Hadi",
      id: "0008",
      nilai: [85, 90, 80, 85, 90],
      programStudi: "Sistem Komputer"
    },
    {
      nama: "Ina",
      id: "0009",
      nilai: [90, 85, 90, 80, 75],
      programStudi: "Teknik Informatika"
    },
    {
      nama: "Joko",
      id: "0010",
      nilai: [85, 90, 75, 85, 95],
      programStudi: "Sistem Informasi"
    }
];

function hitungRataRata (Nilai){
    var rataRata = 0

    for (let i = 0; i < Nilai.length; i ++){
        rataRata += Nilai[i]
    }

    return rataRata/Nilai.length
}

function menampilkanData(Nilai,fungsiMenghitungRataRata){
    hasilMenampilkanData = Nilai.map(hasilMap => `
        <h2> ${hasilMap.nama}</h2>
        <p> ${hasilMap.id}</p>
        <p> ${hasilMap.programStudi} </p>
        <p> ${fungsiMenghitungRataRata(hasilMap.nilai)}</p>
        `
    )
    return hasilMenampilkanData
}

const Hasil = `
<div> 
    ${menampilkanData(dataMahasiswa,hitungRataRata)}
</div>
`
document.body.innerHTML = Hasil;