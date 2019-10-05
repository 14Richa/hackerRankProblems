
function checkUnique(arr)
{
	var obj = {};
	for( var i=0; i<arr.length;i++)
	{
		if(obj[arr[i]]) return false;
		else obj[arr[i]] = true;
	}
	return true;
}


function uniqueOccurences(arr) {
	//var count = 0;
	var obj = {};

	for( var i = 0; i < arr.length; i++) {
		var char = arr[i];
		if(obj[char]) {
			obj[char]++;
			console.log(obj[char])
		}
		else {
			obj[char] = 1;
		}

	}

	console.log(obj);
	var vals = Object.values(obj)

	return(checkUnique(vals));

}

a = uniqueOccurence([1,1,2,4,4,4]);

console.log(a)


  
 

