
// O(n^2) solution

var input = [1, 7, 3, 4];


var solution = input.map(function(num, index) {

	return input.reduce((prev, next) => next===input[index] ? prev*1 : prev*next);
})

console.log(solution);