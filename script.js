let myArray = ['Georgia', 'Florida', 'Alabama', 'Texas', 'Tennessee', 'Virginia']
let myTeams = ['Bulldogs', 'Hurricanes', 'Wildcats', 'Hornets', 'Aggies', 'Lakers']

const getArray = function (array, num) {
//variable that accepts the parameters of the function

	if (num < 0){return "enter a larger number value"};
//check to ensure the number larger than the first index place

	if (num > array.length){return "choose a smaller value"};
//check to ensure the number is not larger than the number of items in the array
	
	return array.slice(0, num);
//returns the portion of the array within the given parameters
}

console.log(getArray(myTeams, 5));