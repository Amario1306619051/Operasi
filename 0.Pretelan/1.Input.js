const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Please enter a value: ', (input) => {
    console.log(CekKelipatan(input));
    readline.close();
});