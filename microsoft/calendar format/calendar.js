const fs = require('fs');

let content;

function parseData(data) {

	let removeLineEnding = data.split(/\n/g);
	let map = new Map();

	if(!data) { return }

	formattedDates = removeLineEnding.map((date) => {

		let dates = date.split(/\s/g);

		if(dates && dates[0]){

			let date = dates[0];
			let dateFormat = dates[1];
			let targetDateFormat = dates[2];

			let separator = date.match(/\D/)[0];

			let separatedDate = date.split(separator);
			let separatedDateFormat = dateFormat.split(separator);

			separatedDate.forEach((sepDate, index) => map.set(separatedDateFormat[index], sepDate));

			let formatSeparator = targetDateFormat.match(/\W/)[0];
			let separatedTargetDateFormat = targetDateFormat.split(formatSeparator);
			
			let formattedFinal = '';

			separatedTargetDateFormat.forEach((sepDateFormat, index) => {
				
				let d = map.get(sepDateFormat);

				if(index != 2){
					formattedFinal += d +formatSeparator;
				}else{
					formattedFinal += d;
				}
			})

			return formattedFinal;
		}
	})
	return formattedDates;
	
}


fs.readFile('CalendarInput1.txt', 'utf8', function(err, data){
	parseData(data).forEach(function(date){
		console.log(date);
	})
});



