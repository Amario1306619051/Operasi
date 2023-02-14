function staircase(n) {
    let ar = [];
    let ar1 = [];
    for (let i = 0; i < n; i ++){
        let ar1 = [];
        for (let k = 0; k < n ; k ++){
            if (k >= n-i-1 ){
                ar1.push("#")
            }
            else{ar1.push (" ")}
        }
        ar1 = ar1.join("")
        ar.push(ar1)
    }
    let rere = ar.join("\n")
    return rere
  }
  
  function main() {
    const n = 6
  
    let result = staircase(n);
    console.log(result)
  }
  
  main(); // execute program