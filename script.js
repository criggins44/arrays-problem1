let myArray = ['Georgia', 'Florida', 'New York', 'New Jersey', 'California', 'Arizona', 'Illinois', 'Missouri']
let secondArray = ['America', 'Mexico', 'Canada', 'France', 'Italy', 'Germany', 'England']

console.log(myArray.slice(0, 2));

console.log(myArray.length);

const getArray = function (array, num) {

if(num > array.length); 
	return "enter a shorter value";

return array.slice(0, num);
}

console.log(getArray(myArray, 2));