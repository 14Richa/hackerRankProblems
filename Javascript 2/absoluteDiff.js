var a = 0;
console.log(a);

var ans = 100000;

function absoluteDiff(arr)  {
	for(var i = 0; i < arr.length; i++) {
		for(var j = i + 1; j < arr.length; j++) {
			a = Math.abs(arr[i] - arr[j]);
			// console.log(a);
			if(a < ans) ans = a;

		}

	}

	console.log(ans);

	return a;

}

console.log(absoluteDiff([1,2,3,4]));