 function gradingStudents(grades) {
    let a = 0;
    let ans = [];
    for( let i = 0 ; i <grades.length; i ++){
      if(grades[i] < 38){
        a = grades[i]
      }
      else if( grades[i] >= 38 && grades[i] % 5 >= 3){
        a = (parseInt(grades[i]/5) + 1)*5
      }
      else if( grades[i] >= 38 && grades[i] % 5 <= 2){
        a = grades[i]
      }
      ans.push(a)
    }
    return ans
}
  
function main() {
    var grades = [73, 67, 38, 33]; 
    var grades2 = [72,62,79,45]
    var grades3 = [76, 89, 56, 30]
    var result = gradingStudents(grades2);
    console.log(result.join("\n"));
}
  
  main(); // execute