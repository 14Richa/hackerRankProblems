function prime(num) {

	for(var i = 2; i < num; i++){
		if (num % i == 0){
			return "Not prime"
		}
	}
return "prime"
}

console.log(prime(6))
