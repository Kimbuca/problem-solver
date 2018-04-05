// O(n^2) solution 

var input = [1, 7, 3, 4];

var solution = input.map(function(num, index) {

	return input.reduce((prev, next) => next===input[index] ? prev : prev*next);
})

console.log(solution);


// O(n) with subproblems, less elegant better performance

var productsSoFar = 1;
var productsBeforeIndex = []


for (i in input) {
	productsBeforeIndex[i] = productsSoFar;
	productsSoFar *= input[i]
}
  var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt();

console.log(productsBeforeIndex)