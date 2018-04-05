var s = 'abdbanc';

function getUnrepeatedString(s) {

	let sArray = Array.from(s);
	let charDictionary = {};

	sArray.forEach((char) => {

		if(!charDictionary[char]){
			charDictionary[char] = 1;
		}else{ 
			charDictionary[char] = charDictionary[char] + 1;
		}
	});

	for(let i=0; i<sArray.length; i++) {

		let currentChar = sArray[i];
		let freq = charDictionary[currentChar];

		if(freq == 1) {
			return currentChar;
		}
	} 
	
	return '_';
}