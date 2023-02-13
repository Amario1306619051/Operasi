// Grading Students
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/grading/problem

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
    var result = gradingStudents(grades);
    console.log(result.join("\n"));
}
  
  main(); // execute program