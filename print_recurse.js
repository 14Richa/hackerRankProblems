function print_recurse(n) {
	
	if(n==1)
	{
		console.log(1); return;
	} 
	print_recurse(n-1);
	console.log(n);

	return
}

print_recurse(5);
