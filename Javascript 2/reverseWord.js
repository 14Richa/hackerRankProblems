
function reverseWord(str) {
	var a = str.split(" ")
	console.log(a)
		for(var i = 0; i< a.length; i++) {
		var ans = a[i].split("").reverse().join("")
		a[i] = ans;
	}
	return a.join(" ");

	
}



console.log(reverseWord("Richa is happy"));