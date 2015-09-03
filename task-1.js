
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
  	_.chain(students).filter(function(item){
  		return item.firstName < item.lastName;
  	})
  	.map(function(item){
  		item.fullname = item.firstName + ' ' + item.lastName;
  		return item;
  	})
  	.sortBy('fullname')
  	.reverse()
  	.each(function(item){
  		console.log(item.fullname);
  	});
  };
}

module.exports = solve;