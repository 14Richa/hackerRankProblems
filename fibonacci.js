function fib(n) {
	if((n == 0) || (n == 1)) {
		return 1;
	}
	else
	{	
		r = fib(n-1) + fib(n-2)
	}
	return r;
	
}

console.log(fib(3));