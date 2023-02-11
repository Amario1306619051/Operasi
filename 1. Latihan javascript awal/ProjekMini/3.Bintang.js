var BentukBintang = (Nilai) => {
    var Bintang = []
    for (let i = 0 ; i < Nilai; i ++){
        var Bintang1 = []
        for (let k = Nilai; k > i; k--){
            Bintang1.push('*')
        }
        Bintang.push(Bintang1)
        Bintang1 = []
    }
    Bintang.join('/n')
    console.log(Bintang)
    return Bintang
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Please enter a value: ', (input) => {
    BentukBintang(input);
    readline.close();
});

