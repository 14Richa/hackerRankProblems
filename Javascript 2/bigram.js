function bigram(text, first, second) {
	var arr = text.split(' ');
	var ans = [];
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] === first && arr[i+1]===second){
			ans.push(arr[i+2]);
		}
	}

	return ans;


}

console.log(bigram("we will we will rock you", "we", "will"))