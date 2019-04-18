function factorial(n) {
	
	if(n==0) return 1; 
	if (n > 0) {
		n = n * factorial(n - 1);
	}

	return n;
}

console.log(factorial(5))

