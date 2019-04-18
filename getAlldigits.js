

function digi(num)
{

	var sum = 0;
	var count = 0;
	while(num>0)
	{
		var dig = num%10;
		sum += dig;
		count++; 
		num = Math.floor(num/10);
	}


	console.log(sum);
	console.log(sum/count);
}

digi(1234);