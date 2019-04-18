function staircase(n) {
	for (var i = 1; i <= n; i++) {
		var str = '#';
		console.log(str.repeat(i) );
	}
	return;
}

//staircase(3);



function staircase1(n) {
	for (var i = 1; i <= n; i++) {
		var str = ' '.repeat(n-i) + '#'.repeat(i);
		console.log(str);
	}
	return;
}

//staircase1(3);

function staircase2(n) {
	if(n == 1) {
		console.log('#')
	}
	else {
		staircase2(n-1);
		console.log ('#'.repeat(n))
	}
}

staircase2(3)



