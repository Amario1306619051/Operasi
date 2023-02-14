// Buat kalkulator objek dengan 5 methods:
// - read() meminta (prompt) dua nilai dan menyimpannya sebagai properti objek.
// - sum() mengembalikan jumlah nilai yang disimpan.
// - substract() mengurangi jumlah nilai yang disimpan.
// - multiply() mengalikan nilai yang disimpan.
// - division() membagi nilai yang disimpan.

let Calculator = {
    read :{a: 3, b: 2},

    sum(){
        return this.read.a + this.read.b
    },
    substract(){
        return this.read.a - this.read.b
    },
    multiply(){
        return this.read.a*this.read.b
    },
    division(){
        return this.read.a/this.read.b
    }
}

console.log(Calculator.sum())