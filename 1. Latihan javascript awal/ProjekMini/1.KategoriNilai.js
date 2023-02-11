// Menggunakan switch case, petakan nilai ujian di bawah ini ke dalam Nilai A B C D E
// A = 91-100
// B = 71-90
// C = 61-70
// D = 51-60
// E = <= 50

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  var CekKategoriNilai = (Nilai) => {
      if (Nilai <= 100 && Nilai >= 90){
          return 'Nilai Anda A'
      } else if (Nilai <= 90 && Nilai >= 71){
          return `Nilai anda B`
      } else if (Nilai >= 61 && Nilai <= 70){
          return `Nilai anda C`
      }else if (Nilai >= 51 && Nilai <= 60){
          return `Nilai anda D`
      }else{
          return `Nilai anda E`
      }
  }

  readline.question('Please enter a value: ', (input) => {
    console.log(CekKategoriNilai(input));
    readline.close();
});
  