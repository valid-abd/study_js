let num = 266219;
let str = ('' + num).split('');

let result =str.reduce(
	function (sum, current){
		return sum * current;
	}
)

	otv = result ** 3
	number = String(otv).slice(0, 2)
	
console.log(number);
