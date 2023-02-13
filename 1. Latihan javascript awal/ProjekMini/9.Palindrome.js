var ListPalindrom = []

for(let i = 10; i < 12; i ++){
    var array = Array.from(String(i), Number).map(Number);
    var array1 = Array.from(String(i), Number).reverse().map(Number);

}

console.log(array == array1, array)
