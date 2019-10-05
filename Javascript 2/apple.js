var a
var b


function helper(str, a, b) {
		while( a < b) 
		{
			console.log(a);
			//console.log(b);
			//console.log("hi");
			var x = str[a]
			var y = str[b]
			str = str.substr(0,a) + x + str.substr(a+1);
			console.log(str.substr(0,a));
			//console.log(str.substr(a+1));

			//console.log(str.substr(0,a+1) );
			str = str.substr(0,b) + y + str.substr(b+1);
			//console.log(str.substr(0,b+1))
			//str[a] = x
			//str[b] = y
			a++; b--;
			//
			console.log(str);
		}
	return str;

}


console.log(helper("RICHASHARMA", 0, 10));



str = [ ["R", "I", "C", "A"], ["I", "S"] ];
str1 = str.reverse()

console.log(str1);
