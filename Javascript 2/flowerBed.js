//var count = 0;

//var n = arr.length;
function flowerBed(arr, n) {
    var count = 0;
    //var arr = flowerbed;
	var num = arr.length;
	for(var i = 0; i < num; i++) {
		console.log("here i", i)
		// will not go further in the loop
		if(arr[i] == 1) continue;

		if(arr[i] == 0)
		{
			if( i != 0 && i != (num - 1))
			{
				if( arr[i -1] == 0 && arr[i + 1] == 0)
				{
					count++;
					i++;
					continue;
				}
			}
			if( i == 0 && num != 1)
			{
				if(arr[i+1] == 0)
				{
					count++;
					i++;
					continue;

					console.log(count)
					
				}
			}
			if( i == (num - 1) && num != 1 ) 
			{
				if( arr[i-1] == 0) 
				{
					count++;
				}
			}
            if(num ==1 && arr[i] == 0) count++;
		}


			 
	}

	console.log("final ",count);
	if( n > count ) return false;
	else return true;
}

var a = flowerBed([0,0,] , 2);

