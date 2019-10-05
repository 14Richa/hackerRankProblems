function nonDecreasing(arr) {
	var count = 0;
	for(var i =0; i < arr.length; i++) {
		if(arr[i] < arr[i+1]) {
			count++;
			console.log(count);
		}
	}

	console.log(nonDecreasing([4,2,1]))

}