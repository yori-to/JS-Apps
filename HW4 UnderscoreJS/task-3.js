/* 
Create a function that:
*   Takes an array of students
    *   Each student has:
        *   `firstName`, `lastName` and `age` properties
        *   Array of decimal numbers representing the marks         
*   **finds** the student with highest average mark (there will be only one)
*   **prints** to the console  'FOUND_STUDENT_FULLNAME has an average score of MARK_OF_THE_STUDENT'
    *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   **Use underscore.js for all operations**
*/

function solve() {
	return function(students) {
		_.chain(students)
			.map(function(student) {
				student.fullname = student.firstName + ' ' + student.lastName;
				var sumOfMarks = _.reduce(student.marks, function(memo, num) {
					return memo + num;
				});
				student.avgMark = sumOfMarks/student.marks.length;
				return student;
			})
			.sortBy('avgMark')
			.last
			.tap(function(student){
				console.log(student.fullname + ' has an average score of ' + student.avgMark);
			});
	};
}

module.exports = solve;