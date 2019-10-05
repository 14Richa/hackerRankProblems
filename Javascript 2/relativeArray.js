var arr3 = [];
var arr4 = [];

function relative(arr1, arr2) {
	for (var i = 0; i < arr2.length; i++) {
		for (var j = 0; j < arr1.length; j++) {
			if(arr2[i] == arr1[j]){
			arr3.push(arr1[j]);
			//console.log(arr3);
			}

		}
	}


	return arr3;
}

var arr5 = [];

function uncommon(arr1, arr2) {
	for (var i = 0; i <arr1.length; i++) {
		var found = 0;
			for (var j = 0; j < arr2.length; j++) {
				if(arr1[i] == arr2[j]) {
					found = 1;
					break;
				}
			}

			if(found == 0) {
				arr5.push(arr1[i])
			}

	}

	return arr5;
}


var ans = relative([2,2,1,4,7,3,4,5], [1,2,3,4]);


var uncom = uncommon([2,2,1,4,7,3,4,5], [1,2,3,4])
var sortedArray = uncom.sort();

var final = ans.concat(sortedArray);


console.log(final);
