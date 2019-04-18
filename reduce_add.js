function add_number(total,b) {
	return total + b;
}



function simpleArraySum(ar) {
	return ar.reduce(add_number);
	

        
}


console.log(simpleArraySum([1,2,3,4,5,6]))