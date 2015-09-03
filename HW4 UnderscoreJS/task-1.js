
/* 
Create a function that:
*   Takes an array of students
    *   Each student has a `firstName` and `lastName` properties
*   **Finds** all students whose `firstName` is before their `lastName` alphabetically
*   Then **sorts** them in descending order by fullName
    *   fullName is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   Then **prints** the fullName of founded students to the console
*   **Use underscore.js for all operations**
*/

function solve(){
  return function (students) {
  	_.chain(students).filter(function(student){
  		return student.firstName < student.lastName;
  	})
  	.map(function(student){
  		student.fullname = student.firstName + ' ' + student.lastName;
  		return student;
  	})
  	.sortBy('fullname')
  	.reverse()
  	.each(function(student){
  		console.log(student.fullname);
  	});
  };
}

module.exports = solve;