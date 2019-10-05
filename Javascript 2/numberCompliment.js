var findComplement = function(num) {
	var arr2 = [];
	var arr = (num.toString(2))
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] == 0) {
			arr2.push(1)
		}
		else if(arr[i] == 1){
			arr2.push(0)
		}
	}

	var d = arr2.join("")
	var a = parseInt(d,2)
	return a
};

var b = findComplement(5)

console.log(b)