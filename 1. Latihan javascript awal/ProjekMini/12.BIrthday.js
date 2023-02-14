function birthdayCakeCandles(candles) {
    let b = 0;
    let jumlah = 0;
    for (let i = 0; i < candles.length; i ++){
      if(b > candles[i]){
        b = b;
      }
      else if(b <= candles[i]){
        b = candles[i]
      }
    }
    for (let i = 0; i < candles.length; i ++){
      if(candles[i] == b){
        jumlah ++
      }
    }
    return jumlah
  }
  
function main() {
    var ar = [3, 2, 1, 3]; 
    var result = birthdayCakeCandles(ar);
    console.log(result);
  
}
  
  main();