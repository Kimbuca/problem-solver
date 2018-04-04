const fs = require('fs');


function mapPath(stack) {

	if(stack.length<=0){
		console.log("\\");
	}else{
		let path = '';
		stack.forEach((dir) => path += "\\"+dir );
		console.log(path);
	}
}


function solvePath(data) {

	let stack = [];

	data.forEach(function(line) {

		stack = [];
		lineSyms = line.split('\\');

		lineSyms.forEach(function(sym) {

			let oneBack = -1;

			if(!sym){

			}else{

				let multipleBacks = sym.match(/^((\D|\W)?\.+(\D|\W)?)$/g);

				if(multipleBacks){	
					oneBack += sym.length;
				}else if(sym === '*'){
					stack = [];
				}else{
					stack.push(sym);
				}
			}

			for(let i=0; i<oneBack; i++){
				stack.pop();
			}

		});

		mapPath(stack);

	});

}



fs.readFile('PracticeInput2.txt', 'utf8', function(err, data){
	solvePath(data.split(/\r\n/g));
});
