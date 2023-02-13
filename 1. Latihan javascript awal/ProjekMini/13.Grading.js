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
    //     var n = parseInt(readLine());
    //     var grades = [];
    //     for(var grades_i = 0; grades_i < n; grades_i++){
    //        grades[grades_i] = parseInt(readLine());
    //     }
    var grades = [73, 67, 38, 33]; // override input
    var grades2 = [72,62,79,45]
    var grades3 = [76, 89, 56, 30]
    var result = gradingStudents(grades2);
    console.log(result.join("\n"));
}
  
  main(); // execute program