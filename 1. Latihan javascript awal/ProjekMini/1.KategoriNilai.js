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
 
//Menggunakan switch case
let grade = prompt("Masukkan nilai: ");

switch (true) {
  case (grade >= 91 && grade <= 100):
    console.log("Nilai: A");
    break;
  case (grade >= 71 && grade <= 90):
    console.log("Nilai: B");
    break;
  case (grade >= 61 && grade <= 70):
    console.log("Nilai: C");
    break;
  case (grade >= 51 && grade <= 60):
    console.log("Nilai: D");
    break;
  case (grade <= 50):
    console.log("Nilai: E");
    break;
  default:
    console.log("Nilai tidak valid");
    break;
}
