function round_grade(num) {
    if(num < 38) {
		return num;
    }
    else
    {
    	var dist = 5 - num%5;
    	if(dist < 3)
    	{
    		return num+dist;
    	}
    	else return num;
    }
}




function gradingStudents(grades) {
	var new_arr = []
	for(var i = 0; i <grades.length; i++){
		new_arr.push(round_grade(grades[i]));
	}
    return new_arr

}



