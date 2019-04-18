function add_recurse(n) {
	if(n == 1) {
		return 1;
	}
    r = n + add_recurse(n-1);
    return r;

}

console.log(add_recurse(4));