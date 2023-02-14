var HimpunanNama = ['Amario','Pridana','Muhlis']

HimpunanNama.push('Putra');
console.log(HimpunanNama);
console.log(HimpunanNama.length);
console.log(HimpunanNama.join(' - '));
HimpunanNama.pop()
console.log(HimpunanNama)

var Angka = [1,2,3,4,5,6]
Angka.map(function(e){
    return e*2
})

console.log(Angka)