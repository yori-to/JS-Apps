/* 
Create a function that:
*   **Takes** an array of animals
    *   Each animal has propeties `name`, `species` and `legsCount`
*   **finds** and **prints** the total number of legs to the console in the format:
    *   "Total number of legs: TOTAL_NUMBER_OF_LEGS"
*   **Use underscore.js for all operations**
*/

//==============solution================//

// //check if running on Node.js
// if (typeof require !== 'undefined') {
// 		//load underscore if on Node.js
// 		_ = require('../../demos/scripts/underscore.js');
// 	}

function solve(){
  return function (animals) {
  	var sumOfLegs = 0;
  		_.each(animals, function(animal){
  			sumOfLegs += animal.legsCount;
  			
  		});
  	console.log('Total number of legs: ' + sumOfLegs);
  };
}

module.exports = solve;

// var Animal = Object.create({
// 	init: function(name, species, legsCount) {
// 		this.name = name;
// 		this.species = species;
// 		this.legsCount = legsCount;
// 		return this;
// 	}
	
// });

// var animals = [
// 	Object.create(Animal).init('Krawka', 'cow', 4),
// 	Object.create(Animal).init('Gosho', 'pig', 4),
// 	Object.create(Animal).init('Bobi', 'dog', 4),
// 	Object.create(Animal).init('Pileto', 'bird', 2),
// 	Object.create(Animal).init('Milka', 'cow', 4),
// 	Object.create(Animal).init('Lucky', 'dog', 4),
// 	Object.create(Animal).init('Roger', 'bull', 4)
// ];


// func = solve();
// func(animals);

