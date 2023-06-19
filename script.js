//Array Problem 1
let myArray = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];

myFunction = (array, num) => {
	if (num > array.length);
	return "enter a valid number";

	if (num < 0);
	return "enter a positive number";

	return array.slice(0, num);
}