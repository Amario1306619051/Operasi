var CekKelipatan = (Nilai) => {
    for(let i = 0; i <= Nilai; i ++){
        if (i%3 == 0 && i%5 == 0){
            console.log('Bilangan ini habis dibagi 3')
        }else if(i % 5 == 0){
            console.log(`Bilangan ini habis dibagi 5`)
        }else if(i%3 == 0){
            console.log(`Bilangan ini habis dibagi 3 dan 5`) 
        }else{
            console.log(`Bilangan ini tidak habis dibagi 5 dan 3`) 
        }
    }
}


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Please enter a value: ', (input) => {
    console.log(CekKelipatan(input));
    readline.close();
});