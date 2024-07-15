const numbers = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i]);
}

function sum(a, b, c) {
	console.log(a + b * c);
}

sum(1,2,3)

// if(numbers.length > 5){
//     console.log("TRUE")
// }
// else{
//     console.log("FALSE")
// }

numbers.length > 5 ? console.log('TRUE') : console.log('FALSE');

console.log(`Tablica z cyframi ma ${numbers.length} elementów`);
