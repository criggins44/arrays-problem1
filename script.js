let myArray = ['Georgia', 'Florida', 'Alabama', 'Texas', 'Tennessee', 'Virginia']
let myTeams = ['Bulldogs', 'Hurricanes', 'Wildcats', 'Hornets', 'Aggies', 'Lakers']

const getArray = function (array, num) {

	if (num < 0){return "try again"};
	if (num > array.length){return "choose a smaller value"};

	return array.slice(0, num);
}

console.log(getArray(myTeams, 5));